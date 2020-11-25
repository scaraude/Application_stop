
// INITIALISE LA MAP
const mymap = L.map('mapid').setView([45.756104, 4.841173], 12);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2NhcmF1ZGUiLCJhIjoiY2tnYXJpdDh1MDl2NTJ4cnR3c2c4NjVzcSJ9.UkZLikOnXgNA-j0Dmoub3w'
}).addTo(mymap);

$(document).ready(function () {
    // CHOPPE LES MARKERS DANS LA BDD
    let markers = [];

    function getMarkers() {
        $.ajax({
            url: 'php/getMarkers.php',
            type: 'GET',
            success: function (markers_json) {
                $.each(markers_json, function (index, json) {
                    markers[json.id] = L.marker([json.latitude, json.longitude])
                        .addTo(mymap)
                        .on('click', function () {
                            window.location.assign("php/InfoMarker.php?id=" + json.id);
                        });
                });
            },
            error: function (response, error) {
                $("#coordonnees").html("Ca a pas marché Roger marker");
                console.log('ko');
            }
        });
    };

    getMarkers();

    //Fonction de mise en page des popups (A FAIRE)
    function PopupView(popup) {

    };

    // CREE UN POPUP AVEC LES COORDONNEES DU POINT QUAND ON CLIQUE
    //var popup = L.popup();

    function onMapClick(e) {

        window.location.assign('php/CreateMarker.php?lat=' + e.latlng.lat + "&lng=" + e.latlng.lng);
        // console.log('CreateMarker.php?lat=' + e.latlng.lat + "&lng=" + e.latlng.lng);
        // popup
        //     .setLatLng(e.latlng)
        //     .setContent("You clicked the map at " + e.latlng.toString())
        //     .openOn(mymap);
    }
    mymap.on('click', onMapClick);

    let autocomplete_items = [];
    let ville_hold;

    // EVENT BOUTON CLICK (pour lancer ajax)
    function changeMapView(){
        const result = autocomplete_items.find(item => item.nom === ville_hold);
        if (result)
            mymap.setView([result.centre.coordinates[1], result.centre.coordinates[0]], 13);
    }

    $("#search_ville").click(function () { changeMapView() });
    //$("#ville").keypress(function (event) { if (event.keyCode == 13) changeMapView(); });

    
    // FUNCTION AJAX
    $("#ville").on('input', function () {
        let val = this.value;
        if (val) {
            $.ajax({
                url: 'https://geo.api.gouv.fr/communes?nom=' + val + '&fields=nom,centre,departement&boost=population&limit=5',
                success: function (info_json) {
                    let autocomplete_list = [];
                    autocomplete_items = info_json;
                    $.each(autocomplete_items, function(index, json){
                        autocomplete_list[index] = json.nom;
                    });
                    autocomplete(document.getElementById('ville'), autocomplete_list);
                },
                error: function () {
                    $("#coordonnees").html("Ca a pas marché Roger ville");
                    console.log("ko");
                }
            });
        } else {
            autocomplete(document.getElementById('ville')); // appel de la fonction pour fermer la liste de suggestion 
        }
    });

    // function requestByAjax() {
    //     $.ajax({
    //         url: 'php/search.php',
    //         type: 'POST',
    //         data: { ville: $("#ville").val() },
    //         success: function (LatLon_json) {
    //             $("#coordonnees").html(LatLon_json.ville_nom);
    //             mymap.setView([LatLon_json.ville_latitude_deg, LatLon_json.ville_longitude_deg], 13);
    //         },
    //         error: function (response, error) {
    //             $("#coordonnees").html("Ca a pas marché Roger ville");
    //             console.log('ko');
    //         }
    //     });
    // };

    // EXEMPLE DE CALCUL DE DISTANCE
    /*let divResult = document.getElementById('result');
    let distance = getDistanceInKm(marker_mel.getLatLng(), marker_lafayette.getLatLng());
    divResult.innerHTML = distance;*/

    function getDistanceInKm(from, to) {
        return (from.distanceTo(to)).toFixed(0) / 1000;
    };

    function autocomplete(inp, arr) {
        /*the autocomplete function takes two arguments,
        the text field element and an array of possible autocompleted values:*/
        var currentFocus;
        /*execute a function when someone writes in the text field:*/
        //inp.addEventListener("input", function (e) { // VIRER CA
        var a, b, i;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!inp.value || !arr) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", inp.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        inp.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            //if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) { 
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            //b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML = arr[i];//.substr(val.length); 
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function (e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                ville_hold = inp.value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);

        }
        //});
        /*execute a function presses a key on the keyboard:*/
        inp.addEventListener("keydown", function (e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
                /*If the arrow DOWN key is pressed,
                increase the currentFocus variable:*/
                currentFocus++;
                /*and and make the current item more visible:*/
                addActive(x);
            } else if (e.keyCode == 38) { //up
                /*If the arrow UP key is pressed,
                decrease the currentFocus variable:*/
                currentFocus--;
                /*and and make the current item more visible:*/
                addActive(x);
            } else if (e.keyCode == 13) {
                /*If the ENTER key is pressed, prevent the form from being submitted,*/
                e.preventDefault();
                if (currentFocus > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (x) x[currentFocus].click();
                }
            }
        });
        function addActive(x) {
            /*a function to classify an item as "active":*/
            if (!x) return false;
            /*start by removing the "active" class on all items:*/
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            /*add class "autocomplete-active":*/
            x[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(x) {
            /*a function to remove the "active" class from all autocomplete items:*/
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
            }
        }
        function closeAllLists(elmnt) {
            currentFocus = -1;
            /*close all autocomplete lists in the document,
            except the one passed as an argument:*/
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }
        /*execute a function when someone clicks in the document:*/
        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });
    }
});