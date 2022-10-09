<?php
$string_org = '0123456789';
$string_rpl ='xxxx';
$string_new = substr_replace($string_org,$string_rpl,-4);
print $string_new;
print "\n";
//print substr('0123456789', -4,-1);
?>