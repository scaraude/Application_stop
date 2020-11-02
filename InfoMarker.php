<?php
try {
    $bdd = new PDO('mysql:host=localhost;dbname=application_stop;charset=utf8', 'root', 'root');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

$req = $bdd->prepare('SELECT * FROM spot_de_stop WHERE id = ?');
$req->execute(array($_GET['id']));

$donnee = $req->fetch();

$req->closeCursor();
if ($donnee) {
?>

    <div>
        <h1> <?php echo $donnee['localisation'] ?> </h1>
        <br />
        <h4>note : <?php echo $donnee['avis'] ?></h4>
        <br/>
    </div>
    <div>
        <p>
            <strong>destinations : </strong> <?php echo $donnee['destinations'] ?>
        </p>
        <p>
            <strong>route : </strong> <?php echo $donnee['route'] ?>
        </p>
        <p>
            <strong>direction : </strong> <?php echo $donnee['direction'] ?>
        </p>
        <p>
            <strong>accès : </strong> <?php echo $donnee['accès'] ?>
        </p>
    </div>

    <div>
        <a href="ModifMarker.php?id=<?php echo $_GET['id']?>"><button>Modifier</button></a>
        <a href="index.html"><button>Retour à la map</button></a>
    </div>

<?php
}
?>