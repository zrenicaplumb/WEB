/** * Remember, you should not modify this file. I have written tests here that you need
 * to satisfy by completing week8lab.js
 */
QUnit.test( "using for loops to populate an array", function(assert){
	/**
    Write a function called arrayWithNumbersUpTo that will return an array with all
    positive numbers from 0 to n (inclusive, meaning n should be included in the array)

    n will be a number passed in to the function as an argument
	**/

	assert.deepEqual( arrayWithNumbersUpTo(5), [0,1,2,3,4,5] );
	assert.deepEqual( arrayWithNumbersUpTo(10), [0,1,2,3,4,5,6,7,8,9,10] );
	
});

QUnit.test( "count elements that match a value", function(assert){
  /**
   * you will need to write a function called countMatchingElements that will take two
   * arguments. First, an array to search and second the value to search for. The function
   * should return a number corresponding to the number of matching elements found in the array. 
   *
   * */

  var arrayToSearch = ['apple','orange','pear','orange','orange','pear'];
  assert.equal( countMatchingElements(arrayToSearch,"apple"), 1);
  assert.equal( countMatchingElements(arrayToSearch,"orange"), 3);
  assert.equal( countMatchingElements(arrayToSearch,"pear"), 2);
  

});

QUnit.test ("add up all of the even numbers", function(assert){
  /**
   * Write a function called sumOfEvenElements that takes an array and returns the sum of 
   * all of the even numbers
   *
   **/

  var arrayWithNumbers = arrayWithNumbersUpTo(20); // Notice I am reusing your arrayWithNumbersUpTo function?
  assert.equal( sumOfEvenElements(arrayWithNumbers), 110);

  arrayWithNumbers = arrayWithNumbersUpTo(22); 
  assert.equal( sumOfEvenElements(arrayWithNumbers), 132);

  arrayWithNumbers = arrayWithNumbersUpTo(100); 
  assert.equal( sumOfEvenElements(arrayWithNumbers), 2550);

  
});

QUnit.test ("puffin population growth", function(assert){
  /**
   * Situation: A colony of 800 Puffins is increasing at the rate of 4% annually. When will
   * their population first exceed 1200?
   *
   * You will need to write a function called alertPopulationGrowth that takes 3 arguments.
   *  - current population
   *  - percentage growth
   *  - exceed amount
   *
   * This function should return a single object with two properties. The first property
   * should be called 'yearsToAlert'. This property represents the numbers of years after
   * which this population will have exceeded the amount given. 
   *
   * The second argument, called populationAtExcess, is the excess amount. You function will need to cycle (loop)
   * through the years to find where the population exceeds this amount.
   *
   * NOTE: Round all answers to the nearest whole number. To do this, use Math.round.
   *
   */



  var calculation = alertPopulationGrowth(800, .04, 1200);

  assert.equal(calculation.yearsToAlert, 11);
  assert.equal(calculation.populationAtExcess, 1232);

  calculation = alertPopulationGrowth(1, .08, 1200);

  assert.equal(calculation.yearsToAlert, 93);
  assert.equal(calculation.populationAtExcess, 1284);

  calculation = alertPopulationGrowth(1, .10, 1200);

  assert.equal(calculation.yearsToAlert, 75);
  assert.equal(calculation.populationAtExcess, 1272);

});

QUnit.test ("Calculate average of given numbers", function(assert){
  /*
   * write a method called calculateAverageOf that will take an array of numbers
   * and return the average.
   *
   * NOTE: round to the nearest whole number
   * */
  assert.equal(calculateAverageOf([1,5,10]), 5);
  assert.equal(calculateAverageOf([10,50,55,74,35]), 45);
  assert.equal(calculateAverageOf([934,500,34,0,5,4,3]), 211);
});
