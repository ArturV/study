<?php
require 'connect.php';
$query_txt = $_REQUEST['query'];
$result = mysql_query($query_txt);
	if (!$result) {
		die("<p> Error".$query_txt.mysql_error()." </p>");
	}
echo "Your query:";
echo "<ul>";
	while ($row = mysql_fetch_row($result)){
		echo "<li>Table: ". $row[0] ."</li>";
		}
echo "</ul>";
?>