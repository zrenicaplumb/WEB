function roundUpToNearestInteger(x){
	return Math.ceil(x);
}
function roundDownToNearestInteger(x){
	return Math.floor(x);
}
function returnNumberToPower(number, power){
	return Math.pow(number, power);
}

function calculateSideC(sideA, sideB, angleC){
	var sideA = sideA;
	var sideB = sideB;
	

	var angleC = angleC * (Math.PI/180);
	 

	var sideC = Math.pow(sideA,2) + Math.pow(sideB,2) - 2 * sideA * sideB * Math.cos(angleC);
	return Math.round(Math.sqrt(sideC));



 	

}

function isLeapYear(year){

	return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function numberOfFridaythe13thsIn(year) {
    var count = 0;
    for (var month = 0; month < 12; month++) {
        var d = new Date(year, month, 13);
        if(d.getDay() == 5){
          count++;
       }
    }
    return count;                            
}

console.log(numberOfFridaythe13thsIn(2015));

function dayOfWeekOnDate(date){
	var UNIX_time = UNIX_time;
}

function dayOfWeekOnDate(n){
	var d = new Date(n);
	var day = d.getDay();
	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	return weekday[day];
}


function yearOnDate(n){
	var d = new Date(n);
	 var time = d.getFullYear();
	 return time;
}

function unixToUTC(n){
	var d = new Date(n);
	var time = d.toUTCString();
	return time;
}




