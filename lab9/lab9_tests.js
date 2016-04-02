/** * Remember, you should not modify this file. I have written tests here that you need
 * to satisfy by completing week9lab.js
 */

/**
 * calculateSideC(sidea,sideb,angleC) // AngleC is in degrees, you will need to convert it
 * to radians
 * returnHighestOfNumbers
 * returnLowestOfNumbers
 * roundUpToNearestInteger
 * roundDownToNearestInteger  
 * returnNumberToPower
 * 
 */
QUnit.test( "math functions", function(assert){

  assert.equal( roundUpToNearestInteger(.1), 1);
  assert.equal( roundUpToNearestInteger(5.9), 6);
  assert.equal( roundUpToNearestInteger(8.5), 9);

  assert.equal( roundDownToNearestInteger(.1), 0);
  assert.equal( roundDownToNearestInteger(5.9), 5);
  assert.equal( roundDownToNearestInteger(8.5), 8);

  assert.equal( returnNumberToPower(5,2), 25);
  assert.equal( returnNumberToPower(10,3), 1000);
  assert.equal( returnNumberToPower(9,9), 387420489);
});

QUnit.test( "Calculate side of oblique triangle", function(assert){

  assert.equal( calculateSideC(1,90,35), 89);
  assert.equal( calculateSideC(9,12,45), 9);
  assert.equal( calculateSideC(3,4,90), 5); 
  assert.equal( calculateSideC(6,8,90), 10); 
});

/**
 * dayOfWeekOnDate('10/19/2015')
 * yearOnDate
 * 
 * isLeapYear(year)
 * unixToUTC(timestamp)
 * numberOfFridaythe13thsIn(year) // Hint, jump by 7
 *
 */
QUnit.test( "Is a year leap year?", function(assert){
  assert.ok(  isLeapYear(1804));
  assert.ok(  isLeapYear(1944));
  assert.ok(  isLeapYear(2000));
  assert.ok(  isLeapYear(2088));

  assert.notOk( isLeapYear(1805));
  assert.notOk( isLeapYear(2089));

});
QUnit.test( "day of week information about a date in time", function(assert){
  assert.equal( dayOfWeekOnDate('10/19/2015'), 'Monday');
  assert.equal( dayOfWeekOnDate('10/18/2015'), 'Sunday');
  assert.equal( dayOfWeekOnDate('9/11/2001'), 'Tuesday');
});

QUnit.test ('year info on date in time', function(assert){

  assert.equal( yearOnDate(1000188000000), 2001);
  assert.equal( yearOnDate(0000088000000), 1970);
  assert.equal( yearOnDate(0090188000000), 1972);

  assert.equal( yearOnDate(-15076346400000), 1492);

});

QUnit.test( "Convert Unix time to UTC TimeStamp", function(assert){

  assert.equal( unixToUTC(1445315856137), 'Tue, 20 Oct 2015 04:37:36 GMT'); 

  assert.equal( unixToUTC(1015315856137), 'Tue, 05 Mar 2002 08:10:56 GMT'); 
});

QUnit.test( "Number of Friday the 13ths in a given year", function(assert){
  /**
   * For this one, you need to write a function alled numberOfFridaythe13thsIn that takes
   * a particular year. You need to return the number of Friday the 13ths in that year.
   * You will need to use a loop of some kind.
   */

  assert.equal( numberOfFridaythe13thsIn(2015), 3);
  assert.equal( numberOfFridaythe13thsIn(1977), 1);
  assert.equal( numberOfFridaythe13thsIn(1944), 1);
});