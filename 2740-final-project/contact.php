<!DOCTYPE html>
<html lang="en">
	<head>

		<?php 
            include 'php/head.php'
        ?>
        
	</head>

	<body id="contact-body">
		
		<div class="contact-wrap">
            <header>
                <div class="hamburger-menu-wrap">
                    <img src="img/menu.png" class="menu">
                </div>
                
                <a href="index.html"><img id="logo" src="img/logo.png"></a>
                
            </header>


          <?php 
            include 'php/nav.php'
        ?>
            


            <div class="home-content contact">
                <div>
                    <div class="form-div">
                        <h2 id="utah">Contact us</h2>
                        <h2 id="bob" style="border-bottom:none;">We would love to hear your comments. </h2>
                        <p>Please complete our feedback form and let us know how we
                        can improve our services or the web site.

                        We would also like to hear your comments about your last
                        stay at the Mayor's House. All of your input will be read
                        and greatly appreciated.</p>
                        <form>
                            <label>Name</label><input type="text" name="name" >
                            <label>Email</label><input type="email" name="email" >
                            <label>Phone</label><input type="text" name="phone" >
                            <label>Address</label><input type="text" name="address" >
                            <label>How did you find our site?</label><input type="text" name="find" >
                            <label>Comments, questions, suggestions etc.</label><br>
                            <textarea type="text" name="message" ></textarea>
                        </form>
                        <button id="form-button">Submit</button>
                    </div>
                    
                
                </div>
                
                

                

                
            </div>


		</div>
        <footer>
           
           <?php 
            include 'php/footer.php'
        ?>
            

        </footer>



	</body>

</html>