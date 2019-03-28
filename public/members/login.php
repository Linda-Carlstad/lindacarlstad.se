<?php
session_start();
if(isset($_POST["login"])){
	$username= $_POST[user];
	$password= $_POST[password];

	if($username=="LindaAdmin" && $password="Bengt2017" ){
		$_SESSION['dank']=Billy;
		header("Location: meny.php");

	}else{
		echo("error");

	}
}
?>

<html>
<head>
  <link rel="stylesheet"type="text/css"href="style.css">
<title>Linda Controlpanel</title>
</head>
<body>
<div class="login-page">
<img src="logo.png">
  <div class="form">
    <form action="https://lindacarlstad.se/members/login.php" method="post" class="login-form">
<input placeholder="Username" name="user" type="text" autofocus="">
<input placeholder="password" name="pw" type="password">
<input name="login" type="submit" value="login">
    </form>
  </div>
</div>
</body>
</html>
