<?php
try {
    $bdd = new PDO('mysql:host=localhost;dbname=application_stop;charset=utf8', 'root', 'root');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

$req = $bdd->prepare('SELECT * FROM spot_de_stop WHERE id = ?');
$req->execute([$_GET['id']]);

$donnee = $req->fetch();

$req->closeCursor();
if ($donnee) {
?>

    <div>
        <form action="UpdateMarker.php?id=<?php echo $_GET['id'] ?>" method="POST">
            <p>
                <label for="localisation">localisation : </label>
                <input type="text" name="localisation" id="localisation" value="<?php echo $donnee['localisation'] ?>" />
            </p>
            <p>
                <label for="avis">avis : </label>
                <select name="avis" id="avis">
                    <?php
                    for ($i = 1; $i <= 3; $i++) {
                        if ($i == $donnee['avis'])
                            echo '<option selected>' . $i . '</option>';
                        else
                            echo '<option>' . $i . '</option>';
                    }
                    ?>
                </select>
            </p>
            <p>
                <label for="destinations">destinations : </label>
                <textarea name="destinations" id="destinations" cols="30" rows="10"> <?php echo $donnee['destinations'] ?> </textarea>
            </p>
            <p>
                <label for="route">route : </label>
                <input type="text" name="route" id="route" value="<?php echo $donnee['route'] ?>" />
            </p>
            <p>
                <label for="direction">direction : </label>
                <select name="direction" id="direction">
                    <?php
                    $cardinaux = array('Nord', 'Nord-Est', 'Est', 'Sud-Est', 'Sud', 'Sud-Ouest', 'Ouest', 'Nord-Ouest');
                    foreach($cardinaux as $point)
                    {
                        if($point == $donnee['direction'])
                        echo '<option selected>' . $point . '</option>';
                        else
                        echo '<option>' . $point . '</option>';
                    }
                    ?>
                </select>
            </p>
            <p>
                <label for="acces">accès : </label>
                <textarea name="acces" id="acces" cols="30" rows="10"><?php echo $donnee['accès'] ?></textarea>
            </p>
            <p>
                <button type="submit">Modifier</button>
            </p>
        </form>
    </div>

    <div>
        <a href="InfoMarker.php?id=<?php echo $_GET['id'] ?>"><button>Revenir en arrière</button></a>
        <a href="index.html"><button>Accéder à la map</button></a>
    </div>

<?php
}
?>