import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import Place from "./Place";
import PlaceDetails from "./PlaceDetails";

const List = ({ places1 }) => {
  const places = [
    {
      location_id: "1130726",
      name: "Alex's Pizza",
      latitude: "37.95008",
      longitude: "-91.77108",
      num_reviews: "317",
      timezone: "America/Chicago",
      location_string: "Rolla, Missouri",
      photo: {
        images: {
          small: {
            width: "250",
            url: "https://media-cdn.tripadvisor.com/media/photo-f/07/ed/ae/48/alex-s-pizza.jpg",
            height: "141",
          },
          thumbnail: {
            width: "50",
            url: "https://media-cdn.tripadvisor.com/media/photo-t/07/ed/ae/48/alex-s-pizza.jpg",
            height: "50",
          },
          original: {
            width: "5312",
            url: "https://media-cdn.tripadvisor.com/media/photo-o/07/ed/ae/48/alex-s-pizza.jpg",
            height: "2988",
          },
          large: {
            width: "1024",
            url: "https://media-cdn.tripadvisor.com/media/photo-w/07/ed/ae/48/alex-s-pizza.jpg",
            height: "576",
          },
          medium: {
            width: "550",
            url: "https://media-cdn.tripadvisor.com/media/photo-s/07/ed/ae/48/alex-s-pizza.jpg",
            height: "309",
          },
        },
        is_blessed: true,
        uploaded_date: "2015-05-20T21:29:07-0400",
        caption: "",
        id: "133017160",
        helpful_votes: "1",
        published_date: "2015-05-21T02:43:55-0400",
        user: {
          user_id: null,
          member_id: "0",
          type: "user",
        },
      },
      awards: [],
      doubleclick_zone: "na.us.missouri",
      preferred_map_engine: "default",
      raw_ranking: "3.9297749996185303",
      ranking_geo: "Rolla",
      ranking_geo_id: "44862",
      ranking_position: "2",
      ranking_denominator: "66",
      ranking_category: "restaurant",
      ranking: "#1 of 60 Restaurants in Rolla",
      distance: "0.8736572759604375",
      distance_string: "0.9 km",
      bearing: "southwest",
      rating: "4.0",
      is_closed: false,
      open_now_text: "Open Now",
      is_long_closed: false,
      price_level: "$$ - $$$",
      price: "$5 - $10",
      description: "",
      web_url:
        "https://www.tripadvisor.com/Restaurant_Review-g44862-d1130726-Reviews-Alex_s_Pizza-Rolla_Missouri.html",
      write_review:
        "https://www.tripadvisor.com/UserReview-g44862-d1130726-Alex_s_Pizza-Rolla_Missouri.html",
      ancestors: [
        {
          subcategory: [
            {
              key: "city",
              name: "City",
            },
          ],
          name: "Rolla",
          abbrv: null,
          location_id: "44862",
        },
        {
          subcategory: [
            {
              key: "state",
              name: "State",
            },
          ],
          name: "Missouri",
          abbrv: "MO",
          location_id: "28946",
        },
        {
          subcategory: [
            {
              key: "country",
              name: "Country",
            },
          ],
          name: "United States",
          abbrv: null,
          location_id: "191",
        },
      ],
      category: {
        key: "restaurant",
        name: "Restaurant",
      },
      subcategory: [
        {
          key: "sit_down",
          name: "Sit down",
        },
      ],
      parent_display_name: "Rolla",
      is_jfy_enabled: false,
      nearest_metro_station: [],
      phone: "+1 573-364-2669",
      website: "http://www.alexspizza.com/",
      address_obj: {
        street1: "122 W 8th St",
        street2: "",
        city: "Rolla",
        state: "MO",
        country: "United States",
        postalcode: "65401-3267",
      },
      address: "122 W 8th St, Rolla, MO 65401-3267",
      hours: {
        week_ranges: [
          [
            {
              open_time: 660,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 1320,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 1320,
            },
          ],
        ],
        timezone: "America/Chicago",
      },
      is_candidate_for_contact_info_suppression: false,
      cuisine: [
        {
          key: "10641",
          name: "Pizza",
        },
        {
          key: "10665",
          name: "Vegetarian Friendly",
        },
        {
          key: "10992",
          name: "Gluten Free Options",
        },
      ],
      dietary_restrictions: [
        {
          key: "10665",
          name: "Vegetarian Friendly",
        },
        {
          key: "10992",
          name: "Gluten Free Options",
        },
      ],
      booking: {
        provider: "ChowNow",
        url: "https://www.tripadvisor.com/Commerce?p=Delivery_ChowNow&src=183787581&geo=1130726&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=38060&bucket=934910&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=299168919&managed=false&capped=false&gosox=6E4khh0HtNXAL0epq-JuBJi9Hu4KwZkBcTYaPAKPcvyzRzJ-mgpAaP0IUqC44bubNGi9I6nuBPmXmunT2F7Y2VzwddrV9cdE5l-zq3ZQHvU&cs=14fe175636a056ea7e0b24d1523cff0d2",
      },
      reserve_info: {
        id: "1130726",
        provider: "ChowNow",
        provider_img:
          "https://static.tacdn.com/img2/branding/hotels/chownow_v2_05.11.2020.png",
        url: "https://www.tripadvisor.com/Commerce?p=Delivery_ChowNow&src=183787581&geo=1130726&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=38060&bucket=934910&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=299168919&managed=false&capped=false&gosox=6E4khh0HtNXAL0epq-JuBJi9Hu4KwZkBcTYaPAKPcvyzRzJ-mgpAaP0IUqC44bubNGi9I6nuBPmXmunT2F7Y2VzwddrV9cdE5l-zq3ZQHvU&cs=14fe175636a056ea7e0b24d1523cff0d2",
        booking_partner_id: null,
        racable: false,
        api_bookable: false,
        timeslots: null,
        bestoffer: null,
        timeslot_offers: null,
        button_text: "Order Online",
        disclaimer_text: null,
        banner_text: null,
      },
      establishment_types: [
        {
          key: "10591",
          name: "Restaurants",
        },
      ],
    },
    {
      location_id: "3875607",
      name: "The Public House Brewing Company",
      latitude: "37.94889",
      longitude: "-91.772224",
      num_reviews: "111",
      timezone: "America/Chicago",
      location_string: "Rolla, Missouri",
      photo: {
        images: {
          small: {
            width: "150",
            url: "https://media-cdn.tripadvisor.com/media/photo-l/05/15/de/d3/public-house-brewery.jpg",
            height: "150",
          },
          thumbnail: {
            width: "50",
            url: "https://media-cdn.tripadvisor.com/media/photo-t/05/15/de/d3/public-house-brewery.jpg",
            height: "50",
          },
          original: {
            width: "3264",
            url: "https://media-cdn.tripadvisor.com/media/photo-o/05/15/de/d3/public-house-brewery.jpg",
            height: "2448",
          },
          large: {
            width: "550",
            url: "https://media-cdn.tripadvisor.com/media/photo-s/05/15/de/d3/public-house-brewery.jpg",
            height: "412",
          },
          medium: {
            width: "250",
            url: "https://media-cdn.tripadvisor.com/media/photo-f/05/15/de/d3/public-house-brewery.jpg",
            height: "187",
          },
        },
        is_blessed: true,
        uploaded_date: "2013-11-30T23:42:56-0500",
        caption: "Public house brewery",
        id: "85319379",
        helpful_votes: "1",
        published_date: "2013-12-02T06:20:54-0500",
        user: {
          user_id: null,
          member_id: "0",
          type: "user",
        },
      },
      awards: [],
      doubleclick_zone: "na.us.missouri",
      preferred_map_engine: "default",
      raw_ranking: "3.6240899562835693",
      ranking_geo: "Rolla",
      ranking_geo_id: "44862",
      ranking_position: "6",
      ranking_denominator: "66",
      ranking_category: "restaurant",
      ranking: "#5 of 60 Restaurants in Rolla",
      distance: "1.036637957601271",
      distance_string: "1 km",
      bearing: "southwest",
      rating: "4.5",
      is_closed: false,
      open_now_text: "Closed Now",
      is_long_closed: false,
      price_level: "$$ - $$$",
      description: "",
      web_url:
        "https://www.tripadvisor.com/Restaurant_Review-g44862-d3875607-Reviews-The_Public_House_Brewing_Company-Rolla_Missouri.html",
      write_review:
        "https://www.tripadvisor.com/UserReview-g44862-d3875607-The_Public_House_Brewing_Company-Rolla_Missouri.html",
      ancestors: [
        {
          subcategory: [
            {
              key: "city",
              name: "City",
            },
          ],
          name: "Rolla",
          abbrv: null,
          location_id: "44862",
        },
        {
          subcategory: [
            {
              key: "state",
              name: "State",
            },
          ],
          name: "Missouri",
          abbrv: "MO",
          location_id: "28946",
        },
        {
          subcategory: [
            {
              key: "country",
              name: "Country",
            },
          ],
          name: "United States",
          abbrv: null,
          location_id: "191",
        },
      ],
      category: {
        key: "restaurant",
        name: "Restaurant",
      },
      subcategory: [
        {
          key: "sit_down",
          name: "Sit down",
        },
      ],
      parent_display_name: "Rolla",
      is_jfy_enabled: false,
      nearest_metro_station: [],
      phone: "+1 573-426-2337",
      website: "http://www.publichousebrewery.com/",
      email: "danyelle.harre@publichousebrewery.com",
      address_obj: {
        street1: "600 N Rolla St",
        street2: "Suite B",
        city: "Rolla",
        state: "MO",
        country: "United States",
        postalcode: "65401-3108",
      },
      address: "600 N Rolla St Suite B, Rolla, MO 65401-3108",
      hours: {
        week_ranges: [
          [],
          [
            {
              open_time: 900,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 900,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 900,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 900,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 900,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 1380,
            },
          ],
        ],
        timezone: "America/Chicago",
      },
      is_candidate_for_contact_info_suppression: false,
      cuisine: [
        {
          key: "9908",
          name: "American",
        },
        {
          key: "10640",
          name: "Bar",
        },
        {
          key: "10670",
          name: "Pub",
        },
        {
          key: "10665",
          name: "Vegetarian Friendly",
        },
      ],
      dietary_restrictions: [
        {
          key: "10665",
          name: "Vegetarian Friendly",
        },
      ],
      establishment_types: [
        {
          key: "10591",
          name: "Restaurants",
        },
      ],
    },
    {
      location_id: "3812298",
      name: "Colton's Steak House and Grill",
      latitude: "37.958454",
      longitude: "-91.77412",
      num_reviews: "214",
      timezone: "America/Chicago",
      location_string: "Rolla, Missouri",
      photo: {
        images: {
          small: {
            width: "150",
            url: "https://media-cdn.tripadvisor.com/media/photo-l/05/f8/3a/34/colton-s-steak-house.jpg",
            height: "150",
          },
          thumbnail: {
            width: "50",
            url: "https://media-cdn.tripadvisor.com/media/photo-t/05/f8/3a/34/colton-s-steak-house.jpg",
            height: "50",
          },
          original: {
            width: "2000",
            url: "https://media-cdn.tripadvisor.com/media/photo-o/05/f8/3a/34/colton-s-steak-house.jpg",
            height: "1333",
          },
          large: {
            width: "1024",
            url: "https://media-cdn.tripadvisor.com/media/photo-w/05/f8/3a/34/colton-s-steak-house.jpg",
            height: "682",
          },
          medium: {
            width: "550",
            url: "https://media-cdn.tripadvisor.com/media/photo-s/05/f8/3a/34/colton-s-steak-house.jpg",
            height: "366",
          },
        },
        is_blessed: true,
        uploaded_date: "2014-06-04T11:54:07-0400",
        caption: "et encore western",
        id: "100153908",
        helpful_votes: "2",
        published_date: "2014-06-10T09:59:52-0400",
        user: {
          user_id: null,
          member_id: "0",
          type: "user",
        },
      },
      awards: [],
      doubleclick_zone: "na.us.missouri",
      preferred_map_engine: "default",
      raw_ranking: "3.4880545139312744",
      ranking_geo: "Rolla",
      ranking_geo_id: "44862",
      ranking_position: "8",
      ranking_denominator: "66",
      ranking_category: "restaurant",
      ranking: "#7 of 60 Restaurants in Rolla",
      distance: "1.000298026709524",
      distance_string: "1 km",
      bearing: "west",
      rating: "4.0",
      is_closed: false,
      open_now_text: "Open Now",
      is_long_closed: false,
      price_level: "$$ - $$$",
      description: "",
      web_url:
        "https://www.tripadvisor.com/Restaurant_Review-g44862-d3812298-Reviews-Colton_s_Steak_House_and_Grill-Rolla_Missouri.html",
      write_review:
        "https://www.tripadvisor.com/UserReview-g44862-d3812298-Colton_s_Steak_House_and_Grill-Rolla_Missouri.html",
      ancestors: [
        {
          subcategory: [
            {
              key: "city",
              name: "City",
            },
          ],
          name: "Rolla",
          abbrv: null,
          location_id: "44862",
        },
        {
          subcategory: [
            {
              key: "state",
              name: "State",
            },
          ],
          name: "Missouri",
          abbrv: "MO",
          location_id: "28946",
        },
        {
          subcategory: [
            {
              key: "country",
              name: "Country",
            },
          ],
          name: "United States",
          abbrv: null,
          location_id: "191",
        },
      ],
      category: {
        key: "restaurant",
        name: "Restaurant",
      },
      subcategory: [
        {
          key: "sit_down",
          name: "Sit down",
        },
      ],
      parent_display_name: "Rolla",
      is_jfy_enabled: false,
      nearest_metro_station: [],
      phone: "+1 573-426-4240",
      website: "http://www.coltonssteakhouse.com/store_detail.php?id=21",
      address_obj: {
        street1: "1675 N Bishop Ave",
        street2: null,
        city: "Rolla",
        state: "MO",
        country: "United States",
        postalcode: "65401-2249",
      },
      address: "1675 N Bishop Ave, Rolla, MO 65401-2249",
      hours: {
        week_ranges: [
          [
            {
              open_time: 660,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 1320,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 1320,
            },
          ],
        ],
        timezone: "America/Chicago",
      },
      is_candidate_for_contact_info_suppression: false,
      cuisine: [
        {
          key: "10345",
          name: "Steakhouse",
        },
        {
          key: "10665",
          name: "Vegetarian Friendly",
        },
        {
          key: "10992",
          name: "Gluten Free Options",
        },
      ],
      dietary_restrictions: [
        {
          key: "10665",
          name: "Vegetarian Friendly",
        },
        {
          key: "10992",
          name: "Gluten Free Options",
        },
      ],
      establishment_types: [
        {
          key: "10591",
          name: "Restaurants",
        },
      ],
    },
    {
      location_id: "8046127",
      name: "Di Trapani's Italian Bistro on the Square",
      latitude: "37.948143",
      longitude: "-91.767075",
      num_reviews: "64",
      timezone: "America/Chicago",
      location_string: "Rolla, Missouri",
      photo: {
        images: {
          small: {
            width: "250",
            url: "https://media-cdn.tripadvisor.com/media/photo-f/08/4f/77/36/their-sign-over-the-archway.jpg",
            height: "141",
          },
          thumbnail: {
            width: "50",
            url: "https://media-cdn.tripadvisor.com/media/photo-t/08/4f/77/36/their-sign-over-the-archway.jpg",
            height: "50",
          },
          original: {
            width: "1600",
            url: "https://media-cdn.tripadvisor.com/media/photo-o/08/4f/77/36/their-sign-over-the-archway.jpg",
            height: "900",
          },
          large: {
            width: "1024",
            url: "https://media-cdn.tripadvisor.com/media/photo-w/08/4f/77/36/their-sign-over-the-archway.jpg",
            height: "576",
          },
          medium: {
            width: "550",
            url: "https://media-cdn.tripadvisor.com/media/photo-s/08/4f/77/36/their-sign-over-the-archway.jpg",
            height: "309",
          },
        },
        is_blessed: true,
        uploaded_date: "2015-07-08T15:42:55-0400",
        caption: "Their sign over the archway",
        id: "139425590",
        helpful_votes: "1",
        published_date: "2015-07-09T14:18:26-0400",
        user: {
          user_id: null,
          member_id: "0",
          type: "user",
        },
      },
      awards: [],
      doubleclick_zone: "na.us.missouri",
      preferred_map_engine: "default",
      raw_ranking: "3.466470718383789",
      ranking_geo: "Rolla",
      ranking_geo_id: "44862",
      ranking_position: "9",
      ranking_denominator: "66",
      ranking_category: "restaurant",
      ranking: "#8 of 60 Restaurants in Rolla",
      distance: "0.8428697825454505",
      distance_string: "0.8 km",
      bearing: "south",
      rating: "4.5",
      is_closed: false,
      open_now_text: "Closed today",
      is_long_closed: false,
      price_level: "$$ - $$$",
      description: "",
      web_url:
        "https://www.tripadvisor.com/Restaurant_Review-g44862-d8046127-Reviews-Di_Trapani_s_Italian_Bistro_on_the_Square-Rolla_Missouri.html",
      write_review:
        "https://www.tripadvisor.com/UserReview-g44862-d8046127-Di_Trapani_s_Italian_Bistro_on_the_Square-Rolla_Missouri.html",
      ancestors: [
        {
          subcategory: [
            {
              key: "city",
              name: "City",
            },
          ],
          name: "Rolla",
          abbrv: null,
          location_id: "44862",
        },
        {
          subcategory: [
            {
              key: "state",
              name: "State",
            },
          ],
          name: "Missouri",
          abbrv: "MO",
          location_id: "28946",
        },
        {
          subcategory: [
            {
              key: "country",
              name: "Country",
            },
          ],
          name: "United States",
          abbrv: null,
          location_id: "191",
        },
      ],
      category: {
        key: "restaurant",
        name: "Restaurant",
      },
      subcategory: [],
      parent_display_name: "Rolla",
      is_jfy_enabled: false,
      nearest_metro_station: [],
      phone: "+1 573-426-4800",
      website: "https://www.facebook.com/DiTrapanisItalianBistro/",
      address_obj: {
        street1: "400 East 6th Street",
        street2: null,
        city: "Rolla",
        state: "MO",
        country: "United States",
        postalcode: "65401",
      },
      address: "400 East 6th Street, Rolla, MO 65401",
      hours: {
        week_ranges: [
          [
            {
              open_time: 660,
              close_time: 840,
            },
          ],
          [],
          [],
          [
            {
              open_time: 660,
              close_time: 840,
            },
            {
              open_time: 960,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 840,
            },
            {
              open_time: 960,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 840,
            },
            {
              open_time: 960,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 960,
              close_time: 1260,
            },
          ],
        ],
        timezone: "America/Chicago",
      },
      is_candidate_for_contact_info_suppression: false,
      cuisine: [
        {
          key: "4617",
          name: "Italian",
        },
        {
          key: "10665",
          name: "Vegetarian Friendly",
        },
        {
          key: "10697",
          name: "Vegan Options",
        },
        {
          key: "10992",
          name: "Gluten Free Options",
        },
      ],
      dietary_restrictions: [
        {
          key: "10665",
          name: "Vegetarian Friendly",
        },
        {
          key: "10697",
          name: "Vegan Options",
        },
        {
          key: "10992",
          name: "Gluten Free Options",
        },
      ],
      establishment_types: [
        {
          key: "10591",
          name: "Restaurants",
        },
      ],
    },
    {
      location_id: "12282282",
      name: "NaCL + H2O",
      latitude: "37.950516",
      longitude: "-91.77182",
      num_reviews: "54",
      timezone: "America/Chicago",
      location_string: "Rolla, Missouri",
      photo: {
        images: {
          small: {
            width: "150",
            url: "https://media-cdn.tripadvisor.com/media/photo-l/0e/ed/0f/bd/front-door-from-pine.jpg",
            height: "150",
          },
          thumbnail: {
            width: "50",
            url: "https://media-cdn.tripadvisor.com/media/photo-t/0e/ed/0f/bd/front-door-from-pine.jpg",
            height: "50",
          },
          original: {
            width: "1125",
            url: "https://media-cdn.tripadvisor.com/media/photo-o/0e/ed/0f/bd/front-door-from-pine.jpg",
            height: "1500",
          },
          large: {
            width: "550",
            url: "https://media-cdn.tripadvisor.com/media/photo-p/0e/ed/0f/bd/front-door-from-pine.jpg",
            height: "733",
          },
          medium: {
            width: "338",
            url: "https://media-cdn.tripadvisor.com/media/photo-s/0e/ed/0f/bd/front-door-from-pine.jpg",
            height: "450",
          },
        },
        is_blessed: true,
        uploaded_date: "2017-04-10T14:49:47-0400",
        caption: "Front Door from Pine Street",
        id: "250417085",
        helpful_votes: "0",
        published_date: "2017-04-10T14:49:47-0400",
        user: {
          user_id: null,
          member_id: "0",
          type: "user",
        },
      },
      awards: [],
      doubleclick_zone: "na.us.missouri",
      preferred_map_engine: "default",
      raw_ranking: "3.447059154510498",
      ranking_geo: "Rolla",
      ranking_geo_id: "44862",
      ranking_position: "10",
      ranking_denominator: "66",
      ranking_category: "restaurant",
      ranking: "#9 of 60 Restaurants in Rolla",
      distance: "0.8951700068675089",
      distance_string: "0.9 km",
      bearing: "southwest",
      rating: "4.5",
      is_closed: false,
      open_now_text: "Closed Now",
      is_long_closed: false,
      price_level: "$$$$",
      price: "$7 - $30",
      description: "",
      web_url:
        "https://www.tripadvisor.com/Restaurant_Review-g44862-d12282282-Reviews-NaCL_H2O-Rolla_Missouri.html",
      write_review:
        "https://www.tripadvisor.com/UserReview-g44862-d12282282-NaCL_H2O-Rolla_Missouri.html",
      ancestors: [
        {
          subcategory: [
            {
              key: "city",
              name: "City",
            },
          ],
          name: "Rolla",
          abbrv: null,
          location_id: "44862",
        },
        {
          subcategory: [
            {
              key: "state",
              name: "State",
            },
          ],
          name: "Missouri",
          abbrv: "MO",
          location_id: "28946",
        },
        {
          subcategory: [
            {
              key: "country",
              name: "Country",
            },
          ],
          name: "United States",
          abbrv: null,
          location_id: "191",
        },
      ],
      category: {
        key: "restaurant",
        name: "Restaurant",
      },
      subcategory: [
        {
          key: "sit_down",
          name: "Sit down",
        },
      ],
      parent_display_name: "Rolla",
      is_jfy_enabled: false,
      nearest_metro_station: [],
      phone: "+1 573-426-6699",
      website: "http://naclh2orolla.com",
      address_obj: {
        street1: "817 N Pine St",
        street2: null,
        city: "Rolla",
        state: "MO",
        country: "United States",
        postalcode: "65401-3139",
      },
      address: "817 N Pine St, Rolla, MO 65401-3139",
      hours: {
        week_ranges: [
          [],
          [
            {
              open_time: 960,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 960,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 960,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 960,
              close_time: 1260,
            },
          ],
          [
            {
              open_time: 960,
              close_time: 1260,
            },
          ],
        ],
        timezone: "America/Chicago",
      },
      is_candidate_for_contact_info_suppression: false,
      cuisine: [
        {
          key: "10643",
          name: "Seafood",
        },
        {
          key: "10665",
          name: "Vegetarian Friendly",
        },
        {
          key: "10992",
          name: "Gluten Free Options",
        },
      ],
      dietary_restrictions: [
        {
          key: "10665",
          name: "Vegetarian Friendly",
        },
        {
          key: "10992",
          name: "Gluten Free Options",
        },
      ],
      establishment_types: [
        {
          key: "10591",
          name: "Restaurants",
        },
      ],
    },
    {
      location_id: "3513500",
      name: "Applebee's",
      latitude: "37.93948",
      longitude: "-91.77691",
      num_reviews: "68",
      timezone: "America/Chicago",
      location_string: "Rolla, Missouri",
      photo: {
        images: {
          small: {
            width: "150",
            url: "https://media-cdn.tripadvisor.com/media/photo-l/0b/5f/ce/b3/photo0jpg.jpg",
            height: "150",
          },
          thumbnail: {
            width: "50",
            url: "https://media-cdn.tripadvisor.com/media/photo-t/0b/5f/ce/b3/photo0jpg.jpg",
            height: "50",
          },
          original: {
            width: "2048",
            url: "https://media-cdn.tripadvisor.com/media/photo-o/0b/5f/ce/b3/photo0jpg.jpg",
            height: "1536",
          },
          large: {
            width: "550",
            url: "https://media-cdn.tripadvisor.com/media/photo-s/0b/5f/ce/b3/photo0jpg.jpg",
            height: "413",
          },
          medium: {
            width: "250",
            url: "https://media-cdn.tripadvisor.com/media/photo-f/0b/5f/ce/b3/photo0jpg.jpg",
            height: "188",
          },
        },
        is_blessed: true,
        uploaded_date: "2016-05-23T21:39:00-0400",
        caption: "",
        id: "190828211",
        helpful_votes: "0",
        published_date: "2016-05-23T21:39:00-0400",
        user: {
          user_id: null,
          member_id: "0",
          type: "user",
        },
      },
      awards: [],
      doubleclick_zone: "na.us.missouri",
      preferred_map_engine: "default",
      raw_ranking: "3.2277333736419678",
      ranking_geo: "Rolla",
      ranking_geo_id: "44862",
      ranking_position: "18",
      ranking_denominator: "66",
      ranking_category: "restaurant",
      ranking: "#12 of 60 Restaurants in Rolla",
      distance: "2.105894562278762",
      distance_string: "2.1 km",
      bearing: "southwest",
      rating: "4.0",
      is_closed: false,
      open_now_text: "Open Now",
      is_long_closed: false,
      price_level: "$$ - $$$",
      description: "",
      web_url:
        "https://www.tripadvisor.com/Restaurant_Review-g44862-d3513500-Reviews-Applebee_s-Rolla_Missouri.html",
      write_review:
        "https://www.tripadvisor.com/UserReview-g44862-d3513500-Applebee_s-Rolla_Missouri.html",
      ancestors: [
        {
          subcategory: [
            {
              key: "city",
              name: "City",
            },
          ],
          name: "Rolla",
          abbrv: null,
          location_id: "44862",
        },
        {
          subcategory: [
            {
              key: "state",
              name: "State",
            },
          ],
          name: "Missouri",
          abbrv: "MO",
          location_id: "28946",
        },
        {
          subcategory: [
            {
              key: "country",
              name: "Country",
            },
          ],
          name: "United States",
          abbrv: null,
          location_id: "191",
        },
      ],
      category: {
        key: "restaurant",
        name: "Restaurant",
      },
      subcategory: [
        {
          key: "sit_down",
          name: "Sit down",
        },
      ],
      parent_display_name: "Rolla",
      is_jfy_enabled: false,
      nearest_metro_station: [],
      phone: "+1 573-308-1600",
      website: "http://www.applebees.com",
      address_obj: {
        street1: "511 S Bishop Ave",
        street2: null,
        city: "Rolla",
        state: "MO",
        country: "United States",
        postalcode: "65401-4312",
      },
      address: "511 S Bishop Ave, Rolla, MO 65401-4312",
      hours: {
        week_ranges: [
          [
            {
              open_time: 660,
              close_time: 1440,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 1440,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 1440,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 1440,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 1440,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 1440,
            },
          ],
          [
            {
              open_time: 660,
              close_time: 1440,
            },
          ],
        ],
        timezone: "America/Chicago",
      },
      is_candidate_for_contact_info_suppression: false,
      cuisine: [
        {
          key: "9908",
          name: "American",
        },
        {
          key: "10640",
          name: "Bar",
        },
      ],
      dietary_restrictions: [],
      booking: {
        provider: "Grubhub",
        url: "https://www.tripadvisor.com/Commerce?p=Grubhub&src=209896730&geo=3513500&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=25768&bucket=852508&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=299168919&managed=false&capped=false&gosox=I-ADlg7wY8lqEq92hGOCPH9yxKao4fnJtoYdd5TLctoCVK2EaqcCi9rOMrUCyEbyW7jycv2xuyarYlfkigI5seuPQWrgQxTrXBZJXgBDq9E&cs=18e13c6177d3749500c4262930fa3fdf0",
      },
      reserve_info: {
        id: "3513500",
        provider: "Grubhub",
        provider_img:
          "https://static.tacdn.com/img2/branding/hotels/grubhub_05.11.2022.png",
        url: "https://www.tripadvisor.com/Commerce?p=Grubhub&src=209896730&geo=3513500&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=25768&bucket=852508&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=299168919&managed=false&capped=false&gosox=I-ADlg7wY8lqEq92hGOCPH9yxKao4fnJtoYdd5TLctoCVK2EaqcCi9rOMrUCyEbyW7jycv2xuyarYlfkigI5seuPQWrgQxTrXBZJXgBDq9E&cs=18e13c6177d3749500c4262930fa3fdf0",
        booking_partner_id: null,
        racable: false,
        api_bookable: false,
        timeslots: null,
        bestoffer: null,
        timeslot_offers: null,
        button_text: "Order Online",
        disclaimer_text: null,
        banner_text: null,
      },
      establishment_types: [
        {
          key: "10591",
          name: "Restaurants",
        },
      ],
    },
  ];
  return (
    <div className="p-[10px] h-[50vh] sm:h-full flex flex-col scroll-smooth ">
      <h2 className="text-xl mb-2 xs:text-2xl">
        Restaurants, Hotels & Attractions around you
      </h2>
      <form className="min-w-120 mb-6 flex flex-col xs:flex-row xs:items-center xs:gap-6 gap-2">
        <div>
          <label
            for="search_kind"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Type
          </label>
          <select
            id="options"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1  sm:p-2.5 "
          >
            <option selected value="default">
              Choose a type
            </option>
            <option value="rest">Resturants</option>
            <option value="hotels">Hotels</option>
            <option value="attr">Attractions</option>
          </select>
        </div>
        <div>
          <label
            for="search_kind"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Rating
          </label>
          <select
            id="options"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 sm:p-2.5"
          >
            <option selected value="default">
              Choose a rating
            </option>
            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>Above 4.5</option>
          </select>
        </div>
      </form>
      <div className="overflow-y-auto flex-grow p-2 ">
        {places.map((place, index) => (
          // <Place key={index}/>
          <div key={index}>
            <PlaceDetails place={place} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
