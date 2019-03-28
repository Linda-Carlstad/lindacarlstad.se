<?php

 function cleanString($dbCon,$inWord){
$inWord = strip_tags($inWord);
$inWord = stripslashes($inWord);
$inWord=mysqli_real_escape_string($dbCon,$inWord);
return $inWord;
	 
	 
 }
//LISTA MEDLEMMAR//
	function getOrders($dbConnection) {
		 $query = "SELECT * FROM ovvar";
		 $recordSet = mysqli_query ($dbConnection ,$query);
        
		 while($record = mysqli_fetch_assoc($recordSet))
{
		echo("<div class='row'>");
        echo('<p class="col-lg-5 bg-warning" class="namnet">'.$record['namn'].'</p>');
        echo('<p class="col-lg-2 bg-info">'.$record['betalat'].'</p>');
        echo('<p class="col-lg-3 bg-success">'.$record['storlek'].'</p>');
        echo('<button class="btn-danger col-lg-2 tabortKnapp">TA BORT</button>');
        echo('</div>');
        
}
		 mysqli_free_result($recordSet);
		}
		
//SLUT PÅ LISTA //


//INSERT MEDLEMMAR//
    function insertOrder($dbConnection, $namn, $betalat, $storlek) {
		$query = "INSERT INTO ovvar (namn,betalat,storlek) VALUES ('".$namn."','".$betalat."','".$storlek."');";
		mysqli_query ($dbConnection ,$query);
		}
//SLUT PÅ INSERT //
        function deleteOrder($dbConnection, $sql) {
		mysqli_query ($dbConnection ,$sql);
		}

//Hämta saldo

	function getSaldo($dbConnection) {
		 $query = "SELECT * FROM storlek";
		 $recordSet = mysqli_query ($dbConnection ,$query);
        
		 while($record = mysqli_fetch_assoc($recordSet))
{
    echo('<div class="col-lg-2 col-sm-5  col-xs-12  bg-primary">
      <h3>SMALL</h3>
      <h1 class="text-center">'.$record['small'].'</h1>
      <button class="col-lg-6 btn-success oka">+</button>
      <button class="col-lg-6 btn-danger minska">-</button>
    </div> 
    <div class="col-lg-2 col-sm-5  col-xs-12  bg-info">
      <h3>MEDIUM</h3>
      <h1 class="text-center">'.$record['medium'].'</h1>
      <button class="col-lg-6 btn-success oka">+</button>
      <button class="col-lg-6 btn-danger minska">-</button>
    </div> 
       <div class="col-lg-2 col-sm-5  col-xs-12  bg-success">
      <h3>LARGE</h3>
      <h1 class="text-center">'.$record['large'].'</h1>
      <button class="col-lg-6 btn-success oka">+</button>
      <button class="col-lg-6 btn-danger" minska>-</button>
    </div> 
        <div class="col-lg-2 col-sm-5  col-xs-12  bg-warning">
      <h3>X-LARGE</h3>
      <h1 class="text-center">'.$record['x-large'].'</h1>
      <button class="col-lg-6 btn-success oka">+</button>
      <button class="col-lg-6 btn-danger" minska>-</button>
    </div> 
           <div class="col-lg-2 col-sm-5  col-xs-12  bg-danger">
      <h3>XX-LARGE</h3>
      <h1 class="text-center">'.$record['xx-large'].'</h1>
      <button class="col-lg-6 btn-success oka">+</button>
      <button class="col-lg-6 btn-danger" minska>-</button>
    </div>
            <div class="col-lg-2 col-sm-5  col-xs-12 btn-danger text-center vertical refr">
            <i class="fa fa-refresh fa-5x " aria-hidden="true"></i>
                </div>');
        
}
		 mysqli_free_result($recordSet);
		}