<?php 
session_start();
if(!isset($_SESSION["dank"])){
		header("Location: login.php");
}
    //error_reporting(E_ALL);
    //ini_set("display_errors", 1);

?>
<!doctype html>

<html lang="sv">

<head>
  <meta charset="utf-8">
  <title>Meny</title>
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="menyStyle.css">
</head>

<body>
    <div class="container">
        <div class="row ">
        <div class="col-lg-12 ">
<img src="logo.png" class="img-responsive center-block">
    </div> 
        </div>
        <div class="row top10">
         <div class="col-lg-3 col-sm-5  col-xs-12  btn-primary " onclick="location.href='index.php';">
      <h3>Medlemmar</h3>
      <p>Visa, sök</p>
      <p>Och lägg till</p>
    </div> 
    <div class="col-lg-3 col-sm-5 col-xs-12 btn-info" onclick="location.href='ovvar.php';">
      <h3>Ovvar</h3>
      <p>Lager, orders</p>
      <p>Beställning</p>
    </div> 
 <div class="col-lg-3 col-sm-5 col-xs-12    btn-success " >
      <h3>Tentor</h3>
      <p>Hantering av tentor..</p>
      <p>..kanske </p>
    </div>
    <div class="col-lg-3 col-sm-5 col-xs-12  btn-warning ">
      <h3>Column 1</h3>
      <p>Lorem ipsum dolor..</p>
      <p>Ut enim ad..</p>
    </div>

        
        </div>
    </div>
</body>
</html>