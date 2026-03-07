document.addEventListener("DOMContentLoaded", function () {
  // --- Read from window globals (set by data.js, suburbs.js, geo.js) ---
  var courts = window.TENNIS_DATA.courts;
  var courtTypeLabels = window.TENNIS_DATA.courtTypeLabels;
  var featureLabels = window.TENNIS_DATA.featureLabels;
  var suburbs = window.TENNIS_SUBURBS;
  var haversineDistance = window.TENNIS_GEO.haversineDistance;
  var formatDistance = window.TENNIS_GEO.formatDistance;
  var getUserLocation = window.TENNIS_GEO.getUserLocation;
  var getMapsUrl = window.TENNIS_GEO.getMapsUrl;
  var getDirectionsUrl = window.TENNIS_GEO.getDirectionsUrl;

  // --- State ---
  var userLocation = null;
  var activeCourtTypeFilter = "all";
  var currentSort = "name";
  var workingCourts = [];

  // --- DOM refs ---
  var suburbInput = document.getElementById("suburb-input");
  var dropdown = document.getElementById("autocomplete-dropdown");
  var locateBtn = document.getElementById("locate-btn");
  var locationStatus = document.getElementById("location-status");
  var courtTypeFilters = document.getElementById("court-type-filters");
  var sortSelect = document.getElementById("sort-select");
  var courtList = document.getElementById("court-list");
  var resultsCount = document.getElementById("results-count");

  // --- Price color thresholds ---
  function getPriceClass(price) {
    if (price === null) return "price-unknown";
    if (price <= 20) return "price-low";
    if (price <= 30) return "price-mid";
    return "price-high";
  }

  // --- Compute distances ---
  function recomputeDistances() {
    workingCourts = courts.map(function (c) {
      var dist = userLocation
        ? haversineDistance(userLocation.lat, userLocation.lng, c.lat, c.lng)
        : null;
      var copy = {};
      for (var k in c) { copy[k] = c[k]; }
      copy.distance = dist;
      return copy;
    });
  }

  // --- Filtering ---
  function applyFilters() {
    var filtered = workingCourts;

    if (activeCourtTypeFilter !== "all") {
      filtered = filtered.filter(function (c) {
        return c.courtTypes.indexOf(activeCourtTypeFilter) !== -1;
      });
    }

    return filtered;
  }

  // --- Sorting ---
  function applySort(list) {
    var sorted = list.slice();
    switch (currentSort) {
      case "name":
        sorted.sort(function (a, b) { return a.name.localeCompare(b.name); });
        break;
      case "distance":
        sorted.sort(function (a, b) {
          if (a.distance === null && b.distance === null) return 0;
          if (a.distance === null) return 1;
          if (b.distance === null) return -1;
          return a.distance - b.distance;
        });
        break;
      case "price-asc":
        sorted.sort(function (a, b) {
          if (a.cheapestHourly === null && b.cheapestHourly === null) return 0;
          if (a.cheapestHourly === null) return 1;
          if (b.cheapestHourly === null) return -1;
          return a.cheapestHourly - b.cheapestHourly;
        });
        break;
      case "price-desc":
        sorted.sort(function (a, b) {
          if (a.cheapestHourly === null && b.cheapestHourly === null) return 0;
          if (a.cheapestHourly === null) return 1;
          if (b.cheapestHourly === null) return -1;
          return b.cheapestHourly - a.cheapestHourly;
        });
        break;
      case "courts":
        sorted.sort(function (a, b) {
          if (a.courtCount === null && b.courtCount === null) return 0;
          if (a.courtCount === null) return 1;
          if (b.courtCount === null) return -1;
          return b.courtCount - a.courtCount;
        });
        break;
    }
    return sorted;
  }

  // --- Render ---
  function render() {
    var filtered = applyFilters();
    var sorted = applySort(filtered);

    resultsCount.textContent = "Showing " + sorted.length + " of " + courts.length + " courts";

    if (sorted.length === 0) {
      courtList.innerHTML =
        '<div class="no-results">' +
        '<p class="no-results__title">No courts match your filters</p>' +
        "<p>Try adjusting your filters to see more results.</p>" +
        "</div>";
      return;
    }

    courtList.innerHTML = sorted.map(function (c) { return renderCard(c); }).join("");

    // Attach expand listeners
    var mains = courtList.querySelectorAll(".court-card__main");
    for (var i = 0; i < mains.length; i++) {
      (function (el) {
        el.addEventListener("click", function () {
          var card = el.closest(".court-card");
          card.classList.toggle("expanded");
          card.querySelector(".court-card__details").classList.toggle("open");
        });
      })(mains[i]);
    }
  }

  function renderCard(c) {
    var priceDisplay =
      c.cheapestHourly !== null
        ? '<span class="court-card__price ' + getPriceClass(c.cheapestHourly) + '">$' + c.cheapestHourly + '/hr</span>' +
          '<span class="court-card__price-label">from</span>'
        : '<span class="court-card__price price-unknown">Contact venue</span>';

    var distDisplay =
      c.distance !== null
        ? '<span class="court-card__distance">' + formatDistance(c.distance) + "</span>"
        : "";

    var surfaceTags = c.courtTypes
      .map(function (t) { return '<span class="tag tag--surface">' + (courtTypeLabels[t] || t) + "</span>"; })
      .join("");

    var courtCountTag =
      c.courtCount !== null
        ? '<span class="tag tag--courts">' + c.courtCount + " courts</span>"
        : "";

    var featureTags = c.features
      .map(function (f) { return '<span class="tag">' + (featureLabels[f] || f) + "</span>"; })
      .join("");

    // Pricing detail
    var pricingDetail = "";
    if (c.pricing.offPeak !== null || c.pricing.peak !== null) {
      pricingDetail =
        '<div class="detail-block">' +
        '<div class="detail-block__label">Pricing</div>' +
        '<div class="detail-block__value">' +
        (c.pricing.offPeak !== null ? "Off-peak: $" + c.pricing.offPeak + "/hr <small>(" + c.pricing.offPeakLabel + ")</small><br>" : "") +
        (c.pricing.peak !== null ? "Peak: $" + c.pricing.peak + "/hr <small>(" + c.pricing.peakLabel + ")</small>" : "") +
        "</div></div>";
    }

    var notesDetail = c.pricing.notes
      ? '<div class="detail-block">' +
        '<div class="detail-block__label">Notes</div>' +
        '<div class="detail-block__value">' + c.pricing.notes + "</div></div>"
      : "";

    // Actions
    var bookBtn = c.bookingUrl
      ? '<a href="' + c.bookingUrl + '" target="_blank" rel="noopener" class="action-btn action-btn--book">Book Now</a>'
      : c.website
        ? '<a href="' + c.website + '" target="_blank" rel="noopener" class="action-btn action-btn--book">Visit Website</a>'
        : "";

    var callBtn = c.phone
      ? '<a href="tel:' + c.phone.replace(/[^0-9+]/g, "") + '" class="action-btn action-btn--call">Call ' + c.phone + "</a>"
      : "";

    var mapBtn = '<a href="' + getMapsUrl(c.lat, c.lng) + '" target="_blank" rel="noopener" class="action-btn action-btn--map">View on Map</a>';

    var directionsBtn = userLocation
      ? '<a href="' + getDirectionsUrl(c.lat, c.lng) + '" target="_blank" rel="noopener" class="action-btn action-btn--directions">Get Directions</a>'
      : "";

    var websiteBtn = c.website
      ? '<a href="' + c.website + '" target="_blank" rel="noopener" class="action-btn action-btn--website">Website</a>'
      : "";

    return (
      '<article class="court-card" data-id="' + c.id + '">' +
      '<div class="court-card__main">' +
      '<div class="court-card__info">' +
      '<h2 class="court-card__name">' + c.name + "</h2>" +
      '<p class="court-card__address">' + c.address + "</p>" +
      '<div class="court-card__tags">' + surfaceTags + courtCountTag + featureTags + "</div>" +
      '<p class="expand-hint">Click to expand <span class="chevron">&#9660;</span></p>' +
      "</div>" +
      '<div class="court-card__right">' + priceDisplay + distDisplay + "</div>" +
      "</div>" +
      '<div class="court-card__details">' +
      '<div class="court-card__detail-grid">' +
      pricingDetail + notesDetail +
      '<div class="detail-block"><div class="detail-block__label">Address</div><div class="detail-block__value">' + c.address + "</div></div>" +
      (c.phone ? '<div class="detail-block"><div class="detail-block__label">Phone</div><div class="detail-block__value">' + c.phone + "</div></div>" : "") +
      "</div>" +
      '<div class="court-card__actions">' + bookBtn + callBtn + mapBtn + directionsBtn + websiteBtn + "</div>" +
      "</div>" +
      "</article>"
    );
  }

  // --- Autocomplete ---
  var debounceTimer;
  var activeIndex = -1;
  var currentMatches = [];

  function showDropdown(items) {
    currentMatches = items;
    if (items.length === 0) {
      dropdown.classList.add("hidden");
      return;
    }
    var html = "";
    var max = Math.min(items.length, 8);
    for (var i = 0; i < max; i++) {
      html +=
        '<div class="autocomplete-item' + (i === activeIndex ? " active" : "") + '" data-index="' + i + '">' +
        items[i].name + '<span class="postcode">' + items[i].postcode + "</span></div>";
    }
    dropdown.innerHTML = html;
    dropdown.classList.remove("hidden");

    var allItems = dropdown.querySelectorAll(".autocomplete-item");
    for (var j = 0; j < allItems.length; j++) {
      (function (el) {
        el.addEventListener("click", function () {
          var idx = parseInt(el.getAttribute("data-index"));
          selectSuburb(currentMatches[idx]);
        });
      })(allItems[j]);
    }
  }

  function selectSuburb(suburb) {
    suburbInput.value = suburb.name + " " + suburb.postcode;
    dropdown.classList.add("hidden");
    userLocation = { lat: suburb.lat, lng: suburb.lng };
    showStatus("Showing courts near " + suburb.name, "success");
    currentSort = "distance";
    sortSelect.value = "distance";
    recomputeDistances();
    render();
  }

  suburbInput.addEventListener("input", function () {
    clearTimeout(debounceTimer);
    activeIndex = -1;
    debounceTimer = setTimeout(function () {
      var q = suburbInput.value.trim().toLowerCase();
      if (q.length < 2) {
        dropdown.classList.add("hidden");
        return;
      }
      var matches = suburbs.filter(function (s) {
        return s.name.toLowerCase().indexOf(q) === 0 || s.postcode.indexOf(q) === 0;
      });
      showDropdown(matches);
    }, 150);
  });

  suburbInput.addEventListener("keydown", function (e) {
    var items = dropdown.querySelectorAll(".autocomplete-item");
    if (items.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIndex = Math.min(activeIndex + 1, items.length - 1);
      for (var i = 0; i < items.length; i++) {
        items[i].classList.toggle("active", i === activeIndex);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIndex = Math.max(activeIndex - 1, 0);
      for (var i = 0; i < items.length; i++) {
        items[i].classList.toggle("active", i === activeIndex);
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < items.length) {
        items[activeIndex].click();
      }
    } else if (e.key === "Escape") {
      dropdown.classList.add("hidden");
    }
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".search-input-wrapper")) {
      dropdown.classList.add("hidden");
    }
  });

  // --- Geolocation ---
  locateBtn.addEventListener("click", function () {
    locateBtn.classList.add("loading");
    locateBtn.textContent = "Locating...";
    getUserLocation()
      .then(function (pos) {
        userLocation = pos;
        suburbInput.value = "";
        showStatus(
          "Using your location (" + pos.lat.toFixed(4) + ", " + pos.lng.toFixed(4) + ")",
          "success"
        );
        currentSort = "distance";
        sortSelect.value = "distance";
        recomputeDistances();
        render();
      })
      .catch(function () {
        showStatus(
          "Could not get your location. Please enter a suburb instead.",
          "error"
        );
      })
      .finally(function () {
        locateBtn.classList.remove("loading");
        locateBtn.innerHTML =
          '<svg class="icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg> Use my location';
      });
  });

  // --- Status ---
  function showStatus(msg, type) {
    locationStatus.textContent = msg;
    locationStatus.className = "location-status " + type;
  }

  // --- Filter event listeners ---
  courtTypeFilters.addEventListener("click", function (e) {
    var pill = e.target.closest(".pill");
    if (!pill) return;
    var pills = courtTypeFilters.querySelectorAll(".pill");
    for (var i = 0; i < pills.length; i++) { pills[i].classList.remove("pill--active"); }
    pill.classList.add("pill--active");
    activeCourtTypeFilter = pill.getAttribute("data-filter");
    render();
  });


  // --- Sort ---
  sortSelect.addEventListener("change", function () {
    currentSort = sortSelect.value;
    render();
  });

  // --- Init ---
  recomputeDistances();
  render();
});
