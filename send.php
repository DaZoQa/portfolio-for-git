<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'] + $email;
$recepient = 'egikvtumane916@gmail.com';

mail($recepient, $name, $message, $recepient);
?>