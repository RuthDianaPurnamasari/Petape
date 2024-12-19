// Import OpenLayers modules
import Map from 'https://cdn.skypack.dev/ol/Map.js';
import View from 'https://cdn.skypack.dev/ol/View.js';
import TileLayer from 'https://cdn.skypack.dev/ol/layer/Tile.js';
import OSM from 'https://cdn.skypack.dev/ol/source/OSM.js';
import { fromLonLat } from 'https://cdn.skypack.dev/ol/proj.js';

// Attribution for the map source
const attributionHTML = '<a href="https://petapedia.github.io/" target="_blank">&copy; PetaPedia Indonesia</a>';

// Coordinates for the initial map center (longitude, latitude)
const initialCoordinates = [107.57634352477324, -6.87436891415509];

// Marker ID (placeholder for future usage)
export let idmarker = { id: 1 };

// Define the base map layer
const baseMapLayer = new TileLayer({
  source: new OSM({
    attributions: attributionHTML,
  }),
});

// Define the default map view
const mapView = new View({
  center: fromLonLat(initialCoordinates),
  zoom: 16,
});

// Create the map instance
export let map = new Map({
  target: 'map', // ID of the target HTML element
  layers: [baseMapLayer],
  view: mapView,
});
