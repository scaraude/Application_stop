//var destinationIcon = null;
//var startPoint = null;

class Map {
  constructor(mapId) {
    this.destinationIcon = null;
    this.startPoint = null;

    this.map = L.map(mapId).setView([45.756104, 4.841173], 12);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1Ijoic2NhcmF1ZGUiLCJhIjoiY2tnYXJpdDh1MDl2NTJ4cnR3c2c4NjVzcSJ9.UkZLikOnXgNA-j0Dmoub3w",
      }
    ).addTo(this.map);

    var sidebar = L.control.sidebar("sidebarpanel", {
      closeButton: true,
      position: "right",
    });
    this.map.addControl(sidebar);
    this.map.sidebar = sidebar;

    $("div").on("click", ".sidebar-open-button", function () {
      var ID = $("#popupcontent").attr("data");
      var content = ID + '<div id="formcremark" > </div>';

      sidebar.setContent("<p>" + content + "</p>");
      //On va chercher le formulaire
      $("#formcremark").load("/formside", function () {
        $("#lat").val($("#popuplat").attr("data"));
        $("#long").val($("#popuplong").attr("data"));
      });

      // Mettre le formulaire de la sidebar pour créer un point
      if (!sidebar.isVisible()) {
        sidebar.toggle();
      }

      var self = this;

      this.map.on("click", (e) => {
        sidebar.hide();
        var popLocation = e.latlng;
        var popup = L.popup();

        this.startPoint = e;
        console.log("Start Point :");
        console.log(this.startPoint.latlng);
        popup
          .setLatLng(popLocation)
          .setContent(
            `   <p>Ajouter un marker ?</p> <br/>
                            <button type="button" class="btn btn-primary sidebar-open-button">Saisir les informations</button>
                            <p>Utiliser ce lieu comme point de départ de l'itinéraire</p> <br/>
                            <button type="button" id="itiStart" class="btn btn-primary sidebar-open-button">Partir d'ici</button>
                        `
          )
          .openOn(self.map);
      });


      function getMarkers(curmap) {
        $.ajax({
          url: "/api/spots",
          type: "GET",
          success: function (markers_json) {
            // console.log(markers_json)
            markers_json.forEach(function (data) {
              // console.log(data);
              // console.log(typeof(data));
              var lat = data.gps.lat;
              var lng = data.gps.lon;
              L.marker([parseFloat(lat), parseFloat(lng)], {
                draggable: false, // Make the icon dragable
                title: data.title,
              })
                .addTo(curmap)
                .openPopup()
                .on("click", markerOnClick).myJsonData = data;
            });
          },
          error: function (response, error) {
            $("#coordonnees").html("Ca a pas marché Roger marker");
            console.log("ko");
          },
        });
      }
    });

    this.map.addEventListener("click", (e) => {
      sidebar.hide();
      var popLocation = e.latlng;
      var lat = e.latlng.lat;
      var long = e.latlng.lng;
      var popup = L.popup();
      var content =
        '<div id="popupcontent" data="' +
        popLocation +
        '"> </div><div id="popuplat" data="' +
        lat +
        '"> </div> <div id="popuplong" data="' +
        long +
        '"> </div>';
      console.log(content);
      popup.setLatLng(popLocation).setContent(content).openOn(this.map);

      $("#popupcontent").load("/popup");
    });

    sidebar.toggle();
    getMarkers(this.map);
  } // End constructor

  setView(lat, lon, zoom) {
    this.map.setView([lat, lon], zoom);
  }
  locate() {
    this.map.locate({ setView: true });
    this.map.on("locationfound", onLocationFound);
    this.map.on("locationerror", onLocationError);
  }

  addIcon(iconToAdd) {
    //addIcon(iconToAdd, iconPosition){
    //L.marker(iconToAdd.position, {icon: iconToAdd.getLeafIcon()}).addTo(this.map).bindPopup(iconToAdd.descritpion);
    /*var greenIcon = L.icon({
            iconUrl: 'leaf-green.png',
            shadowUrl: 'leaf-shadow.png',
        
            iconSize:     [38, 95], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });*/
    //L.marker(iconToAdd.position, {icon: iconToAdd.getLeafIcon()}).addTo(this.map);
    var marker = L.marker(iconToAdd.position, {
      icon: iconToAdd.getLeafIcon(),
    });
    marker.bindPopup(`
                            <p>Aller à ce point ?</p>
                            <button type="button" id="itiDest" class="btn btn-primary sidebar-open-button">Aller ici</button>
                            <p>Utiliser ce lieu comme point de départ de l'itinéraire</p>
                            <button type="button" id="itiStart" class="btn btn-primary sidebar-open-button">Partir d'ici</button>
                        `);
    marker.addTo(this.map);
    //marker.on('click', function(e) {
    marker.on("click", (e) => {
      this.destinationIcon = e.target;
      console.log("DestPoint :");
      console.log(this.destinationIcon.getLatLng());
    });
  }

  routing() {
    console.log("Route Start :");
    console.log(this.startPoint.latlng);
    console.log("Route Dest :");
    console.log(this.destinationIcon.getLatLng());
    if (this.routingControl != null) {
      this.map.removeControl(this.routingControl);
    }

    this.routingControl = L.Routing.control({
      waypoints: [this.startPoint.latlng, this.destinationIcon.getLatLng()],
      routeWhileDragging: true,
    }).addTo(this.map);
  }
  closePopUps() {
    this.map.closePopup();
  }

  getDestination() {
    return this.destinationIcon;
  }

  setDestination(icon) {
    this.destinationIcon = icon;
  }

  getStart() {
    return this.startPoint;
  }

  setStart(point) {
    this.startPoint = point;
  }
} //End of class

function onLocationFound(e) {
  var radius = e.accuracy;

  L.marker(e.latlng)
    .addTo(this.map)
    .bindPopup("You are within " + radius + " meters from this point")
    .openPopup();

  L.circle(e.latlng, radius).addTo(this.map);
}

function onLocationError(e) {
  alert(e.message);
}

//Fonction pour récupérer les spots dans la BDD
function getMarkers(curmap) {
  $.ajax({
    url: "/api/spots",
    type: "GET",
    success: function (markers_json) {
      markers_json.forEach(function (data) {
        var lat = data.gps.lat;
        var lng = data.gps.lon;
        L.marker([parseFloat(lat), parseFloat(lng)], {
          draggable: false,
          title: data.title,
        })
          .addTo(curmap)
          .openPopup()
          .addEventListener("click", (e) => {
            // console.log('plop'+evt.latlng);
            var content =
              "Informations du Spot :" + "<br> <br>" + e.latlng + "<br> <br>";
            //+JSON.stringify(evt.target.myJsonData)

            var obj = e.target.myJsonData;
            for (var key in obj) {
              if (obj.hasOwnProperty(key)) {
                var val = obj[key];
                // console.log(key+'-'+val);
                content +=
                  "<strong>" + key + ": </strong> " + val + "<br> <br>";
              }
            }

            curmap.sidebar.setContent(content);
            // Mettre le formulaire de la sidebar pour créer un point
            if (!curmap.sidebar.isVisible()) {
              curmap.sidebar.toggle();
            }
          }).myJsonData = data;
      });
    },
    error: function (response, error) {
      $("#coordonnees").html("Ca a pas marché Roger marker");
      console.log("ko");
    },
  });
}

function markerOnClick(evt, map) {
  // console.log('plop'+evt.latlng);
  var content =
    "Informations du Spot :" + "<br> <br>" + evt.latlng + "<br> <br>";
  //+JSON.stringify(evt.target.myJsonData)

  var obj = evt.target.myJsonData;
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var val = obj[key];
      // console.log(key+'-'+val);
      content += "<strong>" + key + ": </strong> " + val + "<br> <br>";
    }
  }

  map.sidebar.setContent(content);
  // Mettre le formulaire de la sidebar pour créer un point
  if (!map.sidebar.isVisible()) {
    map.sidebar.toggle();
  }
}
