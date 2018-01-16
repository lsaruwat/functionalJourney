var animals = [
	{name : "Fred", species : "human"},
	{name : "Garrett", species : "rabbit"},
	{name : "Harris", species : "dog"},
	{name : "Ivan", species : "cat"},
	{name : "Jake", species : "dog"},
	{name : "Kelly", species : "dog"},
	{name : "Logan", species : "dragon"},
];

function isDog(animal){
	return animal.species === 'dog';
}

function containsA(animal){
	return animal.name.indexOf('a') > -1;
}

var dogs = animals.filter(isDog);
var aNames = animals.filter(containsA);

console.log(animals);
console.log(dogs);
console.log(aNames);