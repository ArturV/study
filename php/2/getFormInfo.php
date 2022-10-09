<html>
<head>
</head>
<body>
	<div id="header"><h1>Php & MySql Missing manuals</h1></div>
	<p>Example 2-1</p>
	<div id="content">
	<p> All information about you </p>

	<p>
		Name <?php echo $_REQUEST['first_name']; ?> </br>
		Surname <?php echo $_REQUEST['last_name']; ?> </br>
		Email <?php echo $_REQUEST['email']; ?> </br>
		FB url: <?php echo $_REQUEST['fb_url']; ?> </br>
		Twitter: <?php echo $_REQUEST['twitter']; ?> </br>
	</p>

	</div>
	<div id="footer">
	<?php $first_name = trim($_REQUEST['first_name']);
		  $last_name = trim($_REQUEST['last_name']); 
		  $fb_url = trim($_REQUEST['fb_url']); 
		  $fb_url = str_replace("facebook.org","facebook.com",$fb_url);
		  $position = strpos($fb_url, "facebook.com");
		  
			if ($position === false) {
				$fb_url = "http://www.facebook.com/" . $fb_url;
				}
							
		  echo $first_name ." ". $last_name;
		  $twitter = $_REQUEST['twitter'];
		  $twitter_url = "http://www.twitter.com/";
		  $position = strpos($twitter, "@");
			if ($position === false) {
				$twitter_url = $twitter_url . $twitter;
				}else {
					$twitter_url = $twitter_url . substr($twitter, $position+1);
				}
    ?>
	</br>
	FB url: <?php echo $fb_url; ?> </br>
	<a href="<?php echo $fb_url; ?>">FB Link</a>
	<a href="<?php echo $twitter_url; ?>"> Twitter Link</a>
	</div>
	
	<div id="array">
		<p>
		<?php 
			$file_cabinet[0]="Derek";
			$file_cabinet[1]="Truck";
			$file_cabinet[2]="derek@truck.com";
			$file_cabinet[3]="http://www.fb.com/derek";
			$file_cabinet[4]="@trucker_";
			
			$first_name = $file_cabinet[0];
			echo $first_name . "</br>"; 
			echo $file_cabinet[1];
		?>
		</p>
	</div>
		<div id="array_2">
		<p>
		<?php 
			$file_cabinet['name']="Derek";
			$file_cabinet['surname']="Truck";
			$file_cabinet['mail']="derek@truck.com";
			$file_cabinet['www']="http://www.fb.com/derek";
			$file_cabinet['nick']="@trucker_";
			
			$surname = $file_cabinet['surname'];
			
			
			echo $name . "</br>"; 
			echo "Surname: " .$surname;
		?>
		</p>
	</div>
</body>
</html>
		
	