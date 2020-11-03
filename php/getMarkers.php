<?php
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=application_stop;charset=utf8', 'root', 'root');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}

$req = $bdd->query('SELECT * FROM spot_de_stop WHERE 1');

$points = array();

while ($donnee = $req->fetch()){
    array_push($points, $donnee);
}

$req->closeCursor();

$JSON = json_encode($points,true);

header("Content-type: application/json; charset=utf-8");

echo $JSON;
?>