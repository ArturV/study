<?php
	require 'app_config.php';
	mysql_connect(DATABASE_HOST, USERNAME, PASSWORD)
		or die("<p>Failed to connect to database".mysql_error()."</p>"); 
	echo "<p>You are connected to MySql</p>";
	mysql_select_db(DATABASE_NAME)
		or die("<p>Failed to connect do db".mysql_error()."</p>");
	echo "<p>You are connected to DB</p>";
// tweblt_php tweblt_phpUser 123456a 
/*
	$result = mysql_query("SHOW TABLES;");
		
		if  (!$result) {  //($result === false) {
			die("<p>Error from show tables".mysql_error()."</p>");
			}
	echo "<p>Tables in DB:</p>";
	echo "<ul>";
	while ($row = mysql_fetch_row($result)){
		echo "<li>Table: ". $row[0] ."</li>";
		}
	echo "</ul>";
*/			
?>

