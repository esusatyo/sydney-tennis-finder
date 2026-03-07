window.TENNIS_DATA = {};

window.TENNIS_DATA.courts = [
  // === INNER CITY / CBD ===
  {
    id: "prince-alfred-park",
    name: "Prince Alfred Park Tennis",
    address: "166 Chalmers St, Surry Hills NSW 2010",
    suburb: "Surry Hills",
    lat: -33.8836,
    lng: 151.2095,
    phone: "(02) 9265 9222",
    website: "https://www.citycommunitytennis.com.au",
    bookingUrl: "https://www.citycommunitytennis.com.au/locations",
    courtCount: 5,
    courtTypes: ["plexicushion"],
    pricing: {
      peak: 27,
      offPeak: 10,
      peakLabel: "Peak hours",
      offPeakLabel: "Off-peak",
      notes: "Australian Open surface. Open 6am-11pm, 365 days."
    },
    cheapestHourly: 10,
    features: ["lighting", "coaching", "equipment-hire"],
    lastVerified: "2026-03"
  },
  {
    id: "rushcutters-bay",
    name: "Rushcutters Bay Tennis",
    address: "7 Waratah St, Rushcutters Bay NSW 2011",
    suburb: "Rushcutters Bay",
    lat: -33.8748,
    lng: 151.2280,
    phone: "(02) 9357 7332",
    website: "https://www.rushcuttersbaytennis.com.au",
    bookingUrl: "https://www.rushcuttersbaytennis.com.au",
    courtCount: 5,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: 37,
      offPeak: null,
      peakLabel: "Weekend",
      offPeakLabel: "",
      notes: "Weekend rate ~$37/hr. Contact venue for weekday rates."
    },
    cheapestHourly: 37,
    features: ["lighting", "cafe", "coaching"],
    lastVerified: "2026-03"
  },
  {
    id: "st-james-park-glebe",
    name: "St James Park Tennis",
    address: "John St, Glebe NSW 2037",
    suburb: "Glebe",
    lat: -33.8794,
    lng: 151.1835,
    phone: "(02) 9265 9222",
    website: "https://www.citycommunitytennis.com.au",
    bookingUrl: "https://www.citycommunitytennis.com.au/locations",
    courtCount: 2,
    courtTypes: ["hard"],
    pricing: {
      peak: 27,
      offPeak: 10,
      peakLabel: "Peak hours",
      offPeakLabel: "Off-peak",
      notes: "City Community Tennis. Open 7am-10pm, 365 days."
    },
    cheapestHourly: 10,
    features: ["lighting"],
    lastVerified: "2026-03"
  },
  {
    id: "alexandria-park",
    name: "Alexandria Park Tennis",
    address: "Park Rd, Alexandria NSW 2015",
    suburb: "Alexandria",
    lat: -33.9000,
    lng: 151.1950,
    phone: "(02) 9265 9222",
    website: "https://www.citycommunitytennis.com.au",
    bookingUrl: "https://www.citycommunitytennis.com.au/locations",
    courtCount: 2,
    courtTypes: ["hard"],
    pricing: {
      peak: 27,
      offPeak: 10,
      peakLabel: "Peak hours",
      offPeakLabel: "Off-peak",
      notes: "City Community Tennis. Open 7am-10pm, 365 days."
    },
    cheapestHourly: 10,
    features: ["lighting"],
    lastVerified: "2026-03"
  },

  // === EASTERN SUBURBS ===
  {
    id: "white-city",
    name: "Maccabi Tennis (White City)",
    address: "30 Alma St, Paddington NSW 2021",
    suburb: "Paddington",
    lat: -33.8903,
    lng: 151.2255,
    phone: "(02) 9332 3622",
    website: "https://www.maccabitenniswhitecity.com.au",
    bookingUrl: "https://www.maccabitenniswhitecity.com.au",
    courtCount: 14,
    courtTypes: ["synthetic-grass", "grass", "hard"],
    pricing: {
      peak: null,
      offPeak: null,
      peakLabel: "",
      offPeakLabel: "",
      notes: "Historic venue. Contact for current rates."
    },
    cheapestHourly: null,
    features: ["lighting", "coaching"],
    lastVerified: "2026-03"
  },
  {
    id: "cooper-park",
    name: "Cooper Park Tennis",
    address: "1 Bunna Pl, Woollahra NSW 2025",
    suburb: "Woollahra",
    lat: -33.8930,
    lng: 151.2530,
    phone: "(02) 9389 3100",
    website: "https://cooperparktennis.com.au",
    bookingUrl: "https://cooperparktennis.com.au",
    courtCount: 8,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: 40,
      offPeak: null,
      peakLabel: "Standard rate",
      offPeakLabel: "",
      notes: "~$40/hr. Cafe on site."
    },
    cheapestHourly: 40,
    features: ["lighting", "cafe", "pro-shop", "coaching"],
    lastVerified: "2026-03"
  },
  {
    id: "eastside-tennis",
    name: "Eastside Tennis Centre",
    address: "1 Court Ave, Kingsford NSW 2032",
    suburb: "Kingsford",
    lat: -33.9235,
    lng: 151.2270,
    phone: "0493 496 426",
    website: "https://eastsidetennis.com.au",
    bookingUrl: "https://eastsidetennis.com.au",
    courtCount: 8,
    courtTypes: ["synthetic-grass", "hard", "clay"],
    pricing: {
      peak: null,
      offPeak: null,
      peakLabel: "",
      offPeakLabel: "",
      notes: "3 different surfaces. Open 6am-11pm. Birthday parties available."
    },
    cheapestHourly: null,
    features: ["lighting", "coaching"],
    lastVerified: "2026-03"
  },
  {
    id: "snape-park",
    name: "Snape Park Tennis Centre",
    address: "Cnr Snape & Hannan St, Maroubra NSW 2035",
    suburb: "Maroubra",
    lat: -33.9460,
    lng: 151.2380,
    phone: "(02) 9344 3424",
    website: "https://www.oz-tennis.com",
    bookingUrl: "https://www.oz-tennis.com",
    courtCount: 6,
    courtTypes: ["hard", "synthetic-grass"],
    pricing: {
      peak: null,
      offPeak: null,
      peakLabel: "",
      offPeakLabel: "",
      notes: "1 hard court, 5 synthetic grass. Mon-Thu 8am-9:30pm, Fri-Sun 7am-6pm."
    },
    cheapestHourly: null,
    features: ["lighting", "cafe", "coaching"],
    lastVerified: "2026-03"
  },
  {
    id: "wentworth-tennis",
    name: "Wentworth Tennis (Trumper Park)",
    address: "2 Quarry St, Paddington NSW 2021",
    suburb: "Paddington",
    lat: -33.8870,
    lng: 151.2340,
    phone: "(02) 9363 4955",
    website: "https://www.wentworthtennis.com",
    bookingUrl: "https://www.wentworthtennis.com",
    courtCount: 8,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: null,
      offPeak: 30,
      peakLabel: "",
      offPeakLabel: "Mon-Fri 6am-3pm",
      notes: "Off-peak $30/hr. Social tennis Mon/Wed/Fri 9:30am-12pm, Thu 8pm-10pm."
    },
    cheapestHourly: 30,
    features: ["coaching"],
    lastVerified: "2026-03"
  },
  {
    id: "centennial-parklands",
    name: "Centennial Parklands Sports Centre",
    address: "Cnr Anzac Pde & Lang Rd, Moore Park NSW 2021",
    suburb: "Moore Park",
    lat: -33.8950,
    lng: 151.2230,
    phone: null,
    website: "https://parklandssports.com.au",
    bookingUrl: "https://parklandssports.com.au",
    courtCount: 11,
    courtTypes: ["synthetic-grass", "hard"],
    pricing: {
      peak: null,
      offPeak: null,
      peakLabel: "",
      offPeakLabel: "",
      notes: "9 synthetic grass + 2 hard courts. Self-service PIN access. Near light rail."
    },
    cheapestHourly: null,
    features: ["lighting"],
    lastVerified: "2026-03"
  },

  // === NORTH SHORE ===
  {
    id: "willis-recreation",
    name: "Willis Recreation & Sports Centre",
    address: "325A Eastern Valley Way, Chatswood NSW 2067",
    suburb: "Chatswood",
    lat: -33.7920,
    lng: 151.1810,
    phone: "(02) 9133 7915",
    website: "https://www.willoughby.nsw.gov.au",
    bookingUrl: "https://www.willoughby.nsw.gov.au",
    courtCount: 12,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: null,
      offPeak: null,
      peakLabel: "",
      offPeakLabel: "",
      notes: "Open 7am-10pm daily. Licensed cafe, function rooms."
    },
    cheapestHourly: null,
    features: ["lighting", "cafe", "pro-shop", "coaching"],
    lastVerified: "2026-03"
  },
  {
    id: "cammeray-tennis",
    name: "Cammeray Tennis Club",
    address: "Cammeray Park, Cammeray NSW 2062",
    suburb: "Cammeray",
    lat: -33.8190,
    lng: 151.2110,
    phone: null,
    website: "https://www.cammeraytennis.asn.au",
    bookingUrl: "https://www.cammeraytennis.asn.au",
    courtCount: 4,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: 40,
      offPeak: 36,
      peakLabel: "Mon-Fri 6:30-10am & 2-10pm, Weekends",
      offPeakLabel: "Mon-Fri 10am-2pm",
      notes: "Open 6:30am-10pm daily. Membership $220/year."
    },
    cheapestHourly: 36,
    features: ["lighting"],
    lastVerified: "2026-03"
  },
  {
    id: "north-sydney-tennis",
    name: "North Sydney Tennis + Fitness",
    address: "Level 2, 37 Ridge St, North Sydney NSW 2060",
    suburb: "North Sydney",
    lat: -33.8370,
    lng: 151.2070,
    phone: "(02) 9929 7172",
    website: "https://www.nstg.com.au",
    bookingUrl: "https://www.nstg.com.au",
    courtCount: 4,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: null,
      offPeak: null,
      peakLabel: "",
      offPeakLabel: "",
      notes: "Rooftop courts. Mon-Fri 6am-11pm, Sat-Sun 8am-7pm. Pro shop, restringing."
    },
    cheapestHourly: null,
    features: ["lighting", "pro-shop", "coaching"],
    lastVerified: "2026-03"
  },
  {
    id: "killara-lawn",
    name: "Killara Lawn Tennis Club",
    address: "8A Arnold St, Killara NSW 2071",
    suburb: "Killara",
    lat: -33.7660,
    lng: 151.1620,
    phone: null,
    website: "https://killaralawntennisclub.com.au",
    bookingUrl: "https://killaralawntennisclub.com.au",
    courtCount: 6,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: 30,
      offPeak: 25,
      peakLabel: "Night / lights on",
      offPeakLabel: "Daytime",
      notes: "Historic club est. 1912. 4 courts with lights. Coaching via Inspire Tennis."
    },
    cheapestHourly: 25,
    features: ["lighting", "coaching", "clubhouse"],
    lastVerified: "2026-03"
  },

  // === HILLS DISTRICT / UPPER NORTH ===
  {
    id: "kwta-hornsby",
    name: "Kim Warwick Tennis Academy (Hornsby)",
    address: "12A Edgeworth David Ave, Hornsby NSW 2077",
    suburb: "Hornsby",
    lat: -33.7030,
    lng: 151.0990,
    phone: null,
    website: "https://www.kwta.com.au",
    bookingUrl: "https://www.kwta.com.au",
    courtCount: 7,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: null,
      offPeak: null,
      peakLabel: "",
      offPeakLabel: "",
      notes: "Opposite Hornsby Westfield. 5 min walk from station. Founded by Grand Slam champion."
    },
    cheapestHourly: null,
    features: ["coaching"],
    lastVerified: "2026-03"
  },
  {
    id: "kwta-waitara",
    name: "Kim Warwick Tennis Academy (Waitara)",
    address: "Cnr Edgeworth David Ave & Park Ave, Waitara NSW 2077",
    suburb: "Waitara",
    lat: -33.7110,
    lng: 151.1030,
    phone: null,
    website: "https://www.kwta.com.au",
    bookingUrl: "https://www.kwta.com.au",
    courtCount: 6,
    courtTypes: ["synthetic-grass", "plexicushion"],
    pricing: {
      peak: null,
      offPeak: null,
      peakLabel: "",
      offPeakLabel: "",
      notes: "4 synthetic grass, 2 plexicushion hard courts. Clubhouse and playground."
    },
    cheapestHourly: null,
    features: ["lighting", "coaching", "clubhouse", "parking"],
    lastVerified: "2026-03"
  },
  {
    id: "nwst-pennant-hills",
    name: "North West Sydney Tennis (Pennant Hills)",
    address: "25 Britannia St, Pennant Hills NSW 2120",
    suburb: "Pennant Hills",
    lat: -33.7380,
    lng: 151.0720,
    phone: "(02) 9481 0970",
    website: "https://northwestsydneytennis.com.au",
    bookingUrl: "https://etdta.tennisbcs.com.au/Applns/Bookings/Bookdisp2.aspx",
    courtCount: 16,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: 29,
      offPeak: 24,
      peakLabel: "After 5pm",
      offPeakLabel: "Before 5pm",
      notes: "Member rates from $18/hr. Ball machine $20-30/hr."
    },
    cheapestHourly: 24,
    features: ["lighting", "pro-shop", "coaching", "parking"],
    lastVerified: "2026-03"
  },
  {
    id: "nwst-epping",
    name: "North West Sydney Tennis (Epping)",
    address: "97 Midson Rd, Epping NSW 2121",
    suburb: "Epping",
    lat: -33.7690,
    lng: 151.0810,
    phone: "(02) 9481 0970",
    website: "https://northwestsydneytennis.com.au",
    bookingUrl: "https://etdta.tennisbcs.com.au/Applns/Bookings/Bookdisp2.aspx",
    courtCount: 3,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: 29,
      offPeak: 24,
      peakLabel: "After 5pm",
      offPeakLabel: "Before 5pm",
      notes: "David Scott Reserve. Same rates as Pennant Hills."
    },
    cheapestHourly: 24,
    features: ["lighting"],
    lastVerified: "2026-03"
  },
  {
    id: "hdta-castle-hill",
    name: "Hills District Tennis (Castle Hill)",
    address: "Caterson Dr, Castle Hill NSW 2154",
    suburb: "Castle Hill",
    lat: -33.7310,
    lng: 151.0040,
    phone: "0415 445 035",
    website: "https://hdta.org.au",
    bookingUrl: "https://play.tennis.com.au/hillsdistricttennisassociation",
    courtCount: 10,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: 25,
      offPeak: 20,
      peakLabel: "After 5pm",
      offPeakLabel: "8am-5pm",
      notes: "Fred Caterson Reserve. Entry from Gilbert Rd. Non-daylight savings hours."
    },
    cheapestHourly: 20,
    features: ["lighting", "coaching", "clubhouse", "parking"],
    lastVerified: "2026-03"
  },
  {
    id: "hdta-dural",
    name: "Hills District Tennis (Dural)",
    address: "44 Quarry Rd, Dural NSW 2158",
    suburb: "Dural",
    lat: -33.6830,
    lng: 151.0280,
    phone: "0419 279 039",
    website: "https://hdta.org.au",
    bookingUrl: "https://hdta.org.au/court-hire/",
    courtCount: 7,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: 25,
      offPeak: 20,
      peakLabel: "After 5pm",
      offPeakLabel: "8am-5pm",
      notes: "Social tennis Thursday 7pm-10pm."
    },
    cheapestHourly: 20,
    features: ["lighting", "coaching", "clubhouse", "parking"],
    lastVerified: "2026-03"
  },
  {
    id: "westleigh-tennis",
    name: "Westleigh Tennis Club",
    address: "Eucalyptus Dr, Westleigh NSW 2120",
    suburb: "Westleigh",
    lat: -33.7140,
    lng: 151.0690,
    phone: null,
    website: "http://www.westleightennis.com.au",
    bookingUrl: "http://www.westleightennis.com.au/WL-Courts.aspx",
    courtCount: 4,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: null,
      offPeak: null,
      peakLabel: "",
      offPeakLabel: "",
      notes: "Ruddock Park. Open 7am-10:30pm. Online booking with gate code access."
    },
    cheapestHourly: null,
    features: ["lighting"],
    lastVerified: "2026-03"
  },

  // === RYDE / LANE COVE ===
  {
    id: "tennis-world-north-ryde",
    name: "Tennis World North Ryde",
    address: "16-18 Epping Rd, North Ryde NSW 2113",
    suburb: "North Ryde",
    lat: -33.7960,
    lng: 151.1290,
    phone: "1300 836 647",
    website: "https://www.tennisworldonline.com.au",
    bookingUrl: "https://www.tennisworldonline.com.au/book/",
    courtCount: 8,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: 34,
      offPeak: 30,
      peakLabel: "Peak",
      offPeakLabel: "Off-peak",
      notes: "Also has padel + pickleball courts. Free parking. Pro shop."
    },
    cheapestHourly: 30,
    features: ["lighting", "cafe", "pro-shop", "coaching", "parking"],
    lastVerified: "2026-03"
  },
  {
    id: "meadowbank-park",
    name: "Meadowbank Park Tennis (Voyager Tennis)",
    address: "Constitution Rd West, Meadowbank NSW 2114",
    suburb: "Meadowbank",
    lat: -33.8170,
    lng: 151.0890,
    phone: "0418 168 868",
    website: "https://www.voyagertennis.com/locations/meadowbank/",
    bookingUrl: "https://www.tennisvenues.com.au/booking/meadowbank-park-tc",
    courtCount: 8,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: 24,
      offPeak: null,
      peakLabel: "Mon-Fri 3-10pm, Sat/Sun all day",
      offPeakLabel: "Mon-Fri 7am-3pm",
      notes: "Open 6am-10pm. Electronic gate for off-peak access."
    },
    cheapestHourly: 24,
    features: ["lighting", "coaching"],
    lastVerified: "2026-03"
  },
  {
    id: "ryde-tennis",
    name: "Ryde Tennis Centre",
    address: "Cnr Karen Moras Dr & Weaver St, Ryde NSW 2112",
    suburb: "Ryde",
    lat: -33.8150,
    lng: 151.1080,
    phone: null,
    website: "https://www.voyagertennis.com",
    bookingUrl: "https://www.tennisvenues.com.au/booking/ryde-tennis-centre",
    courtCount: 8,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: 35,
      offPeak: 29,
      peakLabel: "Mon-Fri 3pm-10pm, Sat/Sun all day",
      offPeakLabel: "Mon-Fri 6am-3pm",
      notes: "LED lights. Behind Ryde Aquatic Centre. Voyager Tennis coaching."
    },
    cheapestHourly: 29,
    features: ["lighting", "pro-shop", "coaching"],
    lastVerified: "2026-03"
  },
  {
    id: "lane-cove-tennis",
    name: "Lane Cove Tennis Club",
    address: "Central Park, Kenneth St, Longueville NSW 2066",
    suburb: "Longueville",
    lat: -33.8290,
    lng: 151.1650,
    phone: null,
    website: "https://lanecovetennis.com",
    bookingUrl: "https://lanecovetennis.com/book-a-court/",
    courtCount: 5,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: 20,
      offPeak: 20,
      peakLabel: "All hours",
      offPeakLabel: "All hours",
      notes: "Non-member rate $20/hr. Members play free. Community club, no pro shop."
    },
    cheapestHourly: 20,
    features: [],
    lastVerified: "2026-03"
  },
  {
    id: "lane-cove-west",
    name: "Lane Cove West Tennis Club",
    address: "Lloyd Rees Dr, Blackman Park, Lane Cove NSW 2066",
    suburb: "Lane Cove",
    lat: -33.8170,
    lng: 151.1530,
    phone: "0417 667 020",
    website: "https://lcwtennis.com.au",
    bookingUrl: "https://lcwtennis.com.au",
    courtCount: 3,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: 17,
      offPeak: 15,
      peakLabel: "After 5pm",
      offPeakLabel: "Before 5pm",
      notes: "Minimum 60 min booking. Blackman Park."
    },
    cheapestHourly: 15,
    features: ["lighting"],
    lastVerified: "2026-03"
  },

  // === INNER WEST ===
  {
    id: "birchgrove-tennis",
    name: "Birchgrove Tennis",
    address: "Rose St, Cnr Louisa Rd, Birchgrove NSW 2041",
    suburb: "Birchgrove",
    lat: -33.8520,
    lng: 151.1750,
    phone: null,
    website: "https://www.birchgrovetennis.com.au",
    bookingUrl: "https://www.birchgrovetennis.com.au",
    courtCount: 7,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: 28,
      offPeak: 24,
      peakLabel: "After 5pm Mon-Fri & weekends",
      offPeakLabel: "Before 5pm Mon-Fri",
      notes: "6 courts in main complex + 1 Parkview court. BBQ facilities, views over Snails Bay."
    },
    cheapestHourly: 24,
    features: ["lighting", "coaching", "clubhouse"],
    lastVerified: "2026-03"
  },

  {
    id: "newington-college",
    name: "Newington College Tennis (NewSPORT)",
    address: "200 Stanmore Rd, Stanmore NSW 2048",
    suburb: "Stanmore",
    lat: -33.8920,
    lng: 151.1577,
    phone: "(02) 9568 9548",
    website: "https://insites.newington.nsw.edu.au/newsport/tennis/",
    bookingUrl: "https://insites.newington.nsw.edu.au/newsport/booking-form/",
    courtCount: 9,
    courtTypes: ["plexicushion", "synthetic-grass"],
    pricing: {
      peak: null,
      offPeak: null,
      peakLabel: "",
      offPeakLabel: "",
      notes: "6 plexi pave + 3 synthetic grass courts. Shaded viewing deck. Coaching & holiday camps available."
    },
    cheapestHourly: null,
    features: ["coaching"],
    lastVerified: "2026-03"
  },

  // === WESTERN SYDNEY ===
  {
    id: "parramatta-city",
    name: "Parramatta City Tennis Centre",
    address: "North Parramatta NSW 2151",
    suburb: "North Parramatta",
    lat: -33.7940,
    lng: 151.0010,
    phone: "(02) 9683 1703",
    website: "https://parratennis.com.au",
    bookingUrl: "https://play.tennis.com.au/ParramattaCityTennis",
    courtCount: 17,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: 15,
      offPeak: 10,
      peakLabel: "Standard rate",
      offPeakLabel: "Sunday / member rate",
      notes: "Largest venue in Western Sydney. Online booking only. Max 3hr sessions."
    },
    cheapestHourly: 10,
    features: ["lighting", "coaching", "parking"],
    lastVerified: "2026-03"
  },
  {
    id: "blacktown-tennis",
    name: "Blacktown Tennis Centre",
    address: "Cnr Stanhope Pkwy & Sentry Dr, Stanhope Gardens NSW 2768",
    suburb: "Stanhope Gardens",
    lat: -33.7190,
    lng: 150.9250,
    phone: "(02) 9421 2600",
    website: "https://blacktownaquaticandsports.com.au",
    bookingUrl: "https://play.tennis.com.au/blacktowntenniscentrestanhope",
    courtCount: 16,
    courtTypes: ["plexicushion"],
    pricing: {
      peak: null,
      offPeak: null,
      peakLabel: "",
      offPeakLabel: "",
      notes: "Championship grade (Australian Open surface). Exhibition court seats 288. Largest in NSW."
    },
    cheapestHourly: null,
    features: ["lighting", "parking"],
    lastVerified: "2026-03"
  },
  {
    id: "sydney-olympic-park",
    name: "Tennis World Sydney Olympic Park",
    address: "Rod Laver Dr, Sydney Olympic Park NSW 2127",
    suburb: "Sydney Olympic Park",
    lat: -33.8470,
    lng: 151.0690,
    phone: "1300 836 647",
    website: "https://www.tennisworld.net.au/tennis-world-sydney/",
    bookingUrl: "https://play.tennis.com.au/tennisworldsydney",
    courtCount: 18,
    courtTypes: ["plexicushion", "clay"],
    pricing: {
      peak: 34,
      offPeak: 30,
      peakLabel: "Peak (weekday after 5pm, Sat before 1pm)",
      offPeakLabel: "Off-peak (weekday before 5pm, Sat after 1pm, Sun)",
      notes: "Indoor courts $52/hr. $99 joining fee for members. Show courts available."
    },
    cheapestHourly: 30,
    features: ["lighting", "pro-shop", "coaching", "parking"],
    lastVerified: "2026-03"
  },

  // === SOUTH / SUTHERLAND ===
  {
    id: "rockdale-tennis",
    name: "Rockdale Tennis Club",
    address: "71 Chapel St, Rockdale NSW 2216",
    suburb: "Rockdale",
    lat: -33.9530,
    lng: 151.1370,
    phone: "(02) 9597 4000",
    website: "https://rockdaletennisclub.com.au",
    bookingUrl: "https://rockdaletennisclub.com.au",
    courtCount: 18,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: 29,
      offPeak: 24,
      peakLabel: "Evening (with lights)",
      offPeakLabel: "Daytime",
      notes: "Licensed bistro. Venue hire available. Voyager Tennis coaching."
    },
    cheapestHourly: 24,
    features: ["lighting", "cafe", "coaching", "clubhouse", "parking"],
    lastVerified: "2026-03"
  },
  {
    id: "sylvania-waters",
    name: "Sylvania Waters Tennis Centre",
    address: "Sylvania Waters NSW 2224",
    suburb: "Sylvania Waters",
    lat: -34.0170,
    lng: 151.1100,
    phone: null,
    website: "https://www.swtctennis.com.au",
    bookingUrl: "https://www.swtctennis.com.au",
    courtCount: null,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: null,
      offPeak: null,
      peakLabel: "",
      offPeakLabel: "",
      notes: "Coaching, holiday camps, competitions, pro shop."
    },
    cheapestHourly: null,
    features: ["coaching", "pro-shop"],
    lastVerified: "2026-03"
  },
  {
    id: "port-hacking",
    name: "Port Hacking Tennis Centre",
    address: "184 Gannons Rd, Caringbah South NSW 2229",
    suburb: "Caringbah South",
    lat: -34.0530,
    lng: 151.1170,
    phone: null,
    website: null,
    bookingUrl: null,
    courtCount: 3,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: null,
      offPeak: null,
      peakLabel: "",
      offPeakLabel: "",
      notes: "All courts resurfaced 2023. Casual and permanent hire."
    },
    cheapestHourly: null,
    features: [],
    lastVerified: "2026-03"
  },

  // === NORTHERN BEACHES ===
  {
    id: "warringah-recreation",
    name: "Warringah Recreation Centre",
    address: "Cnr Pittwater & Kentwell Rds, North Manly NSW 2100",
    suburb: "North Manly",
    lat: -33.7780,
    lng: 151.2640,
    phone: null,
    website: "https://www.tennisnorthernbeaches.com.au",
    bookingUrl: "https://www.tennisnorthernbeaches.com.au",
    courtCount: 9,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: null,
      offPeak: null,
      peakLabel: "",
      offPeakLabel: "",
      notes: "6 adult courts + 3 HotShots courts. Voyager Tennis coaching."
    },
    cheapestHourly: null,
    features: ["lighting", "coaching"],
    lastVerified: "2026-03"
  },
  {
    id: "manly-tennis",
    name: "Manly Tennis Centre",
    address: "Cnr Raglan & Belgrave St, Manly NSW 2095",
    suburb: "Manly",
    lat: -33.7960,
    lng: 151.2820,
    phone: null,
    website: "https://manlytenniscentre.com.au",
    bookingUrl: "https://manlytenniscentre.com.au",
    courtCount: null,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: null,
      offPeak: null,
      peakLabel: "",
      offPeakLabel: "",
      notes: "Part of Manly Lawn Tennis Club, est. 1884."
    },
    cheapestHourly: null,
    features: ["coaching"],
    lastVerified: "2026-03"
  },
  {
    id: "keirle-park",
    name: "Keirle Park Tennis Centre",
    address: "Manly NSW 2095",
    suburb: "Manly",
    lat: -33.7890,
    lng: 151.2780,
    phone: null,
    website: "https://www.keirleparktenniscentre.com.au",
    bookingUrl: "https://www.keirleparktenniscentre.com.au",
    courtCount: 6,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: null,
      offPeak: null,
      peakLabel: "",
      offPeakLabel: "",
      notes: "Floodlit courts. All levels welcome."
    },
    cheapestHourly: null,
    features: ["lighting", "coaching"],
    lastVerified: "2026-03"
  },

  // === TENNIS WORLD NETWORK (additional locations) ===
  {
    id: "tennis-world-chatswood",
    name: "Tennis World Chatswood",
    address: "120A Fullers Rd, Chatswood NSW 2067",
    suburb: "Chatswood",
    lat: -33.7930,
    lng: 151.1720,
    phone: "1300 836 647",
    website: "https://www.chatswoodtennis.com.au",
    bookingUrl: "https://www.chatswoodtennis.com.au",
    courtCount: 12,
    courtTypes: ["synthetic-grass"],
    pricing: {
      peak: 34,
      offPeak: 30,
      peakLabel: "Peak",
      offPeakLabel: "Off-peak",
      notes: "Tournament-standard courts. Licensed bar, coffee shop, pro shop. 24hr restringing."
    },
    cheapestHourly: 30,
    features: ["lighting", "cafe", "pro-shop", "coaching", "parking"],
    lastVerified: "2026-03"
  },
  {
    id: "tennis-world-north-sydney",
    name: "Tennis World North Sydney",
    address: "1A Ridge St, North Sydney NSW 2060",
    suburb: "North Sydney",
    lat: -33.8380,
    lng: 151.2060,
    phone: "1300 836 647",
    website: "https://www.tennisworld.net.au",
    bookingUrl: "https://www.tennisworld.net.au",
    courtCount: 6,
    courtTypes: ["synthetic-grass", "hard"],
    pricing: {
      peak: 34,
      offPeak: 30,
      peakLabel: "Peak",
      offPeakLabel: "Off-peak",
      notes: "4 synthetic + 2 hard courts. Gym included with membership."
    },
    cheapestHourly: 30,
    features: ["lighting", "pro-shop", "coaching"],
    lastVerified: "2026-03"
  }
];

window.TENNIS_DATA.courtTypeLabels = {
  "hard": "Hard Court",
  "synthetic-grass": "Synthetic Grass",
  "clay": "Clay",
  "plexicushion": "Plexicushion",
  "grass": "Natural Grass"
};

window.TENNIS_DATA.featureLabels = {
  "lighting": "Lighting",
  "cafe": "Cafe",
  "pro-shop": "Pro Shop",
  "coaching": "Coaching",
  "parking": "Parking",
  "clubhouse": "Clubhouse",
  "equipment-hire": "Equipment Hire"
};
