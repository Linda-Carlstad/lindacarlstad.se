<?php

 function cleanString($dbCon,$inWord){
$inWord = strip_tags($inWord);
$inWord = stripslashes($inWord);
$inWord=mysqli_real_escape_string($dbCon,$inWord);
return $inWord;
	 
	 
 }
//LISTA MEDLEMMAR//
	function listMembers($dbConnection) {
		 $query = "SELECT * FROM medlemmar ORDER BY joined DESC";
		 $recordSet = mysqli_query ($dbConnection ,$query);
		echo("<table>");
		echo("<tr><td>Förnamn</td><td>efterNamn</td><td>pnr</td><td>mail</td><td>typ</td><td>år</td></tr>");
		 while($record = mysqli_fetch_assoc($recordSet))
{
		echo("<tr><td>".$record['firstname']."</td><td>".$record['lastname']."</td><td>".$record['pnr']."</td><td>".$record['mail']."</td><td>".$record['typ']."</td><td>".$record['joined']."</td></tr>");
}
		 mysqli_free_result($recordSet);
		 		echo("</table>");
		}
		
//SLUT PÅ LISTA //


//INSERT MEDLEMMAR//
    function insertMedlem($dbConnection, $fnamn, $enamn, $pnr , $mail,$ar) {
		$query = "INSERT INTO medlemmar (firstname,lastname,pnr,mail,joined,typ) 
		VALUES('".$fnamn."','".$enamn."','".$pnr."','".$mail."','".$ar."','Livstid')";
		mysqli_query ($dbConnection ,$query);
		echo("KLART!");
		}
//SLUT PÅ INSERT //

//SÖK MEMBER//
	function sokmedlem($inDBConnection, $inSearchString) {
		$query = "SELECT * FROM medlemmar WHERE lastname='".$inSearchString."'" ;
		 $recordSet = mysqli_query ($inDBConnection ,$query);
		echo("<table>");
		echo("<tr><td>Förnamn</td><td>efterNamn</td><td>pnr</td><td>mail</td><td>typ</td><td>år</td></tr>");
		 while($record = mysqli_fetch_assoc($recordSet))
{
	echo("<tr><td>".$record['firstname']."</td><td>".$record['lastname']."</td><td>".$record['pnr']."</td><td>".$record['mail']."</td><td>".$record['typ']."</td><td>".$record['joined']."</td></tr>");
}
  if(mysqli_num_rows($recordSet) <= 0){
		$query = "SELECT * FROM medlemmar WHERE firstname='".$inSearchString."'" ;
		 $recordSet = mysqli_query ($inDBConnection ,$query);
		 while($record = mysqli_fetch_assoc($recordSet))
{
	echo("<tr><td>".$record['firstname']."</td><td>".$record['lastname']."</td><td>".$record['pnr']."</td><td>".$record['mail']."</td><td>".$record['typ']."</td><td>".$record['joined']."</td></tr>");
}
	 if(mysqli_num_rows($recordSet) <= 0){
		 	//	echo("SELECT * FROM medlemmar WHERE pnr LIKE '%".$inSearchString."%'" );

		 $query = "SELECT * FROM medlemmar WHERE pnr LIKE '%".$inSearchString."%'" ;
		 $recordSet = mysqli_query ($inDBConnection ,$query);

		 while($record = mysqli_fetch_assoc($recordSet))
{
	echo("<tr><td>".$record['firstname']."</td><td>".$record['lastname']."</td><td>".$record['pnr']."</td><td>".$record['mail']."</td><td>".$record['typ']."</td><td>".$record['joined']."</td></tr>");
}
		 
	 }
     }
	 		 mysqli_free_result($recordSet);
		 		echo("</table>");
		}
		
//SLUT PÅ SÖK MEDLEMMAR//
		
