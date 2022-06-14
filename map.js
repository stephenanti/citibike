mapboxgl.accessToken =
"pk.eyJ1Ijoic3RlcGhlbmFudGkiLCJhIjoiY2t4NDN5MDJ2MDJkcTJ2cGFjOGk3MW9jcyJ9.idvR4RaqkBIA5w32u482kw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/stephenanti/cl4c4x6se000b16my8a3ht9m3",
  zoom: 2,
  maxZoom: 15,
  minZoom: 10.2,
  center: [-73.90,40.763],
});


map.on("load", function () {
    map.addLayer(
        {
          id: "citibike-starts2020",
          type: "circle",
          source: {
            type: "geojson",
            data: "data/starts_2020.geojson",
          },
          'paint': {
            'circle-color': '#440381',
            'circle-stroke-color': '#4d4d4d',
            'circle-stroke-width': 0.5,
            'circle-opacity': 0.5,
            'circle-color': [
                'interpolate',
                ['linear'],
                ['get', 'tripCount'],
                0,
                '#D35400',
                3000,
                '#58D68D',
                7000,
                '#F8C471',
                11000,
                '#1EA0F3 ',
                14000,
                '#45B39D '
                ],
            },
            minzoom: 3,
          },
          "settlement-minor-label"
        );
        
        });




  mapboxgl.accessToken =
  "pk.eyJ1Ijoic3RlcGhlbmFudGkiLCJhIjoiY2t4NDN5MDJ2MDJkcTJ2cGFjOGk3MW9jcyJ9.idvR4RaqkBIA5w32u482kw";
var map2 = new mapboxgl.Map({
  container: "map2",
  style: "mapbox://styles/stephenanti/cl4c4x6se000b16my8a3ht9m3",
  zoom: 2,
  maxZoom: 15,
  minZoom: 10.2,
  center: [-73.90,40.763],
});

  map2.on("load", function () {
    map2.addLayer(
        {
          id: "citibike-stops2020",
          type: "circle",
          source: {
            type: "geojson",
            data: "data/stops_2020.geojson",
          },
          paint: {
              'circle-color': '#F3D01E',
              'circle-stroke-color': '#701EF3 ',
              'circle-stroke-width': 0.7,
              'circle-opacity': 0.7,
              'circle-color': [
                'interpolate',
                ['linear'],
                ['get', 'tripCount'],
                0,
                '#F3881E',
                3000,
                '#F3E61E ',
                7000,
                '#BEF31E ',
                11000,
                '#1E33F3 ',
                14000,
                '#4C2362 '
                ],
            },
            minzoom: 3,
          },
          "settlement-minor-label"
        );
        
        });


  mapboxgl.accessToken =
  "pk.eyJ1Ijoic3RlcGhlbmFudGkiLCJhIjoiY2t4NDN5MDJ2MDJkcTJ2cGFjOGk3MW9jcyJ9.idvR4RaqkBIA5w32u482kw";
var map3 = new mapboxgl.Map({
  container: "map3",
  style: "mapbox://styles/stephenanti/cl4c4x6se000b16my8a3ht9m3",
  zoom: 2,
  maxZoom: 15,
  minZoom: 10.2,
  center: [-73.90,40.763],
});

  map3.on("load", function () {
    map3.addLayer(
        {
          id: "citibike-starts2021",
          type: "circle",
          source: {
            type: "geojson",
            data: "data/starts_2021.geojson",
          },
          'paint': {
            'circle-color': '#C3750D',
            'circle-stroke-color': '#E7D0F9 ',
            'circle-stroke-width': 0.5,
            'circle-opacity': 0.5,
            'circle-color': [
                'interpolate',
                ['linear'],
                ['get', 'start_station_id'],
                0,
                '#4d4d00',
                3000,
                '#cc2900',
                7000,
                '#0033cc',
                11000,
                '#660029',
                14000,
                '#206040'
                ],
            },
            minzoom: 3,
          },
          "settlement-minor-label"
        );
        
        });


  mapboxgl.accessToken =
  "pk.eyJ1Ijoic3RlcGhlbmFudGkiLCJhIjoiY2t4NDN5MDJ2MDJkcTJ2cGFjOGk3MW9jcyJ9.idvR4RaqkBIA5w32u482kw";

var map4 = new mapboxgl.Map({
  container: "map4",
  style: "mapbox://styles/stephenanti/cl4c4x6se000b16my8a3ht9m3",
  zoom: 2,
  maxZoom: 15,
  minZoom: 10.2,
  center: [-73.90,40.763],
});

map4.on("load", function () {
    map4.addLayer(
        {
          id: "citibike-stops2021",
          type: "circle",
          source: {
            type: "geojson",
            data: "data/stops_2021.geojson",
          },
          paint: {
            'circle-color': '#cc6600',
            'circle-stroke-color': '#ff9900',
            'circle-stroke-width': 0.7,
            'circle-opacity': 0.7,
            'circle-color': [
              'interpolate',
              ['linear'],
              ['get', 'end_station_id'],
              0,
              '#4d2e00',
              3000,
              '#999900',
              7000,
              '#6E75A8',
              11000,
              '#ff0080',
              14000,
              '#b8b894'
              ],
          },
          minzoom: 3,
        },
        "settlement-minor-label"
      );
      
      });

// Pop up
            map.on("click", "citibike-starts2020", function (e) {
                var startStation = e.features[0].properties['start station name'];
                var totalTrips = e.features[0].properties.tripCount;
                console.log(startStation);
                new mapboxgl.Popup()
                  .setLngLat(e.lngLat)
                  .setHTML(
                    "<h4>" 
                    + "Station name:" 
                    + "</h4>" 
                    + "<hr>"
                    + "<h6>" 
                    + startStation
                    + "</h6>"
                    + "<h4>" 
                    + "No. of trips: " 
                    + totalTrips 
                    + "</h4>"
                  )
                  .addTo(map);
                });

map.on("mouseenter", "citibike-starts2020", function () {
    map.getCanvas().style.cursor = "pointer";});
map.on("mouseleave", "citibike-starts2020", function () {
    map.getCanvas().style.cursor = ""; });

    // Stops in 2020
    map2.on("click", "citibike-stops2020", function (e) {
        var startStation = e.features[0].properties['end station name'];
        var totalTrips = e.features[0].properties.tripCount;
        console.log(startStation);
        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(
              "<h4>" 
              + "Station name:" 
              + "</h4>" 
              + "<hr>"
              + "<h6>" 
              + startStation 
              + "</h6>"
              + "<h4>" 
              + "Number of trips: " 
              + totalTrips 
              + "</h4>"
          )
          .addTo(map2);
        });

map2.on("mouseenter", "citibike-stops2020", function () {
map2.getCanvas().style.cursor = "pointer";});
map2.on("mouseleave", "citibike-stops2020", function () {
map2.getCanvas().style.cursor = ""; });

// Starts in Geo 2021
map3.on("click", "citibike-starts2021", function (e) {
    var startStation = e.features[0].properties['start_station_name'];
    var totalTrips = e.features[0].properties.start_station_id;
    console.log(startStation);
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(
        "<h4>" 
        + "Station name:" 
        + "</h4>"
        + "<hr>" 
        + "<h6>" 
        +  startStation 
        + "</h6>"
        + "<h4>" 
        + "No. of trips: " 
        + totalTrips 
        + "</h4>"
      )
      .addTo(map3);
    });

map3.on("mouseenter", "citibike-starts2021", function () {
map3.getCanvas().style.cursor = "pointer";});
map3.on("mouseleave", "citibike-starts2021", function () {
map3.getCanvas().style.cursor = ""; });

// Stops in Geo 2021
map4.on("click", "citibike-stops2021", function (e) {
    var startStation = e.features[0].properties['end_station_name'];
    var totalTrips = e.features[0].properties.end_station_id;
    console.log(startStation);
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(
        "<h4>" 
        + "Station name:" 
        + "</h4>"
        + "<hr>"
        + "<h6>" 
        + startStation
        + "</h6>"
        + "<h4>" 
        + "No. of trips: " 
        + totalTrips 
        + "</h4>"
      )
      .addTo(map4);
    });

map4.on("mouseenter", "citibike-stops2021", function () {
map4.getCanvas().style.cursor = "pointer";});
map4.on("mouseleave", "citibike-starts2020", function () {
map4.getCanvas().style.cursor = ""; });




