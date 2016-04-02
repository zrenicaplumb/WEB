<?php
require('config.inc.php2');


$data = array(
	'first_name' => $_POST['first_name'],
	'last_name'  => $_POST['last_name'],
	'email'      => $_POST['email'],
	'password'   => $_POST['password'],
	'weight'     => $_POST['weight']
	);



$error = '';
$errors = 0;

if(!$data['first_name']){
	$error .='enter first name';
	
	$errors +=1;
}
if(!$data['last_name']){
	$error .='enter last name';
	
	$errors += 1;
}
if(!$data['email']){
	$error .='enter email';
	
	$errors+=1;
}
if(!$data['password']){
	$error .='enter password';
	
	$errors+=1;
}
if(!$data['weight']){
	$error .='you are fat';
	
	$errors +=1;
}
if($errors>0){
	echo $error;
}else{
	try{
	$zdb->insert('user3',$data);
	print_r($data);
	}catch(Zend_Db_Exception $e){
		echo $e.getMessage();
	}	

}






?>