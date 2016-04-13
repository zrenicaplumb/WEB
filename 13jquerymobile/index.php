<?php
	require_once 'Mobile_Detect.php';
	$detect = new Mobile_Detect;

	if( $detect->isMobile()){
		header("Location: index.html");
	}
?>

<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>mobile redirect</title>
</head>
<body>
	<h1>this would be the desktop version site.</h1>
</body>

</html>