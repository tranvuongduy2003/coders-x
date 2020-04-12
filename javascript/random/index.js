//random-float
const randomFloat = require('random-float');

console.log(randomFloat(5));
//=> 4.401887938147411

console.log(randomFloat(10, 100));
//=> 72.34217455144972

//random-int
const randomInt = require('random-int');

console.log(randomInt(5));
//=> 3

console.log(randomInt(10, 100));
//=> 54

//unique-random
const uniqueRandom = require('unique-random');

const random = uniqueRandom(1, 10);

console.log(random(), random(), random());