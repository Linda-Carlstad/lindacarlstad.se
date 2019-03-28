<?php 
session_start();
if(!isset($_SESSION["dank"])){
		header("Location: login.php");
}

    include("databaseFunctions.php");
	include("dbfunctions.php");
?>
<!doctype html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<link rel="stylesheet" type="text/css" href="membStyle.css">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <meta charset="utf-8">
        <title>MEMBERADMIN</title>
    </head>
<body>


<div class="container">
  <h2>MEGAMEMBERS</h2>
  <p>DO DAT SHIII</p>

  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#home">Sök</a></li>
    <li><a data-toggle="tab" href="#menu1">Add</a></li>
    <li><a data-toggle="tab" href="#menu2">List</a></li>
    <li><a data-toggle="tab" href="#menu3" class="btn-danger">Logga ut</a></li>
  </ul>

  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
		<br>
    <form action="index.php" method="post" name="frmsearch" >
            <fieldset>
				<legend>SUPERSÖK</legend>
				<input type="text" id="txtsearch" name="txtSearch" title="Song and/or Artist!" required="required" placeholder="SÖK FÖRNAMN EFTERNAMN PNR" size="35" autofocus="autofocus"/><br />
				<input type="submit" id="btnsearch" name="btnSearch" value="Search" class="btn-success" />
				<input type="reset" id="btnreset" name="btnReset" value="Reset" class="btn-danger"/>
				</fieldset>
                     </form>
    </div>
    <div id="menu1" class="tab-pane fade">
                    <br>
                   <form action="index.php" method="post" name="frmsearch">
							<fieldset>
								<legend>
									LÄGG TILL LIVSTIDSMEDLEM
								</legend>
								<input type="text" id="fornamn" name="fornamn" title="Song and/or Artist!" required="required" placeholder="FÖRNAMN" size="35" autofocus="autofocus"/><br />
								<input type="text" id="efternamn" name="efternamn" title="Song and/or Artist!" required="required" placeholder="EFTERNAMN" size="35" autofocus="autofocus"/><br />
								<input type="text" id="pnr" name="pnr" title="Song and/or Artist!" required="required" placeholder="PERSONNUMMER" size="35" autofocus="autofocus"/><br />
								<input type="mail" id="mail" name="mail" title="Song and/or Artist!" required="required" placeholder="MAIL" size="35" autofocus="autofocus"/><br />
								<input type="submit" id="btnadd" name="btnadd" value="ADD" class="btn-success" />
								<input type="reset" id="btnreset" name="btnReset" value="Reset" class="btn-danger" />
							</fieldset></form>
        
    </div>
    <div id="menu2" class="tab-pane fade">
      			<legend>
									LISTA ALLA
								</legend>
<form action="index.php" method="post" name="frmcomment" data-id="23" class="col-lg-8">
            <fieldset>
                <input type="submit" name="visaMembers" value="Lista alla medlemmar" class="btn-primary" />
            </fieldset>
        </form>
    </div>
    <div id="menu3" class="tab-pane fade">
      <br>
	  <legend>Är du säker?</legend>
	  
           							<form action="logout.php" class="">
							<input type="submit" value="JA!" class="btn-danger" />
							</form>
							<br>
    </div>
  </div>
</div></div>


 <div class="container-fluid">
     <div class="row">

     </div>
    <div class="row">
        <div class="col-lg-4 bg-info">

      

      
        </div>
        <div class="col-lg-8">
        <?php
					try{
				if(isset($_POST["visaMembers"])){
				$dbCon = myDBConnect();
				listMembers($dbCon);
				myDBClose($dbCon);
				}
				if(isset($_POST["btnSearch"])){
				$dbCon = myDBConnect();
				sokmedlem($dbCon,cleanString($dbCon,$_POST["txtSearch"]));
				myDBClose($dbCon);
				}
				if(isset($_POST["btnadd"])){
				$dbCon = myDBConnect();
				insertMedlem($dbCon,cleanString($dbCon,$_POST["fornamn"]),cleanString($dbCon,$_POST["efternamn"]), cleanString($dbCon,$_POST["pnr"]), cleanString($dbCon,$_POST["mail"]),date("Y"));
				myDBClose($dbCon);
				}
					
					
					
					
	}
		catch(Exception $e){
		echo ('error: '.$e->getMessage());
	}
	
	?>
        </div>
    </div>
</div>

				
				<div id="main">
        </div>
   
    </body>
</html>