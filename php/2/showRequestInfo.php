
<div id="header"><h1>Php & Mysql learning</h1></div>
	<div id="example">Example 2.2</div>
	
	<div id="content">
		<h1>Come to learn PHP</h1>
		<p>This is all each writen in $_REQUEST: </p>
		<?php
			foreach($_REQUEST as $value) { // foreach - isveda visas reiksmes paeiliui is $_REQUEST
				echo "<p>" .$value . "</p>";
			}
		?>
		<p>-------------------------------------------------------------
		</p>
		<?php
			foreach($_REQUEST as $key => $value) { // foreach - isveda visas reiksmes paeiliui is $_REQUEST
				echo "<p> Dlja " .$key. " priskirta reiksme '" .$value ."' </p>";
			}			
		?>
	</div>
		
