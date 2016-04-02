/**
 * Remember, you should not modify this file. I have written tests here that you need
 * to satisfy by completing week6lab.js
 */
QUnit.test( "calculate the highest of two numbers", function(assert){
	/**
	write a function called highestOfTwoNumbers to calculate which of two given numbers are the biggest. If the two
	numbers are equal, return false.
	**/

	assert.equal( highestOfTwoNumbers(5,4), 5);
	assert.equal( highestOfTwoNumbers(9,7), 9);
	assert.equal( highestOfTwoNumbers(55,55), false);
	
});

QUnit.test( "return whether a number is even", function(assert){
	/** Write a function that will return true or false, depending on whether a given number is even.
	If a non-number is given, return false.
	**/
	assert.equal( isEven(5), false);
	assert.equal( isEven(8), true);
	assert.equal( isEven("seven"), false);
});

QUnit.test( "return whether a number is odd", function(assert){
	/** Write a function that will return true or false, depending on whether a given number is odd.
	If a non-number is given, return false. Hint: You can probably re-use the isEven function.
	**/
	assert.equal( isOdd(5), true);
	assert.equal( isOdd(8), false);
	assert.equal( isOdd("seven"), false);
});

QUnit.test( "return whether a number is prime", function(assert){
	// Write a function that will test whether a number is prime. 
	// It will return true or false. If a non-number value is given, it should return false
	assert.equal( isPrime(5), true);
	assert.equal( isPrime(11), true);
	assert.equal( isPrime("seven"), false);
	assert.equal( isPrime(1489), true);
	assert.equal( isPrime(10), false);
})

QUnit.test( "return even or odd", function(assert){
	// write a function taht will return a string "even" or "odd" depending whether a number is even or odd
	// if a non-number value is given, it should return ""

	assert.equal( evenOrOddString(10), "even");
	assert.equal( evenOrOddString(11), "odd");
	assert.equal( evenOrOddString("Banana"), "");
});

QUnit.test( "return tr element with class set to even or odd", function(assert){
	// write a function that will return a tr (HTML) element with the class set to even or odd
	// depending on the number given. If a non-number result is given, return the tr element with the class 
	// set to ""
	assert.equal( trElementWithClass(10), "<tr class='even'>");
	assert.equal( trElementWithClass(11), "<tr class='odd'>");
	assert.equal( trElementWithClass("Banana"), "<tr class=''>");
});

QUnit.test( "return tr element with class set to even or odd", function(assert){
	// write a function that will return an arbitrary (HTML) element with the class set to even or odd
	// depending on the number given. If a non-number result is given, return the tr element with the class 
	// set to ""
	assert.equal( arbitraryHTMLElementWithClass("table",10), "<table class='even'>");
	assert.equal( arbitraryHTMLElementWithClass("a",11), "<a class='odd'>");
	assert.equal( arbitraryHTMLElementWithClass("body","Banana"), "<body class=''>");
});

