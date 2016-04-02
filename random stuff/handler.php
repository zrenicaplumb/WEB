<?php

require('config.inc.php');

$data = array(
	'first_name'=> $_POST['first_name'];
	'last_name'=>$_POST['last_name'];
	'email'=>$_POST['email'];
	'password'=>$_POST['password'];
	'weight'=>$_POST['weight'];
	)




$first_name;
$last_name;
$email;
$password;
$weight;

            $errors = 0;
            $error = '';


            if(!$first_name){
                $error .= 'enter first name ';
                $errors +=1;
                
            }
            if(!$last_name){
                $error .= 'enter last name ';
                $errors +=1;
                
			}
			if(!$email){
				$error .= 'enter email ';
				$errors+=1;
				
			}
			if(!$password){
				$error .= 'enter password ';
				$errors+=1;
				
			}
			if(!$weight){
				$error.='enter weight';
				$errors+=1;
				
			}
			if(!$errors){
				try{			 
					$zdb->insert("user2",$data);
			 		print_r($data);
			 	}catch(Zend_Db_Exception $e){
			 		echo $e->getMessage();
			 	}
			}else
				echo $error;
        
    
 



?>



