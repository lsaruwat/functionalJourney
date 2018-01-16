var animals = [
	{name : "Fred", species : "human"},
	{name : "Garrett", species : "rabbit"},
	{name : "Harris", species : "dog"},
	{name : "Ivan", species : "cat"},
	{name : "Jake", species : "dog"},
	{name : "Kelly", species : "dog"},
	{name : "Logan", species : "dragon"},
];

var names = animals.map(function(animal){
	return animal.name;
});

var classList = animals.map(function(student){
	return {name : student.name, grade : 'A'}
});

var arrowNames = animals.map( (animal) => animal.name );

console.log(names);
console.log(classList);
console.log(arrowNames);