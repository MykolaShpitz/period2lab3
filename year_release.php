<?php
 header('Content-type: application/json');
 header("Cache-Control: no-cache, must-revalidate");
include "connection.php";
    
    $date_from = $_REQUEST['date_from']; 
    $date_to = $_REQUEST['date_to']; 

    if($date_from != "")
    {
        if($date_to != "")
        {
            $sqlSelect = "SELECT * FROM storage_filmotek.film
            where storage_filmotek.film.`date` between :date_from and :date_to";

            $sth =$dbh->prepare($sqlSelect);

            $sth->execute(array('date_from' => $date_from, 'date_to' => $date_to ));
            $film = $sth->fetchAll(PDO::FETCH_OBJ);

            echo json_encode($film);
        }
    }
    ?>
