<?php
	function myDBConnect() {

		define("DB_HOST", "www.lindacarlstad.se");
		define("DB_USERNAME", "lindacar_member");
		define("DB_PASSWORD", "Bordeaux2017");
		define("DB", "lindacar_medlemmardb");

		$dbConnection = mysqli_connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB);

		if (!$dbConnection) {
			throw new Exception(mysqli_connect_errno().": ".mysqli_connect_error());
		}
		else{mysqli_query ($dbConnection ,'SET NAMES utf8;');}

		return $dbConnection;
	}

	function myDBQuery($dbConnection, $strSQL) {

		if(!$recordSet = mysqli_query($dbConnection, $strSQL)) {
			throw new Exception(mysqli_errno($dbConnection).": ".mysqli_error($dbConnection));
		}

		return $recordSet;
	}


	function myDBFreeResult($recordSet) {

		mysqli_free_result($recordSet);

	}

	function myDBClose($dbConnection) {

		if(!mysqli_close($dbConnection)) {
			throw new Exception(mysqli_errno($dbConnection).": ".mysqli_error($dbConnection));
		}
	}
