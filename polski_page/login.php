<?php
$email = $_REQUEST['email'];
$password = $_REQUEST['password'];

mysql_connect('localhost:8889','root','root') or die(mysql_error());
mysql_select_db('test') or die(mysql_error());

$result = mysql_query('SELECT email, password FROM user3 WHERE email = "$email" and password = "$password"');
while($row = mysql_fetch_array($result)){
	if(md5($password) == $row['password']){
		echo $row['id'];
	}else{
		echo '';
	}
}
?>