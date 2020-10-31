
// INITIALISE LA MAP
var mymap = L.map('mapid').setView([45.756104, 4.841173], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2NhcmF1ZGUiLCJhIjoiY2tnYXJpdDh1MDl2NTJ4cnR3c2c4NjVzcSJ9.UkZLikOnXgNA-j0Dmoub3w'
}).addTo(mymap);

// CHOPPE LES MARKERS DANS LA BDD
let markers = [];

function getMarkers() {
    $.ajax({
        url: 'getMarkers.php',
        type: 'GET',
        success: function (markers_json) {
            $.each(markers_json, function (index, json) {
                markers[json.id] = L.marker([json.latitude, json.longitude]).addTo(mymap);
                if (markers[json.id])
                    markers[json.id].on('click', infoMarker(json.id));
            });
            /* ---DEBUG--- vérifie le tableau créé
            $.each(markers, function (index, element) {
                if (element) {
                    console.log(index);
                    console.log(element);
                }
            });*/
        },
        error: function (response, error) {
            $("#coordonnees").html("Ca a pas marché Roger");
            console.log('ko');
        }
    });
};

getMarkers();

function infoMarker(id){
    window.location.href = "InfoMarker.php?id=" + id;
}

//Fonction de mise en page des popups (A FAIRE)
function PopupView(popup) {

};

// CREE UN POPUP AVEC LES COORDONNEES DU POINT QUAND ON CLIQUE
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
mymap.on('click', onMapClick);

// EVENT BOUTON CLICK (pour lancer ajax)
$(document).ready(function () {
    $("#search_ville").click(function () { requestByAjax() });
    $("#ville").keypress(function(event) { if (event.keyCode == 13) requestByAjax() });
});

// FUNCTION AJAX
function requestByAjax() {
    console.log($("#ville").val());
    $.ajax({
        url: 'search.php',
        type: 'POST',
        data: { ville: $("#ville").val() },
        success: function (LatLon_json) {
            $("#coordonnees").html(LatLon_json.ville_nom);
            mymap.setView([LatLon_json.ville_latitude_deg, LatLon_json.ville_longitude_deg], 13);
        },
        error: function (response, error) {
            $("#coordonnees").html("Ca a pas marché Roger");
            console.log('ko');
        }
    });
};

// EXEMPLE DE CALCUL DE DISTANCE
/*let divResult = document.getElementById('result');
let distance = getDistanceInKm(marker_mel.getLatLng(), marker_lafayette.getLatLng());
divResult.innerHTML = distance;*/

function getDistanceInKm(from, to) {
    return (from.distanceTo(to)).toFixed(0) / 1000;
}