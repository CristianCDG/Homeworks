// Research and use all array functions

//Array definitions

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Array.map()
// Returns a new array with the results of calling a provided function on every element in this array.

console.log('-------------------------')
console.log('Array.map');
let mappedList = list.map(x => x + 3);
console.log(mappedList);
console.log('-------------------------')

// Array.filter()
// Returns a new array with all elements that pass the test implemented by the provided function.

console.log('-------------------------')
console.log('Array.filter');
let filteredList = list.filter(x => x % 2 === 0);
console.log(filteredList);
console.log('-------------------------')

// Array.reduce()
// Reduce the array to a single value. The value returned by the function is stored in an accumulator (result/total).

console.log('-------------------------')
console.log('Array.reduce');
let reducedList = list.reduce((total, item) => total + item, 0);
console.log(reducedList);
console.log('-------------------------')

// Array.reduceRight()
//Executes a reducer function (that you provide) on each element of the array resulting in a single output value(from right to left).

console.log('-------------------------')
console.log('Array.reduceRight');
let reduceRightList = list.reduceRight((total, item) => total + item, 0);
console.log(reduceRightList);
console.log('-------------------------')

// Array.fill()
// Fill the elements in an array with a static value.

console.log('-------------------------')
console.log('Array.fill');
let filledList = list.fill(10);
console.log(filledList);
console.log('-------------------------')

// Array.find()
// Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

console.log('-------------------------')
console.log('Array.find');
let findResult = list.find(x => x === 10);
console.log(findResult);
console.log('-------------------------')

// Array.indexOf()
// Returns the first index at which a given element can be found in the array, or -1 if it is not present.

console.log('-------------------------')
console.log('Array.indexOf');
let indexOfResult = list.indexOf(10);
console.log(indexOfResult);
console.log('-------------------------') //Revisar

// Array.lastIndexOf()
//Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

console.log('-------------------------')
console.log('Array.lastIndexOf');
let lastIndexOfResult = list.lastIndexOf(10);
console.log(lastIndexOfResult);
console.log('-------------------------') //Revisar


// Array.findIndex()
// Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.

console.log('-------------------------')
console.log('Array.findIndex');
let findIndexResult = list.findIndex(x => x === 10);
console.log(findIndexResult);
console.log('-------------------------')

// Array.includes()
//Returns true if the given element is present in the array.

console.log('-------------------------')
console.log('Array.includes');
let includesResult = list.includes(10);
console.log(includesResult);
console.log('-------------------------')


// Array.pop()
// Removes the last element from an array and returns that element.

console.log('-------------------------')
console.log('Array.pop');
let popResult = list.pop();
console.log(popResult);
console.log('-------------------------')

// Array.push()
// Appends new elements to the end of an array, and returns the new length.

console.log('-------------------------')
console.log('Array.push');
let pushedList = list.push(50);
console.log(pushedList);
console.log('-------------------------')

// Array.shift()
// Removes the first element from an array and returns that element.

console.log('-------------------------')
console.log('Array.shift');
let shiftResult = list.shift();
console.log(shiftResult);
console.log('-------------------------')

// Array.unshift()
// Adds new elements to the beginning of an array, and returns the new length.

console.log('-------------------------')
console.log('Array.unshift');
let unshiftResult = list.unshift(10);
console.log(unshiftResult);
console.log('-------------------------')

// Array.sort()

console.log('-------------------------')
console.log('Array.sort');
let sortedList = list.sort();
console.log(sortedList);
console.log('-------------------------')