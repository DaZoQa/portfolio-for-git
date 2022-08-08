<?php

$recepient = 'egikvtumane916@gmail.com';
$siteName = 'Portfolio';

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);
$headers = "From:" . $email
$emailMessage = "Имя: $name \nСообщение: $message";
$pageTitle = "Заявка с сайта:\"$siteName\"";

mail($recepient, 
$pageTitle, 
$emailMessage, 
$headers);

?>