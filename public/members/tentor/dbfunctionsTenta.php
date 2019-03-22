<?php

 function cleanString($dbCon,$inWord){
$inWord = strip_tags($inWord);
$inWord = stripslashes($inWord);
$inWord=mysqli_real_escape_string($dbCon,$inWord);
return $inWord;
	 
	 
 }
//LISTA MEDLEMMAR//
	function getTentor($dbConnection) {
		 $query = "SELECT * FROM tentor";
		 $recordSet = mysqli_query ($dbConnection ,$query);
        
		 while($record = mysqli_fetch_assoc($recordSet))
{

        $path=$record["fil"];
        $namn=$record["namn"];
        echo('<a href=download.php?path='.$path.'>'.$namn.'</a></br>');
}
		 mysqli_free_result($recordSet);
		}
		
//SLUT PÅ LISTA //


//INSERT TENTA//
    function insertTenta($dbConnection, $score, $id, $namn,$fil) {
		$query = "INSERT INTO tentor (score,id,namn,fil) VALUES ('".$score."','".$id."','".$namn."','".$fil."');";
        echo($query);
		mysqli_query ($dbConnection ,$query);
		}
function DownloadFile($file) { // $file = include path
    if(file_exists($file)) {
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename='.basename($file));
        header('Content-Transfer-Encoding: binary');
        header('Expires: 0');
        header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
        header('Pragma: public');
        header('Content-Length: ' . filesize($file));
        ob_clean();
        flush();
        readfile($file);
        exit;
    }
}



		
