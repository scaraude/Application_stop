<?php
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=application_stop;charset=utf8', 'root', 'root');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}

$req = $bdd->prepare('SELECT ville_nom, ville_latitude_deg, ville_longitude_deg FROM villes_france_free WHERE ville_nom_simple = ?');
$req->execute(array($_POST['ville']));

$donnee = $req->fetch();

$JSON = json_encode($donnee,true);

header("Content-type: application/json; charset=utf-8");

echo $JSON;
?>