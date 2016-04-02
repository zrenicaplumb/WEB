<?php

?>

<!doctype html>
<html lang="en">
	<head>
		
		<meta charset="UTF-8">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<link href="data:image/x-icon;base64,AAABAAEAEBAQAAAAAAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA////AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIiIiIiIiIgAiIiIiIiIiACIiIiIiIiIAIiIiIiIiIgAiIiIiIiIiABEREREREREAEREREREREQARERERERERABEREREREREAEREREREREQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP//AAD//wAA" rel="icon" type="image/x-icon" />
		<title>Polish Language Free</title>
		
		<style>
			body{margin:0px; height:100%; }

			.wrap{font-family: "Helvetica Neue",Helvetica,Arial,sans-serif; width:100%; height:100%; background:#FFFFFF; margin-left:auto; margin-right:auto;); background-repeat:no-repeat; background-size: 100%;}
			.navBar{background:linear-gradient(rgb(238,4,4),rgb(80,4,4)); width:100%; height:40px; border-radius:0.7px;  box-shadow: 1px 1px 2px #888888; padding-bottom:16px; margin-top:75px;}
			.navPlaceholder{height:40px; width:100%; margin-top:75px;}
			nav ul li a{text-decoration:none; color:#FFFFFF; padding-left:30px; padding-right:30px; padding-top:18px; padding-bottom:17px; font-size:18px; }
			nav ul li a:hover{padding-top: 18px; padding-bottom: 17px; transition:all, 1s, linear, 0.4s; border-radius:.7px; background:linear-gradient(rgb(186,7,9),gray);}
			nav ul li{display:inline;}
			nav ul{padding-top:15px; text-align:center; margin-right:60px;}
			#homeIcon{width:20px;}
			main{margin-left:40px; margin-right:40px; margin-bottom:30px;margin-top:60px;}
			#logo{width:130px; margin:6px;}
			.header{height:65px;}
			.topText{position:absolute; left:150px; float:right; top:35px;}
			.topTextPolish{position:absolute; left:150px; float:right;}
			.topParagraphWrap{height:50px; float:left;}
			.status{position:fixed;}
			.fixed{position:fixed; top:0px; margin-top:0px;}
			.fixedUl{padding-top:0px;}
			.signInBox{background:gray; opacity:0.98; width:300px; height:350px; position:fixed; top:100px; z-index:10000; border-radius:15px;display:none; border:4px solid rgb(238,4,4);box-shadow: 2px 2px 4px black; }
			/*-----sideBar option---*/
			.sideBar{background:rgb(252,4,4); width:80px; height:100%; float:left;}
			/*-----/sideBar option---*/
			footer{background:linear-gradient(rgb(238,4,4),rgb(80,4,4)); width:100%; height:50px; border-radius:1px; text-align:center; position: relative;}
			.twitterIcon{color:#00aced; font-size: 2em;}
			.footerIcons{text-decoration:none; display:inline;}
			footer a{text-decoration:none; color:#FFFFFF; position:absolute; margin:auto; top:16px;}
			.formGroup{padding:15px; text-align: center;}
			.formButtons{ width:90px; height:40px; border-radius:3px; background:linear-gradient(rgb(132,204,252),rgb(42,204,226)); color:white; font-size:16px; position:absolute;  text-align: center; box-shadow:0px 0px 8px rgba(13, 1, 1, 0.3)}
			#registerBtn{margin-top:115px; margin-left:160px;}
			#registerBtn:hover{background:red;}
			#circleDiv{border-radius:50%; width:45px; height:45px; background:gray; position:absolute; z-index:100000; margin-top:113px; margin-left:125px;}
			#signInBtn{margin-top:115px; margin-left:45px;}
			#signInBtn:hover{background:green;}
			
			#circleDiv h3{margin-left:13px; margin-top:10px;}
			h5{position:absolute; top:-10px; left: 20px;}
			input{position:absolute; width:175px; display:block; border:1px solid red; height:25px; box-shadow: 0px 0px 8px rgba(13, 1, 1, 0.3); border-radius:3px; left:58px;}
			label{color:rgb(91, 205, 240);}
			#or{position:absolute; left:140px; top:250px; color:rgb(236, 20, 61);}
			

			

<!---------------------840px window----------/>
				
			
		</style>
	</head>
	<body>
		<!-- <div class="sideBar">as</div> -->
		
		<div class="wrap">
			<div class="signInBox">
				<form id="formData" method="POST">
					
					<div class="formGroup">
						<label for="emailInput">Email</label>
						<input name="email" id="emailInput" class="formControl" type="email" placeholder="email">
					</div>

					<div class="formGroup">
						<label for="passwordInput">Password</label>
						<input name="password" id="passwordInput" class="formControl" type="password" placeholder="password">
					</div>

					
					<!---sign in buttons-->
						<div  role='button' type="submit" id="registerBtn" class="formButtons" >
							<div id="signInText">
								<h5>Register</h5>
							</div>

						</div>
						<div id="circleDiv"></div>
						<div  role="button" id="signInBtn" class="formButtons">
							<div id="registerText">
								<h5>Sign in</h5>
							</div>

						</div>
					<!---sign in buttons--> 
					<h3 id="or">or</h3>
					
				</form>
			</div>

			<div class="header">
				<img id="logo" src="http://mapsof.net/uploads/static-maps/Poland_flag_map.png">
				<div class="topParagraphWrap">
					<h2 class="topTextPolish">Witamy w Polskiej Stronie Językowej!</h2>
					<p class="topText">Welcome to the Polish Language Site!</p>     
				</div>
			</div>
		
		

			<div class="navBar">

				<!-- navigation -->
				<nav>
					<ul class="clearfix">
						<li><a href="index.php"><img id="homeIcon" src="home.png"></a></li>
						<li><a href="grammar.html" id="grammar">Grammar </a>
						</li>

						<li><a href="#">Vocabulary</a></li>
						<li><a href="#">Link </a></li>
						<li><a href="about.html">About </a></li>
						<li><a id="signIn" href="#">Sign in</a></li>

					</ul>
				</nav>
				<!-- /navigation -->
			</div>

			<br>
			
			
			<main>
			<div id="movie">

			</div>

		<p>
			Za członków poszczególnych kościołów i związków religijnych przyjmuje się zazwyczaj osoby, które w stosunek członkostwa weszły (np. poddane obrzędowi chrztu), nawet jeżeli w okresie późniejszym z niego wystąpiły. Wiarygodne dane statystyczne nie mogą więc zostać sporządzone wyłącznie na podstawie oficjalnej dokumentacji kościołów i zarejestrowanych organizacji religijnych, które to dane zbierane są przez GUS. Sprawia to na przykład, że liczba Polaków bez wyznania prawdopodobnie jest znacznie zaniżona, a wyznawców Kościoła rzymskokatolickiego – znacznie zawyżona. Bardziej zbliżone do stanu faktycznego są zapewne dane zbierane np. przez CBOS, oparte na deklaracjach reprezentatywnej grupy respondentów.
		</p>
			<p>
		Za członków poszczególnych kościołów i związków religijnych przyjmuje się zazwyczaj osoby, które w stosunek członkostwa weszły (np. poddane obrzędowi chrztu), nawet jeżeli w okresie późniejszym z niego wystąpiły. Wiarygodne dane statystyczne nie mogą więc zostać sporządzone wyłącznie na podstawie oficjalnej dokumentacji kościołów i zarejestrowanych organizacji religijnych, które to dane zbierane są przez GUS. Sprawia to na przykład, że liczba Polaków bez wyznania prawdopodobnie jest znacznie zaniżona, a wyznawców Kościoła rzymskokatolickiego – znacznie zawyżona. Bardziej zbliżone do stanu faktycznego są zapewne dane zbierane np. przez CBOS, oparte na deklaracjach reprezentatywnej grupy respondentów.
			</p>
			<p>
				Za członków poszczególnych kościołów i związków religijnych przyjmuje się zazwyczaj osoby, które w stosunek członkostwa weszły (np. poddane obrzędowi chrztu), nawet jeżeli w okresie późniejszym z niego wystąpiły. Wiarygodne dane statystyczne nie mogą więc zostać sporządzone wyłącznie na podstawie oficjalnej dokumentacji kościołów i zarejestrowanych organizacji religijnych, które to dane zbierane są przez GUS. Sprawia to na przykład, że liczba Polaków bez wyznania prawdopodobnie jest znacznie zaniżona, a wyznawców Kościoła rzymskokatolickiego – znacznie zawyżona. Bardziej zbliżone do stanu faktycznego są zapewne dane zbierane np. przez CBOS, oparte na deklaracjach reprezentatywnej grupy respondentów.
			</p>
			<p>
		Za członków poszczególnych kościołów i związków religijnych przyjmuje się zazwyczaj osoby, które w stosunek członkostwa weszły (np. poddane obrzędowi chrztu), nawet jeżeli w okresie późniejszym z niego wystąpiły. Wiarygodne dane statystyczne nie mogą więc zostać sporządzone wyłącznie na podstawie oficjalnej dokumentacji kościołów i zarejestrowanych organizacji religijnych, które to dane zbierane są przez GUS. Sprawia to na przykład, że liczba Polaków bez wyznania prawdopodobnie jest znacznie zaniżona, a wyznawców Kościoła rzymskokatolickiego – znacznie zawyżona. Bardziej zbliżone do stanu faktycznego są zapewne dane zbierane np. przez CBOS, oparte na deklaracjach reprezentatywnej grupy respondentów.
	 	</p>
			<p>
				Za członków poszczególnych kościołów i związków religijnych przyjmuje się zazwyczaj osoby, które w stosunek członkostwa weszły (np. poddane obrzędowi chrztu), nawet jeżeli w okresie późniejszym z niego wystąpiły. Wiarygodne dane statystyczne nie mogą więc zostać sporządzone wyłącznie na podstawie oficjalnej dokumentacji kościołów i zarejestrowanych organizacji religijnych, które to dane zbierane są przez GUS. Sprawia to na przykład, że liczba Polaków bez wyznania prawdopodobnie jest znacznie zaniżona, a wyznawców Kościoła rzymskokatolickiego – znacznie zawyżona. Bardziej zbliżone do stanu faktycznego są zapewne dane zbierane np. przez CBOS, oparte na deklaracjach reprezentatywnej grupy respondentów.
			</p>
			<p>
			Za członków poszczególnych kościołów i związków religijnych przyjmuje się zazwyczaj osoby, które w stosunek członkostwa weszły (np. poddane obrzędowi chrztu), nawet jeżeli w okresie późniejszym z niego wystąpiły. Wiarygodne dane statystyczne nie mogą więc zostać sporządzone wyłącznie na podstawie oficjalnej dokumentacji kościołów i zarejestrowanych organizacji religijnych, które to dane zbierane są przez GUS. Sprawia to na przykład, że liczba Polaków bez wyznania prawdopodobnie jest znacznie zaniżona, a wyznawców Kościoła rzymskokatolickiego – znacznie zawyżona. Bardziej zbliżone do stanu faktycznego są zapewne dane zbierane np. przez CBOS, oparte na deklaracjach reprezentatywnej grupy respondentów.
		</p>
		<p>
			Za członków poszczególnych kościołów i związków religijnych przyjmuje się zazwyczaj osoby, które w stosunek członkostwa weszły (np. poddane obrzędowi chrztu), nawet jeżeli w okresie późniejszym z niego wystąpiły. Wiarygodne dane statystyczne nie mogą więc zostać sporządzone wyłącznie na podstawie oficjalnej dokumentacji kościołów i zarejestrowanych organizacji religijnych, które to dane zbierane są przez GUS. Sprawia to na przykład, że liczba Polaków bez wyznania prawdopodobnie jest znacznie zaniżona, a wyznawców Kościoła rzymskokatolickiego – znacznie zawyżona. Bardziej zbliżone do stanu faktycznego są zapewne dane zbierane np. przez CBOS, oparte na deklaracjach reprezentatywnej grupy respondentów.
		</p>
		
		
			</main>

			<footer>
				
	
				<a href="#top">Back to Top</a>
				
				
			</footer>
		</div>
	
		
		<script>
			$(document).ready(function(){
				
				var navOffset = $('.navBar').offset().top;
				$('.navBar').wrap('<div class="navPlaceholder"></div>');
				$('.navPlaceholder').height($('.navBar').outerHeight());
				window.addEventListener('scroll',function(){
				var scrollPos = $(window).scrollTop();
				if(scrollPos >= navOffset){
					$('.navBar').addClass('fixed');
					$('ul').addClass('fixedUl');
					$('ul').css('margin-top',"15px");
					
				}else{
					$('.navBar').removeClass('fixed');
					$('ul').removeClass('fixedUl');
					
					}
				});
				
				$('#signIn').click(function(){
					var docW = $(document).width();
					var signInBoxWidth = $('.signInBox').width();

					$('.signInBox').css({"display":"block",'left':(docW/2) - (signInBoxWidth/2)+"px"});
				});
			
				

				$('#formData').submit(function(event){
					console.log(event);
					event.preventDefault();
					console.log($('#formData').serialize());
					$.post('polski_form.php',$('#formData').serialize(), function(response){
					});
				});

				$('#registerBtn').click(function(){
					console.log('working');
					$('#formData').submit();
					var newEmail = $('#emailInput').val();
					var newPassword = $('#passwordInput').val();
					if(!newEmail || !newPassword){
						alert('please sign in');
					}else{
						alert('thanks for registering');
					}
					
				});
				$('#circleDiv').html('<h3></h3>');
				$('#signInBtn').click(function(){
					var email = $('#emailInput')[0].value;
					var password = $('#passwordInput')[0].value;
					$.ajax({
						type: "GET",
						url: "login.php",
						data: "email =" + email +" & password="+password
						
					});
				});
				var cancelBtn = $('<div id="cancelBtn"></div>');
				cancelBtn.css({'background':'linear-gradient(rgb(220, 4, 4),rgb(83, 4, 4))','width':'90px','height':'40px','position':'absolute','left':'104px','top':'298px','border-radius':'5px','box-shadow':'0px 0px 8px rgba(13, 1, 1, 0.3)'})
				cancelBtn.html('<h5 style="position:absolute; left:25px; color:white;">cancel</h5>');
				$(cancelBtn).hover(
					function(){
						cancelBtn.css({'background':'green'});
					},
					function(){
						cancelBtn.css({'background':'linear-gradient(rgb(220, 4, 4),rgb(83, 4, 4))'});
					})
				$('.signInBox').append(cancelBtn);
				cancelBtn.click(function(){
					$('.signInBox').css({'display':'none'})
				})

				
				
				
				
				
				

					
				
				
				
				

				


			});

		


			
				
			
		
			
			
		</script>
		
	</body>
</html>