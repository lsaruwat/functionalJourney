var orders = [
	{value : 100},
	{value : 250},
	{value : 250},
	{value : 400},
	{value : 1000},
	{value : 200},
	{value : 300}
];

var verboseTotal = orders.reduce(function(sum, order){
	return sum + order.value;
}, 0);

var addItUp = (sum, order) => sum + order.value;

var total = orders.reduce(addItUp,0);

console.log(verboseTotal);
console.log(total);