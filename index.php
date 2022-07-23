<?php include 'connection.php';?>
<!DOCTYPE HTML>
<html>
<head>
    <title>Lab1</title>
    <script src="getText.js"></script>
    <script src="getXML.js"></script>
    <script src="getJSON.js"></script>
    <link href="style.css" rel="stylesheet" type="text/css">
</head>

<body>
<div class="wrapper">
<div>
        <label>Genre:</label><br>
        <select name="genre" id="genre">
            <?php
            
            $sql = "SELECT  title FROM storage_filmotek.genre";
            foreach ($dbh->query($sql) as $row) {
                echo "<option>$row[0]</option>";
            }
            ?>
        </select>
        <input  class="buttons " type="button" value="List films" onclick="getText()">
        </div>
        <div>
    <label>Actor:</label><br>
            <select name="actor" id="actor">
            <?php
            $sql = "SELECT `name` FROM storage_filmotek.actor";
            foreach ($dbh->query($sql) as $row) {
                echo "<option>$row[0]</option>";
            }
            ?>
        </select>
        <input class="buttons " type="button" value="List actors" onclick="getXML()">
        </div>
<div>
        <label>Year release:</label><br>
            <label> From:
                <input type="date" name= "date_from"  id="date_from">
            </label>
            <br>
            <label>  To:
                <input  class="end " type="date" name="date_to" id="date_to">
            </label>
            <input  class="buttons " type="button" value="List films" onclick="getJSON()">
            </div>
</div>
<div id="tbl">
</div>

</body>

</html>