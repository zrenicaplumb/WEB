<?php

require('config.inc.php');
$data = array(
	'email' => $_POST['email'],
	'password' => $_POST['password']
	);

$email = $data['email'];
$password = $data['password'];


$error = '';
$errors = 0;
if(!$data['email']){
	$error .= 'please enter email';
	$errors = 1;
}
if(!$data['password']){
	$error .= 'please enter email';
	$errors = 1;
}
if($errors == 0){
	$zdb->insert('user3',$data);
	print_r($data);
}


?>