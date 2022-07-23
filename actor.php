<?php
 header('Content-type: text/xml');
 header("Cache-Control: no-cache, must-revalidate");
include "connection.php";
 
    $actor  = $_REQUEST['actor']; 
    $table_xml = "";
    if($actor  != "")
    {
        $sqlSelect = "SELECT * FROM storage_filmotek.actor 
        inner join storage_filmotek.film_actor 
            on storage_filmotek.FILM_actor.FID_actor = storage_filmotek.actor.id_actor 
        inner join storage_filmotek.film 
            on storage_filmotek.film.id_film = storage_filmotek.film_actor.fid_film
                where storage_filmotek.actor.name = :actor";

        $sth =$dbh->prepare($sqlSelect);

        $sth->execute(array('actor' => $actor));
        $film = $sth->fetchAll();

        foreach($film as $row) {
            $table_xml .= "<tr><td>{$row['name']}</td><td>{$row['date']}</td><td>{$row['country']}</td><td>{$row['quality']}</td><td>{$row['resolution']}</td><td>{$row['codec']}</td><td>{$row['producer']}</td><td>{$row['director']}</td><td>{$row['carrier']}</td></tr>";
        }
    }
    print '<?xml version="1.0" encoding="UTF-8"?>';
    print "<root>";
    print $table_xml ;
    print "</root>";
?>
    