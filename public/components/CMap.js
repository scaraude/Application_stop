class Map 
{
    constructor(mapId){
        this.map = L.map(mapId).setView([45.756104, 4.841173], 12);

        // var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // });
        var osmLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1Ijoic2NhcmF1ZGUiLCJhIjoiY2tnYXJpdDh1MDl2NTJ4cnR3c2c4NjVzcSJ9.UkZLikOnXgNA-j0Dmoub3w'
        });

        var sidebar = L.control.sidebar('sidebarpanel', {
            closeButton: true,
            position: 'left'
        });
        this.map.addControl(sidebar);

        L.marker([45.75, 4.84],{draggable: false,        // Make the icon dragable
            title: 'Plop'} ).addTo(this.map)
        .openPopup().on('click',markerOnClick);

        function markerOnClick(evt)
        {
            console.log('plop'+evt.latlng);
            sidebar.setContent('test <b>test</b> test'+'<br> <br>'+evt.latlng);
            // Mettre le formulaire de la sidebar pour créer un point 
            sidebar.toggle();
        }

        // setTimeout(function () {
        //     sidebar.show();
        // }, 100);

        this.map.on('click', function () {
            sidebar.hide();
        })

        sidebar.on('show', function () {
            console.log('Sidebar will be visible.');
        });

        sidebar.on('shown', function () {
            console.log('Sidebar is visible.');
        });

        sidebar.on('hide', function () {
            console.log('Sidebar will be hidden.');
        });

        sidebar.on('hidden', function () {
            console.log('Sidebar is hidden.');
        });

        L.DomEvent.on(sidebar.getCloseButton(), 'click', function () {
            console.log('Close button clicked.');
        });
        sidebar.toggle();

        // //For test
        // var ggRoadmap = new L.Google('ROADMAP');
        // var ggSatellite = new L.Google('');
        // var ggTerrain = new L.Google('TERRAIN');
        // var ggHybrid = new L.Google('HYBRID');

        this.map.addLayer(osmLayer); // Le layer par défaut

        // this.map.addControl(new L.Control.Layers( {
        //     'OpenStreetMap': osmLayer, 
        //     'Google Roadmap' : ggRoadmap, 
        //     'Google Satellite': ggSatellite, 
        //     'Google Terrain': ggTerrain, 
        //     'Google Hybrid' : ggHybrid
        //     }, {})
        // );
        // //End of test
        // this.map = L.map(mapId).setView([45.756104, 4.841173], 12);
        // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        //     maxZoom: 18,
        //     id: 'mapbox/streets-v11',
        //     tileSize: 512,
        //     zoomOffset: -1,
        //     accessToken: 'pk.eyJ1Ijoic2NhcmF1ZGUiLCJhIjoiY2tnYXJpdDh1MDl2NTJ4cnR3c2c4NjVzcSJ9.UkZLikOnXgNA-j0Dmoub3w'
        // }).addTo(this.map);

        // this.map.addLayer(new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'));	//base layer
        function searchByAjax(val, callResponse)//callback for 3rd party ajax requests
        {
            return $.ajax({
                url: 'https://geo.api.gouv.fr/communes?nom=' + val + '&fields=nom,centre,departement&boost=population&limit=5',
                type: 'GET',
                success: function(json) {
                    callResponse(json);
                }
            });
        }

        this.map.addControl( new L.Control.Search({sourceData: searchByAjax, text:'Rechercher...', markerLocation: true,zoom: 12, marker: false}) );

        // // CHOPPE LES MARKERS DANS LA BDD
        // let markers = [];

        // function getMarkers() {
            // $.ajax({
            //     url: '/api/spots',
            //     type: 'GET',
            //     success: function (markers_json) {
            //         console.log(markers_json);
            //         $.each(markers_json, function (index, json) {
            //             // console.log(index);
            //             // console.log(json.gps.lat);
            //             markers[index] = L.marker([json.gps.lat,json.gps.lon])
            //                 .addTo(this.map);
            //         });
            //     },
            //     error: function (response, error) {
            //         $("#coordonnees").html("Ca a pas marché Roger marker");
            //         console.log('ko');
            //     }
            // });
        // };
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