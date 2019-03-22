<?php 
    error_reporting(E_ALL);
    ini_set("display_errors", 1);
    include("dbKoppling.php");
	include("dbfunctionsTenta.php");
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

    <script src="dropzone.js"></script>
    <script src="tentorjs.js"></script>


</head>

<body>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 bg-info">
          <p>Dankade Tentor BRE GHEAD</p>
        </div>    
          <div class="row">
              <div style="clear:both;" id="courseSelector"><br><b>Välj kurs:</b><br>
	    <select class="input_textfield" id="selectorKurs" onchange="populateTestList(this.value)">
	    <option value="">Välj kurs</option><option value="ISGA01">ISGA01 - Informationssystem och IT</option><option value="ISGA02">ISGA02 - Verksamhet och IT</option><option value="ISGA03">ISGA03 - Anskaffning av IT-system</option><option value="ISGA04">ISGA04 - Grundläggande programmering</option><option value="ISGA06">ISGA06 - Prototyping: Att pröva och kommunicera designkoncept</option><option value="ISGA07">ISGA07 - Interaktiv Flash-animering</option><option value="ISGA10">ISGA10 - Informatik A</option><option value="ISGA11">ISGA11 - HTML och CSS för webbutveckling</option><option value="ISGA21">ISGA21 - Grundläggande databasdesign</option><option value="ISGA50">ISGA50 - Datakunskap och IKT</option><option value="ISGA90">ISGA90 - Introduktion till IT-design</option><option value="ISGA91">ISGA91 - Informatik för ekonomer</option><option value="ISGB01">ISGB01 - Databasdesign</option><option value="ISGB02">ISGB02 - Webbutveckling</option><option value="ISGB03">ISGB03 - Objektorienterad modellering</option><option value="ISGB04">ISGB04 - Programutveckling</option><option value="ISGB05">ISGB05 - Affärssystem I: Analysmodeller</option><option value="ISGB06">ISGB06 - Affärssystem II: Utvecklingsmodeller</option><option value="ISGB08">ISGB08 - Fortsättningskurs i programmering</option><option value="ISGB10">ISGB10 - Informatik B</option><option value="ISGB11">ISGB11 - Systemimplementeringsteknik</option><option value="ISGB13">ISGB13 - Portabla format</option><option value="ISGB14">ISGB14 - Webbutvecklingsprojekt</option><option value="ISGB15">ISGB15 - JavaScript för webbutveckling</option><option value="ISGB16">ISGB16 - Multimedia för webben</option><option value="ISGB18">ISGB18 - Introduktion till objektorienterad programmering</option><option value="ISGB24">ISGB24 - Webbutvecklingsprojekt</option><option value="ISGB61">ISGB61 - Databasdesign</option><option value="ISGB62">ISGB62 - Gränssnittsprogrammering med Visual Basic</option><option value="ISGC01">ISGC01 - Interaktionsdesign</option><option value="ISGC05">ISGC05 - Datasäkerhet</option><option value="ISGC07">ISGC07 - Tjänster och IT: Elektroniska affärer</option><option value="ISGC13">ISGC13 - Systemanalys och design</option><option value="ISGC16">ISGC16 - Användartester, prototyping och utvärdering</option></select></div>
          </div>
<form method="post" enctype="multipart/form-data">
<input type="file" name="file">    
<input type="submit" value="upload" name="upload">
</form>

    <?php

if(isset($_POST["upload"]))
{
if(isset($_FILES["file"]))
echo("lel");
$filename=$_POST["file"];
$fnm=$_FILES["file"]["name"];
$dst="./imgaes/".$fnm;
    move_uploaded_file($_FILEs["file"]["tmp_name"],$dst);
    $dbCon = myDBConnect();
    insertTenta($dbCon,0,0,$fnm,$dst);
    myDBClose($dbCon);

}
    
   if(isset($_POST["lel"])){
    echo("TADA");   
   } 
    
    
    
?>
          
          
    </div>
    <?php 
    $dbCon = myDBConnect();
    getTentor($dbCon);
    myDBClose($dbCon);
    ?>
    </div>


</body>

</html>