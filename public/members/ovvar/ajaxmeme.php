<?php 
include("databaseFunctionsovve.php");
include("dbfunctionsovve.php");


if (!empty($_GET['namn'])) {
    $dbCon = myDBConnect();		
   // $SQL = "DELETE FROM `ovvar` WHERE namn='jennifer'";

    $SQL = "DELETE FROM `ovvar` WHERE namn='".$_GET['namn']."'";
    deleteOrder($dbCon,$SQL);
    myDBClose($dbCon);
    //echo 1;
} 

if (!empty($_GET['storlek'])) {
    $dbCon = myDBConnect();		
    $SQL = "UPDATE `storlek` SET `".$_GET['storlek']."`=".$_GET['nu']." WHERE 1";
    deleteOrder($dbCon,$SQL);
    myDBClose($dbCon);
} 
?>