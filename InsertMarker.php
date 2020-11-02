<?php
try {
    $bdd = new PDO('mysql:host=localhost;dbname=application_stop;charset=utf8', 'root', 'root');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

$latitude = $_GET['lat'];
$longitude = $_GET['lng'];

$req = $bdd->prepare('INSERT INTO spot_de_stop (latitude, longitude, avis, localisation, destinations, route, direction, accès) 
                    VALUES (:latitude, :longitude, :avis, :localisation, :destinations, :route, :direction, :acces)');
                
$req->execute(array(
    ':latitude' => $latitude,
    ':longitude' => $longitude,
    ':avis' => $_POST['avis'],
    ':localisation' => $_POST['localisation'],
    ':destinations' => $_POST['destinations'],
    ':route' => $_POST['route'],
    ':direction' => $_POST['direction'],
    ':acces' => $_POST['acces']
));

$req->closecursor();

header('Location: index.html');
?>