

function arrayWithNumbersUpTo(n){
	var array = [];
	for(var i = 0; i <= n; i++){
		array.push(i);

	}
	return array;

};



function countMatchingElements(array, value){
	var total = 0;
	for(var i = 0; i < array.length; i++){
		if(array[i] == value){
			total += 1;
		}
	}

	return total;
}; 

function sumOfEvenElements(array){
	var sum = 0;
	for(var i = 0; i < array.length; i++){
		if(array[i] % 2 == 0){
			sum += array[i];
		}
	}
	return sum;
};



function alertPopulationGrowth(currentPopulation, percentageGrowth, exceedAmount){
	var puffins = {
		currentPopulation: currentPopulation,
		percentageGrowth: percentageGrowth,
		populationAtExcess: exceedAmount,
		extraAmount: 0,
		yearsToAlert: 0
		
		}
	while(puffins.currentPopulation < puffins.populationAtExcess){
		
		puffins.extraAmount = puffins.currentPopulation * puffins.percentageGrowth;
		puffins.currentPopulation += puffins.extraAmount;
		puffins.extraAmount = 0;
		puffins.yearsToAlert += 1;


		
		if(puffins.currentPopulation >= puffins.populationAtExcess){
			puffins.populationAtExcess = Math.round(puffins.currentPopulation);
			return puffins;
		}

	}
	
	
	
		
	
}

	


function calculateAverageOf(array){
	var total = 0;
	for(var i = 0; i < array.length; i++){
		total += array[i];

	}
	return Math.round(total/array.length);
};













