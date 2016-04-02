<?php
	require('config.inc.php');
	$data = array(
		'image' => $_POST['image'],
		);
	if(!$data['image']){
		echo 'please upload image';
	}else{
		try{
		$zdb->insert('pics',$data);
		print_r($data);
		}catch(Zend_Db_Exception $e){
		echo $e.getMessage();
	}	

}



?>