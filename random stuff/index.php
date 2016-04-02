<?php 
ini_set('display_errors',1);
require('config.inc.php');




$search = 'bob';
$users = $zdb->select()->from('user')->where('first_name=?',$search)->query()->fetchAll();


?>
<html>
	<head>
	</head>
	<body>
		<button id="button" onclick="changeColor()">click me</button>
		<p id="bob">Hello World!</p>
		<?php foreach($users as $user){
			echo $user['first_name'] . "<br>";
		}?>	
		<script>
		$(document).ready(function(){
			function changeColor(){
				document.getElementById('bob').style.color="blue";
			}

		})
			
		
		</script>	
	</body>
</html>

