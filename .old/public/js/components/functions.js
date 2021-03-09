//import MapHandler from './CMapHandler.js'

let mapHandler = '';

function initialize() {
    mapHandler = new MapHandler("map");   
}

function locate (){
    mapHandler.locate();
}


function addIcons()
{
    mapHandler.addIconToMap('car', [51.5, -0.09], 'Voiture', 'Paris');
    mapHandler.addIconToMap('boat', [51.495, -0.083], 'Bateau', 'Paris');
    mapHandler.addIconToMap('plane', [51.49, -0.1], 'Avion', 'Paris');
}