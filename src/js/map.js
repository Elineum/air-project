let map = L.map("map").setView([48, 32], 5);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiZWxpbmV1bSIsImEiOiJja3pveTJyZW0wbnkyMm9xczl3ZmIydjMxIn0.4DyF684i_DXbqkaq0zSmKg",
  }
).addTo(map);
let map2 = L.map("map2").setView([50.450001, 30.523333], 5);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiZWxpbmV1bSIsImEiOiJja3pveTJyZW0wbnkyMm9xczl3ZmIydjMxIn0.4DyF684i_DXbqkaq0zSmKg",
  }
).addTo(map2);

let icon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

let firstMarker1 = L.marker([48, 35], { icon }).addTo(map);
firstMarker1.bindPopup("<b>Какая-то ТЭС</b><br>Какой-то текст.");
let firstMarker2 = L.marker([48, 34], { icon }).addTo(map);
firstMarker2.bindPopup("<b>Какая-то ТЭС</b><br>Какой-то текст.");
let firstMarker3 = L.marker([48, 33], { icon }).addTo(map);
firstMarker3.bindPopup("<b>Какая-то ТЭС</b><br>Какой-то текст.");
let firstMarker4 = L.marker([48, 32], { icon }).addTo(map);
firstMarker4.bindPopup("<b>Какая-то ТЭС</b><br>Какой-то текст.");
let firstMarker5 = L.marker([48, 31], { icon }).addTo(map);
firstMarker5.bindPopup("<b>Какая-то ТЭС</b><br>Какой-то текст.");

let secondMarker1 = L.marker([48, 35], { icon }).addTo(map);
secondMarker1.bindPopup("<b>Какая-то ТЭС</b><br>Какой-то текст.");
let secondMarker2 = L.marker([48, 34], { icon }).addTo(map);
secondMarker2.bindPopup("<b>Какая-то ТЭС</b><br>Какой-то текст.");
let secondMarker3 = L.marker([48, 33], { icon }).addTo(map);
secondMarker3.bindPopup("<b>Какая-то ТЭС</b><br>Какой-то текст.");
let secondMarker4 = L.marker([48, 32], { icon }).addTo(map);
secondMarker4.bindPopup("<b>Какая-то ТЭС</b><br>Какой-то текст.");
let secondMarker5 = L.marker([48, 31], { icon }).addTo(map);
secondMarker5.bindPopup("<b>Какая-то ТЭС</b><br>Какой-то текст.");
