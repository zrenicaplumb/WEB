<?php 
ini_set('display_errors',1);

$username = 'root';
$password = 'root';
$db_name = 'test';
$host = 'localhost';
$port = 8889;

require_once 'Zend/Loader/Autoloader.php';
require_once 'Zend/Db/Adapter/Pdo/Mysql.php';
require_once 'Zend/Db/Table.php';

$zdb = new Zend_Db_Adapter_Pdo_Mysql(array(
    'host'     => $host,
    'username' => $username,
    'password' => $password,
    'dbname'   => $db_name,
    'port'	   => $port
));

Zend_Db_Table::setDefaultAdapter($zdb);

?>

