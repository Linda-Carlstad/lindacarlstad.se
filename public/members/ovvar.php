<?php 
session_start();
if(!isset($_SESSION["dank"])){
		header("Location: login.php");
}
//    error_reporting(E_ALL);
   // ini_set("display_errors", 1);
    include("databaseFunctionsovve.php");
	include("dbfunctionsovve.php");
?>

<!doctype html>

<html lang="sv">

<head>
  <meta charset="utf-8">
  <title>Meny</title>
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
   <link rel="stylesheet" type="text/css" href="ovvar.css">

</head>

<body>
    <div class="container">
        <div class="row ">
        <div class="col-lg-12 ">
<img src="logo.png" class="img-responsive center-block">
    </div> 
        </div>
        <div class="row top10 equal">

                <?php
                    try{
                $dbCon = myDBConnect();
				getSaldo($dbCon);
				myDBClose($dbCon);
                        }
                 		catch(Exception $e){
		echo ('error: '.$e->getMessage());
	}
                    ?> 
            
            
            <br>
            <div class="container col-lg-12">
            <div class="row">
            <button type="button" class="btn btn-warning col-lg-12" data-toggle="collapse" data-target="#demo">Ny beställning</button>
              <div id="demo" class="collapse">


            <div class="form-group">
            <form action="ovvar.php" method="post" >
                <label for="usr" class="col-lg-5">Namn:</label>
            <input type="text" class="form-control col-lg-5" id="usr" name="usr">
              <select class="form-control" id="sel1" name="storlek">
    <option>Small</option>
    <option>Medium</option>
    <option>Large</option>
    <option>X-Large</option>
    <option>XX-Large</option>
  </select>
            <label class="col-lg-5 form-control"><input type="checkbox" value="" name="harBetalat"> Betalat</label>
            <input type="submit" class=" form-control btn-success" name="skickaOrder">
          
            </form>    
            </div>
            </div>
                 <button type="button" class="btn btn-info col-lg-12" data-toggle="collapse" data-target="#order">Beställningar</button>
             
                <div id="order" class="collapse">

                       <?php
    if(isset ($_POST["skickaOrder"])){
                if (isset($_POST['harBetalat'])) {
                $betalat="Betalat";
                }
                else{
                $betalat="Inte betalat";
                }
                $selectOption = $_POST['storlek'];
                $dbCon = myDBConnect();
				insertOrder($dbCon,$_POST["usr"],$betalat,$selectOption);
				myDBClose($dbCon);
    }
        ?>
                   <?php
                    try{
                $dbCon = myDBConnect();
				getOrders($dbCon);
				myDBClose($dbCon);
                        }
                 		catch(Exception $e){
		echo ('error: '.$e->getMessage());
	}
                    ?> 
                </div>
                  </div>
                  </div>

        
        </div>
    </div>
   <script>
$(".tabortKnapp").click(function(){
    $obj=$(this);
    $namn=$(this).siblings(':first-child').text();    
          $.ajax({
                url: 'ajaxmeme.php',
                data: {namn: $namn},
                success: function (result) {
                      $obj.parent().hide( 1500, function() {
                       $obj.parent().remove();
                      });
      
                },
               error: function(){
                   alert('request failed');
               }
                
            });
                        $("this").parent().remove();
       });
$(".oka").click(function(){
    $ref=$(this);
    $storlek=$ref.siblings(':first-child').text();
    $current=parseInt($ref.prev().text());
    $current++;
    //alert($current);
              $.ajax({
                url: 'ajaxmeme.php',
                data: {storlek: $storlek, nu: $current },
                success: function (result) {
                  $ref.prev().text($current);
                      },
      
               error: function(){
                   alert('request failed');
               }
                
          
});
       
});

       $(".minska").click(function(){
    $ref=$(this);
    $storlek=$ref.siblings(':first-child').text();
    $current=parseInt($ref.prev().prev().text());
    $current--;
              $.ajax({
                url: 'ajaxmeme.php',
                data: {storlek: $storlek, nu: $current },
                success: function (result) {
                  $ref.prev().prev().text($current);
                      },
      
               error: function(){
                   alert('request failed');
               }
                
          
});
       
});
      $(".refr").click(function(){
       location.reload();
      });
    </script>
</body>
</html>