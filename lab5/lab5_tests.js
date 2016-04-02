/**
 * Remember, you should not modify this file. I have written tests here that you need
 * to satisfy by completing week5lab.js
 */
QUnit.test( "calculate the monthly loan payment", function(assert){
	/**
	write a function to calculate the monthly payment on a loan if you know the principal
	and the interest rate.
	**/
	var principal = 200000;
	var rate = .05;
	var number_of_payments = 360;

	assert.equal( monthlyPayment(principal, rate, number_of_payments), 1073.64);
	
	
});
QUnit.test( "calculate the average of a list of 10 numbers", function(assert){
	assert.deepEqual( averageOfNumbers([1,2,3]), 2);
	assert.deepEqual( averageOfNumbers([10,20,30,40,50,60,70,80,90,100]), 55);
	assert.deepEqual( averageOfNumbers([10,20,30]), 20);
});
QUnit.test( "convert Celsius to Fahrenheit", function (assert){
	// write a function called celsiusToFahrenheit. This function should take a single argument
	// and convert it into the fahrenheit temperature
	assert.deepEqual( celsiusToFahrenheit(20), 68);
    assert.deepEqual( celsiusToFahrenheit(10), 50);
    assert.deepEqual( celsiusToFahrenheit(-40), -40);
});

QUnit.test( "convert Fahrenheit to Celsius", function(assert){
	// write a function called fahrenheitToCelsius. This function should take a single argument
	// and convert it into the celsius temperature
	assert.deepEqual( fahrenheitToCelsius(20), -7);
    assert.deepEqual( fahrenheitToCelsius(10), -13);
    assert.deepEqual( fahrenheitToCelsius(-40),-40);
});

QUnit.test( "calculate simple interest", function(assert){
	// Write a function called simpleInterest to calculate simple interest.
	// This function will take 3 arguments
	//  - the principal amount
	//  - the annual interest rate
	//  - the time period in years
	// The Formula for simple interest calculation is I = Prt
	// where 
	//  - P = Principal Amount
	//  - r = Rate of interest per year in decimal form
	//  - t = time periods involved in years
	assert.deepEqual( simpleInterest(10000,3.875,5), 1937.50);
	assert.deepEqual( simpleInterest(5000,3.875,5), 968.75);
	assert.deepEqual( simpleInterest(5000,3.875,5), 968.75);
	assert.deepEqual( simpleInterest(220000,3.875,5), 42625.00);

});	


QUnit.test( "calculate the circumference of a circle, given the radius", function(assert){
	// Write a function called circumferenceOfCircle that will, when called with a single argument (the radius)
	// return the circumference of the circle with that diameter
    assert.deepEqual( circumferenceOfCircle(2), 12.56);
    assert.deepEqual( circumferenceOfCircle(12), 75.36);
    assert.deepEqual( circumferenceOfCircle(5.5), 34.54);
    assert.deepEqual( circumferenceOfCircle(7), 43.96);

});

QUnit.test( "calculate the area of a circle, given the radius", function(assert){
	// Write a function called areaOfCircle that will, when called with a single argument (the radius)
	// return the area of the circle with that diameter
	assert.deepEqual( areaOfCircle(2), 12.56);
    assert.deepEqual( areaOfCircle(10), 314);
    assert.deepEqual( areaOfCircle(5.5), 94.985);
    assert.deepEqual( areaOfCircle(7), 153.86);
});