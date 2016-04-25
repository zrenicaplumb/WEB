$(document).ready(function(){

	//stores function that calles animate for corss browser compatibility
	var animate = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);

    };
    //creates canvas element
	var canvas = document.createElement("canvas");
	//width
	var width = 1100;
	//height
	var height= 600;
	//setting canvas width to value stored in width
	canvas.width = width;

	canvas.height = height;
	//gets the object used for actual drawing and uses its methods and properties
	var context =canvas.getContext('2d');
	//creates new player object
	var player = new Player();
	//new computer player
	
	var computer = new Computer();
	//creates new ball, sets position
	var ball = new Ball(555, 300);
	//object for holding key presses
	var keysDown = {};
	

	
		
	
  

	var render = function () {
		//gives it color
	    context.fillStyle = "#F1F1F1";
	    //fills rectangle
	    context.fillRect(0, 0, width, height);
	    //calls this function on player, comp and ball 
	    player.render();
	    computer.render();
	    ball.render();


	};
	//updates player computer and ball
	var update = function () {
	     player.update();
	    computer.update(ball);
	    ball.update(player.paddle, computer.paddle);
	    
	};

	var step = function () {
	    update();
	    render();
	    animate(step);

	};
	//function that creates the paddle
	function Paddle(x, y, width, height) {
	    this.x = x; //x pos
	    this.y= y; // y pos
	     this.width = width; //width
	    this.height = height; // height
	    this.x_speed= 0;// x axis speed
	    this.y_speed = 0; // y axis speed

	}


	Paddle.prototype.render = function () {
		//gives it color
	    context.fillStyle ="#0000FF";
	    //calls fillrect function 
	    context.fillRect(this.x, this.y, this.width, this.height);

	};
	// paddle movement ,sets location/movement of paddle
	Paddle.prototype.move = function (x, y) {
		//adding inputted value to the paddles x
	   	 this.x += x;
	    this.y += y;
	    //setting the x speed to equal inputted x even as it starts from value of zero
	    	this.x_speed =x;
	    this.y_speed = y;


	    if(this.x < 0) {
	         this.x = 0;
	        this.x_speed = 0;

	    }//Adjusts the width the paddle can move
	    else if(this.x + this.width > 1100) {
	        this.x = 1100 - this.width;
	        this.x_speed = 0;
	    }
	};






	//creates new computer paddle
	function Computer() {
	    this.paddle = new Paddle(535, 10, 80, 20);
	}
	//function to render paddle/ calls render function
	Computer.prototype.render = function () {
	    	this.paddle.render();
	};

	Computer.prototype.update = function (ball) {
		//passes in ball object and sets its horizontal pos
	    var x_pos = ball.x;
	    // here i make it more difficult for the human player by giving the computer paddle 
	    //more possible speed than is given to human player paddle
	    var diff = -((this.paddle.x + (this.paddle.width / 2)) - x_pos);
	    if(diff < 0 && diff < -16) {
	        diff = -16;
	    } else if(diff > 0 && diff > 16) {
	        diff =16;
	    }
	     this.paddle.move(diff, 0);
	    if(this.paddle.x < 0) {
	        this.paddle.x = 0;
	    } else if(this.paddle.x + this.paddle.width > 1100) {
	        this.paddle.x = 1100 - this.paddle.width;
	    }
	};







	//creates new player paddle
	function Player() {
	    this.paddle = new Paddle(535, 570, 80, 20);

	}
	//function for calling render on paddle
	Player.prototype.render = function () {
	      this.paddle.render();
	};
	//function for updating player position based on arrow keys being pressed or not
	Player.prototype.update = function () {
		
	    for(var key in keysDown) {
	        var value = Number(key);
	        //checks for left arrow key
	        if(value == 37) {
	        	//moves paddle with move function to the left, sets left movement speed
	            this.paddle.move(-13, 0);
	        }	// checks for right arrow key
	         else if (value == 39) {
	         	//calls move function on paddle and sets right-side movement speed
	            this.paddle.move(13, 0);

	        }// if none of these, dont move 
	        else {
	            this.paddle.move(0, 0);
	        }
	    }
	};







	//gives the ball x and y values 
	function Ball(x, y) {
	    this.x = x;
	    this.y = y;
	     this.x_speed = 0;
	      this.y_speed = 3;
	}
	//creates new function for prototype object rendering the ball
	Ball.prototype.render = function () {
		//creates the path for the ball
	    context.beginPath();
	    //creates a circle , x coord, y coord, radius, clockwise drawing direction
	     context.arc(this.x, this.y, 5, 2 * Math.PI, false);
	    //colors ball
	    context.fillStyle = "#000000";
	    //fills ball
	    context.fill();
	};
	//checks for ball positioning and will adjust accordingly as ball is found in different 
	//locations throughout the game, passes in paddle 1 and 2 so you can check their positions
	//and make changes accordingly
	Ball.prototype.update = function (paddle1, paddle2) {
		
	    this.x += this.x_speed;
	    this.y += this.y_speed;
	    
	    //sets the ball top and bottom and left and right variables because ball radius is 5, so you
	    //must add 5 to get to the edge of the ball
	    var top_x = this.x - 5;
	   
	    var top_y = this.y - 5;
	    var bottom_x = this.x + 5;
	    var bottom_y = this.y + 5;

	     if(this.x - 5 < 0) {

	         this.x = 5;
	        this.x_speed = -this.x_speed;
	    } else if(this.x + 5 > 1100) {
	        this.x = 1100;

	         this.x_speed = -this.x_speed;
	    }
	    //checks if ball has passed out of bounds, if it has it removes horizontal speed
	    //and adds the default beginning vertical speed
	    if(this.y < 0 || this.y > 600) {
	    	
	    		
	    	
	        this.x_speed = 0;
	        this.y_speed = 3;
	        this.x = 550;
	        this.y = 300;
	    }

	    
	    if(top_y > 300) {
	    	//checks for whether top of ball aor bottom of ball is beyond boudaries of map
	        if (top_y < (paddle1.y + paddle1.height) && bottom_y > paddle1.y && top_x < (paddle1.x + paddle1.width) && bottom_x > paddle1.x) {
	              this.y_speed = -3;
	            this.x_speed += (paddle1.x_speed / 2);
	            this.y += this.y_speed;

	        }
	    } else {
	        if(top_y < (paddle2.y + paddle2.height) && bottom_y > paddle2.y && top_x < (paddle2.x + paddle2.width) && bottom_x > paddle2.x) {
	            
	            this.y_speed = 3;

	             this.x_speed += (paddle2.x_speed / 2);
	            this.y += this.y_speed;
	            
	        }
	    }
	};

	


	
	//appends canvas element to the body
	document.body.appendChild(canvas);
	//calls animate function and passes step variable 
	animate(step);
	//adds event listener which listens for key being pressed
	window.addEventListener("keydown", function (event) {
	    keysDown[event.keyCode] = true;
	});
	//if keys are not being pressed, deletes the changes made to the paddle object so its stop moving
	window.addEventListener("keyup", function (event) {
	    delete keysDown[event.keyCode];
	});

	



});