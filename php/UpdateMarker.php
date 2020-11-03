<?php
try {
    $bdd = new PDO('mysql:host=localhost;dbname=application_stop;charset=utf8', 'root', 'root');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

$id = $_GET['id'];

$req = $bdd->prepare('UPDATE spot_de_stop 
                    SET avis = :avis, 
                        localisation = :localisation,
                        destinations = :destinations,
                        route = :route,
                        direction = :direction,
                        accès = :acces
                    WHERE id = :id');
                    
$req->execute(array(
    ':id' => $id,
    ':avis' => $_POST['avis'],
    ':localisation' => $_POST['localisation'],
    ':destinations' => $_POST['destinations'],
    ':route' => $_POST['route'],
    ':direction' => $_POST['direction'],
    ':acces' => $_POST['acces']
));

$req->closecursor();

$URLI = 'Location: InfoMarker.php?id=' . $id;

echo $URLI;

header($URLI);
?>