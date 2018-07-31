<?php
header("Access-Control-Allow-Origin: *");
$email = $_POST['email'];

//Email information
$admin_email = "braca@concept7.io";
$email = $_REQUEST['email'];
$subject = 'Subject';
$comment = $_REQUEST['message'];

//send email
mail($admin_email, "$subject", $comment, "From:" . $email);

echo 'success send email'
// header("HTTP/1.1 301 Moved Permanently");
// header("Location: /Concept7/");
?>
