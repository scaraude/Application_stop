<?php
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=geodata_france;charset=utf8', 'root', 'root');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}

//$req = $bdd->prepare('SELECT ville_nom, ville_latitude_deg, ville_longitude_deg FROM villes_france_free WHERE ville_nom_simple = ?');
$req = $bdd->prepare('SELECT ville_latitude_deg, ville_longitude_deg FROM villes_france_free WHERE ville_nom_simple = ?');
$req->execute(array($_POST['ville']));

$donnee = $req->fetch();
// echo '<ul>';
// echo '<li>' . $donnee['ville_nom'] . '</li>';
// echo '<li> Lat = ' . $donnee['ville_latitude_deg'] . '</li>';
// echo '<li> Lon = ' . $donnee['ville_longitude_deg'] . '</li>';
// echo '</ul>';

// $URLI = "Location: index.html?lat=". $donnee['ville_latitude_deg']. "&lon=" . $donnee['ville_longitude_deg'];
// header($URLI);

$JSON = json_encode($donnee,true);

header("Content-type: application/json; charset=utf-8");

echo $JSON;
?>