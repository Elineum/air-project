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

let marker1 = L.marker([48, 35], { icon }).addTo(map);
marker1.bindPopup("<b>Какая-то ТЭС</b><br>Какой-то текст.");
let marker2 = L.marker([48, 34], { icon }).addTo(map);
marker2.bindPopup("<b>Какая-то ТЭС</b><br>Какой-то текст.");
let marker3 = L.marker([48, 33], { icon }).addTo(map);
marker3.bindPopup("<b>Какая-то ТЭС</b><br>Какой-то текст.");
let marker4 = L.marker([48, 32], { icon }).addTo(map);
marker4.bindPopup("<b>Какая-то ТЭС</b><br>Какой-то текст.");
let marker5 = L.marker([48, 31], { icon }).addTo(map);
marker5.bindPopup("<b>Какая-то ТЭС</b><br>Какой-то текст.");
