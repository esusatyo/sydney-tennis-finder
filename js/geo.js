(function () {
  var EARTH_RADIUS_KM = 6371;

  function haversineDistance(lat1, lng1, lat2, lng2) {
    var toRad = function (deg) { return deg * (Math.PI / 180); };
    var dLat = toRad(lat2 - lat1);
    var dLng = toRad(lng2 - lng1);
    var a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS_KM * c;
  }

  function formatDistance(km) {
    if (km < 1) return Math.round(km * 1000) + "m";
    return km.toFixed(1) + "km";
  }

  function getUserLocation() {
    return new Promise(function (resolve, reject) {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by your browser"));
        return;
      }
      navigator.geolocation.getCurrentPosition(
        function (pos) { resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }); },
        function (err) { reject(err); },
        { enableHighAccuracy: false, timeout: 10000 }
      );
    });
  }

  function getMapsUrl(lat, lng) {
    return "https://www.google.com/maps/search/?api=1&query=" + lat + "," + lng;
  }

  function getDirectionsUrl(lat, lng) {
    return "https://www.google.com/maps/dir/?api=1&destination=" + lat + "," + lng;
  }

  window.TENNIS_GEO = {
    haversineDistance: haversineDistance,
    formatDistance: formatDistance,
    getUserLocation: getUserLocation,
    getMapsUrl: getMapsUrl,
    getDirectionsUrl: getDirectionsUrl
  };
})();
