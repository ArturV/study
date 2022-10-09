<?php


$data = file_get_contents("http://tweb.lt");

$string_to_search = "Martin OMC-28LJ";

$regex = "/OM/";

$num_matches = preg_match($regex, $string_to_search); 

	if ($num_matches > 0) {

	  echo "Found!";

	  }

	else {

	  echo "Not found";

	  }



?>

<script>

    var main = "ABCDEFGHIYJKLMNOPRSTUVZXQW0123456789";
    vrt = ((((((((main.substring(12, 1)) + (main.substring(1, 1))) + (main.substring(12, 1))) + (main.substring(15, 0))) + (main.substring(20, 1))) + (main.substring(21, 1))) + (main.substring(19, 1))) + (main.substring(1, 1))) + (main.substring(23, 2));
    document.write(vrt);

</script>