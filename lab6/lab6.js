// write a function called highestOfTwoNumbers to calculate which of two given numbers are the biggest. If the two
// numbers are equal, return false.

function highestOfTwoNumbers(x,y){
	if(x==y) {
		return false;
	}
	else{
		return Math.max(x,y);
	}
}
// Write a function that will return true or false, depending on whether a given number is even.
// If a non-number is given, return false.
function isEven(num){
	if(num == ''){
		return false;
	}
	else if(num % 2 == 0){
		return true;
	}
	else{
		return false;
	}
}

// Write a function that will return true or false, depending on whether a given number is odd.
// If a non-number is given, return false. Hint: You can probably re-use the isEven function.

function isOdd(num){
	if(num==''){
		return false;
	}
	else if( num % 2 ==1){
		return true;
	}
	else{
		return false;
	}
}
// Write a function that will test whether a number is prime. 
// It will return true or false. If a non-number value is given, it should return false

function isPrime(num){
	if(isNaN(num)){
		return false;
	}
	else if(num % 5==0 && num %2==0){
		return false;
	}
	else if(num % num == 0 && num % 1 ==0){
		return true;
	}
	
}

// write a function taht will return a string "even" or "odd" depending whether a number is even or odd
// if a non-number value is given, it should return ""

function evenOrOddString(num){
	if(num % 2 == 0){
		return "even";
	}
	else if(num % 2 == 1){
		return "odd";
	}
	else if(isNaN(num)){
		return "";
	}
}

// write a function that will return a tr (HTML) element with the class set to even or odd
// depending on the number given. If a non-number result is given, return the tr element with the class 
// set to ""
function trElementWithClass(tr){
	if(isNaN(tr)){
		return "<tr class=''>";
	}
	else if(tr % 2 == 0){
		return "<tr class='even'>";
	}
	else{
		return "<tr class='odd'>";
	}
}
// write a function that will return an arbitrary (HTML) element with the class set to even or odd
// depending on the number given. If a non-number result is given, return the tr element with the class 
// set to ""

function arbitraryHTMLElementWithClass(element, num){
	

	if(isNaN(num)){
		return "<" + element + " " + "class=''>";
	}
	else if(num % 2 == 0){
		return "<"+element+" "+"class='even'>";
	}
	else if(num % 2 == 1){
		return "<"+element+" "+"class='odd'>";
	}
	
}