class Map 
{
    constructor(mapId){
        this.map = L.map(mapId).setView([45.756104, 4.841173], 12);
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


        function markerOnClick(evt)
        {
            // console.log('plop'+evt.latlng);
            var content ='Informations du Spot :'+'<br> <br>'+evt.latlng+'<br> <br>';
            //+JSON.stringify(evt.target.myJsonData)

            var obj = evt.target.myJsonData;
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    var val = obj[key];
                    // console.log(key+'-'+val);
                    content+='<strong>'+key+': </strong> '+val+'<br> <br>'
                }
            }

            sidebar.setContent(content);
            // Mettre le formulaire de la sidebar pour créer un point 
            if (!sidebar.isVisible()) {
                sidebar.toggle();
            }
        }
        
        this.map.on('click', function (e) {
            sidebar.hide();
            //Ajouter un marker à la BDD
            // var mp = new L.Marker([e.latlng.lat, e.latlng.lng]).addTo(map);
            // // defineYourWaypointOnClick(e,this.map);
            // var container = L.DomUtil.create('div');
            // //////////////////////////////////////////////////////////////////////////////////////////////
            // ///////////modified here
            // var startBtn = createButton('Start from this location', container);
            // var marker = new L.marker(e.latlng).bindPopup('You clicked the map at ' + e.latlng.toString() + '<br>' + startBtn).addTo(map);
        })

        sidebar.toggle();

        //Fonction pour récupérer les spots dans la BDD

        let markers = [];

        function getMarkers(curmap) {
            $.ajax({
                url: '/api/spots',
                type: 'GET',
                success: function (markers_json) {
                    // console.log(markers_json)
                    markers_json.forEach(function(data){
                        // console.log(data);
                        // console.log(typeof(data));
                        var lat = data.gps.lat;
                        var lng = data.gps.lon;
                        var markers = L.marker([parseFloat(lat), parseFloat(lng)],{draggable: false,        // Make the icon dragable
                            title: data.title} )
                        .addTo(curmap).openPopup().on('click',markerOnClick).myJsonData = data;
                    });
                },
                error: function (response, error) {
                    $("#coordonnees").html("Ca a pas marché Roger marker");
                    console.log('ko');
                }
            });
        };

        getMarkers(this.map);

        this.map.addLayer(osmLayer); // Le layer par défaut


    } // End constructor 

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




