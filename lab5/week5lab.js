// I've given you one of the functions here.
var monthlyPayment = function(principal,rate,number_payments)
{ 
	rate = rate/12;
	var payment = principal * ( 
		rate	/ 
			(1 - (1/Math.pow((1+rate),number_payments))));
	return parseFloat(payment.toFixed(2));
};

// Here is one of the others as well
var averageOfNumbers = function(numbers)
{
	var total = 0;
	for(var i=0; i < numbers.length; i++){
		total += numbers[i];
	}
	return total/numbers.length;
};

// These functions are started, you just need to fill in the formula and return the answer
function celsiusToFahrenheit(temperatureCelsius)
{
	var temperatureFahrenheit = temperatureCelsius * 1.8 + 32;
	return temperatureFahrenheit;
}
// These functions are started, you just need to fill in the formula and return the answer
function fahrenheitToCelsius(temperatureFahrenheit)
{
	
	var temperatureCelsius = (temperatureFahrenheit -32)/ 1.8;
	return Math.ceil(temperatureCelsius) -1 ;
}

function simpleInterest(P,R,T){
	var answer = P * R * T;
	return answer * .01;
}

function circumferenceOfCircle(radius){
	var radius = radius;
  	var circle = 2 * 3.14 * radius;
  	return circle;

}
function areaOfCircle(radius){
	var area = 3.14 * Math.pow(radius,2);
	return area;
}
/**
You still need to write the following functions.
simpleInterest
areaOfCircle
circumferenceOfCircle
*/