<div>
    <form action="<?php echo "InsertMarker.php?lat=" . $_GET['lat'] . "&lng=" . $_GET['lng'] ?>"  method="POST">
        <p>
            <label for="localisation">localisation : </label>
            <input type="text" name="localisation" id="localisation" />
        </p>
        <p>
            <label for="avis">avis : </label>
            <select name="avis" id="avis">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </p>
        <p>
            <label for="destinations">destinations : </label>
            <textarea name="destinations" id="destinations" cols="30" rows="10"></textarea>
        </p>
        <p>
            <label for="route">route : </label>
            <input type="text" name="route" id="route" />
        </p>
        <p>
            <label for="direction">direction : </label>
            <select name="direction" id="direction">
                <option>Nord</option>
                <option>Nord-Est</option>
                <option>Est</option>
                <option>Sud-Est</option>
                <option>Sud</option>
                <option>Sud-Ouest</option>
                <option>Ouest</option>
                <option>Nord-Ouest</option>
            </select>
        </p>
        <p>
            <label for="acces">accès : </label>
            <textarea name="acces" id="acces" cols="30" rows="10"></textarea>
        </p>
        <p>
            <button type="submit">Créer !</button>
        </p>
    </form>
</div>

<div>
    <!-- <a href="InfoMarker"><button>Revenir en arrière</button></a> -->
    <a href="index.html"><button>Retour à la map</button></a>
</div>