class Map 
{
    constructor(mapId){
        this.map = L.map(mapId).setView([51.505, -0.09], 13);

        var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });

        L.marker([51.5, -0.09]).addTo(this.map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();


        //For test
        var ggRoadmap = new L.Google('ROADMAP');
        var ggSatellite = new L.Google('');
        var ggTerrain = new L.Google('TERRAIN');
        var ggHybrid = new L.Google('HYBRID');

        this.map.addLayer(osmLayer); // Le layer par défaut

        this.map.addControl(new L.Control.Layers( {
            'OpenStreetMap': osmLayer, 
            'Google Roadmap' : ggRoadmap, 
            'Google Satellite': ggSatellite, 
            'Google Terrain': ggTerrain, 
            'Google Hybrid' : ggHybrid
            }, {})
        );
        //End of test
    }

    locate(){
        this.map.locate({setView : true});
        this.map.on('locationfound', onLocationFound);
        this.map.on('locationerror', onLocationError);
    }

    addIcon(iconToAdd){
        //L.marker(iconToAdd.position, {icon: iconToAdd.getLeafIcon()}).addTo(this.map).bindPopup(iconToAdd.descritpion);
        var greenIcon = L.icon({
            iconUrl: 'leaf-green.png',
            shadowUrl: 'leaf-shadow.png',
        
            iconSize:     [38, 95], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        L.marker(iconToAdd.position, {icon: iconToAdd.getLeafIcon()}).addTo(this.map);
    }
    

}

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(this.map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(this.map);
}

function onLocationError(e) {
    alert(e.message);
}