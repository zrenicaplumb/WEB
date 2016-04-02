
<html>
	<head>
		
		<meta charset="UTF-8">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<style>
			body{margin:0px; height:100%; background:#121211; font-family:Arial,sans-serif;}
			.wrap{ width:100%; min-width:915px; position:relative;}
			.topBar{background:#2B2B2B; width:100%; height:45px; box-shadow:0 0 11px 1px #111; min-width:915px;}
			#imgurLogo{width:68px; height:25px; margin-left:4em; margin-top:9px;}
			#imgurLogo:hover{}
			#main-nav{}
			
			.galleryBack{background:rgb(43,43,43); position:relative; margin:auto; width:900px; height:2000px; margin-top:67px; -webkit-box-shadow:0 0 11px 1px #111; border-radius:10px;}
			.galleryTop{background:#2B2B2B;}
			.backgroundImg{ width:100%; min-width:1000px; background:url('main-bg.png') top center no-repeat;height:429px; position:absolute; top:45; max-width:100%; overflow-x:hidden; z-index:-100;}
			.menuBtn{}

			.bar{width:18px; height:2px; background:#fff; opacity:0.9; margin:2px; border-radius:40px;}
			.menu-icon{margin-top:-51; margin-left:105px;}
			.upload-btn{background:linear-gradient(#3274e5,#2d67cc); width:160px; height:26px; border-radius:3px; border-top: 1px solid #3881ff; border-bottom: 1px solid #1f478c; border-left: 1px solid transparent; margin-top:-62px; margin-left:140px;}
			.upload-icon img{width:18px; margin-top:8px; margin-left:8px; cursor:pointer;}

			#arrow-down{background:linear-gradient(#2a61bf,#224d99); width:32px; height:26px; border-radius:3px; margin-left:270px; margin-top:-28; border-top:1px solid #306ed9; border-bottom: 1px solid #1c4180; }
			#arrow-down img{width:18px; margin-top:4px; margin-left:6px; cursor:pointer;}
			.upload-button-container{margin-top:20px;}
			.upload-button-text{color:#E6E7E9; font-size:13px; position:relative; top:-18; left:36; cursor:pointer; }
			li{color:transparent; }

			.random-shuffle img{position:relative; left:350px; top:-60; width:32px;}
			.sentence-sorting{color:white; font-size:20px; text-align:center; position:relative; top:30px; }
			#most-viral{border-bottom:2px solid #85bf25;}
			#popularity{border-bottom:2px solid #85bf25; margin-left:10px; margin-right:10px;}
			#search-div{width:390px; height:45px; float:right; margin-top:-98px; background:rgb(43, 43, 43);}
			#search-div p{color:#7D8080; margin-left:-40px; font-size:13px; margin-top:0px; }
			.search-bar-right{height:100%; float:left; color:#DDDDD1;}
			.search-bar-right span{display:inline;}
			#sign-up{position:relative; float:right; top:-80px; right:80px;}
			#sign-up img{width:20px; }
			#sign-in{  margin-left:40px;}
			#search{  margin-left:40px;}
			#search-icon{position:relative; top:-27; width:14px; left:15px;}
			.galleryTop{padding:21px; border-radius:20px;}
			.post{width:180px; height:180px;}
			.post img{width:180px; height:180px; margin:4px;}
			.sign-up-box{background:rgb(43,43,43); width:250px; height:320px; border-radius:12px; z-index:10000000; position:absolute; margin-left:auto; margin-right:auto; box-shadow: 0 0 2px 1px black; margin-top:100px; border:1px solid #3881ff ; display:block;}
			.choose-file-box{height:40px; border-radius:5px; width:100px; background:linear-gradient(rgb(43, 43, 43),black); position:absolute; left:75px; top:260px; box-shadow: 0 0 1px 1px black; cursor:pointer;}
			.choose-file-box:hover{background:linear-gradient(rgb(80, 80, 80),#111111)}
			#bob{position:absolute; top:12px; left:25px; color:#85bf25;}
			.browse-box{height:40px; border-radius:5px; width:100px; background:linear-gradient(rgb(43, 43, 43),black); position:absolute; left:75px; top:20px; box-shadow: 0 0 1px 1px black; cursor:pointer;}
			.browse-box:hover{background:linear-gradient(rgb(80, 80, 80),#111111);}

			#bill{position:absolute; top:11px; left:25px; color:#85bf25;}
			.image-file{margin-top:100px; display:block;}
			.close{cursor:pointer;}
			#submit{display:block;}
			.thumbnail{border:1px solid #3881ff; width:130px; height:130px; margin-left:59px; margin-top:64px;}
		</style>
		<script>
		$(document).ready(function(){
			var signUpBox = $('<div class="sign-up-box"></div>');
			var chooseFileBox = $('<div class="choose-file-box"><span id="bob">Upload</span></div>');
			var browseBox = $('<div class="browse-box"><span id="bill">Browse</span></div>');
			var imageFile = $('<form action="index.php" method="post" enctype="multipart/form-data"><input type="file" name="image" class="image-file"><input id="submit" type="submit" name="submit" value="upload"></form>');
			var close = $('<img src="close.gif" class="close">');
			var thumbnail = $('<div class="thumbnail"></div>')
			close.css({'margin-left':'220px','margin-top':'12px'})
			var winW = $(window).width();
			var boxW = $('.sign-up-box').width();
			signUpBox.css({'left':(winW/2)-125});
			signUpBox.prepend(chooseFileBox);
			signUpBox.append(browseBox);
			signUpBox.append(imageFile);
			signUpBox.prepend(close);
			signUpBox.append(thumbnail);
			var uploadBtn = $('.upload-button-text');

			
				
			

			console.log(imageFile);
			$(browseBox).click(function(){
				$('.image-file').click();
			});

			$(uploadBtn).click(function(){
				$('.wrap').prepend(signUpBox);
				signUpBox.css({'display':'block'});
			});		

			$(close).click(function(){
				signUpBox.css({'display':'none'});
			});
		});

				
			
		</script>
	</head>
	<body>	
		<div class="wrap">
			<div class="topBar">
				<div id="headerLogo"></div>
				<a href="index.html"><img src="imgurLogo.png" id="imgurLogo"></a>
				<div id="main-nav">
					<ul>
						<li class="menuBtn">
							<div class="menu-icon">
								<div class="bar"></div>
								<div class="bar"></div>
								<div class="bar"></div>
							</div>
						</li>
						<li class="upload-button-container">
							<div class="upload-btn">
								<div class="upload-icon">
									<img src="cloud.png" alt="upload">
								</div>
								<span class="upload-button-text">upload images</span>
							</div>
							<div id="arrow-down">
								<img src="down_arrow.png" alt="down_arrow">
							</div>
						</li>
					</ul>
					<div class="random-shuffle">
						<img src="random.png" alt="randomShuffle">
					</div>
				</div>
				<div id="search-div">
					<ul>
						<li id="search" class="search-bar-right">
							<p>Search</p>
							<img src="search.png" id="search-icon">
						
						<li id="sign-in" class="search-bar-right"><span>sign in</span></li>
						<li id="sign-up" class="search-bar-right"><span>sign up</span></li>
					</ul>
				</div>

			</div>

			<div class="backgroundImg"></div>
			<div class="main_content">
				<div class="sentence-sorting">
					
						The <span id="most-viral">Most Viral</span> images on the Internet, sorted by<span id="popularity">Popularity</span>
					
				</div>
				<div class="galleryBack">
					<div class="galleryTop">
						<div id="picture" class="post">
							<img src="">
						</div>
					</div>
				</div>

			</div>
		</div>
		<?php
			if(isset($_POST['submit'])){
				mysql_connect('localhost','root','root');
				mysql_select_db('test');

				$image = mysql_real_escape_string($_FILES['image']['name']);
				$imageData = mysql_real_escape_string(file_get_contents($_FILES['image']['tmp_name']));
				$imageType = mysql_real_escape_string($_FILES['image']['type']);
				if(substr($imageType,0,5) == 'image'){
					echo 'working code';
				}else{
					echo 'only images allowed';
				}
			}



		?>

	</body>

</html>