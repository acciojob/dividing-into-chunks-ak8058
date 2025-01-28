const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here

	
	const result=[];
	let currentcunk=[];
	let currentsum=0;
	for(let num of arr){
		if(currentsum+num>n){
			result.push(currentcunk);
			currentcunk=[];
			currentsum=0;
		}
		currentcunk.push(num);
		currentsum=currentsum+num;
	}
	if(currentcunk.length>0)
	{
		result.push(currentcunk);
	}
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));

