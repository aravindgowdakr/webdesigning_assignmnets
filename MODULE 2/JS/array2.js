// Declaring an array
let fruits = ['apple', 'banana', 'orange', 'mango'];

// Accessing elements in an array
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[2]); // Output: 'orange'

// Modifying elements in an array
fruits[1] = 'grape';
console.log(fruits); // Output: ['apple', 'grape', 'orange', 'mango']

// Adding elements to the end of an array
fruits.push('strawberry');
console.log(fruits); // Output: ['apple', 'grape', 'orange', 'mango', 'strawberry']

// Removing elements from the end of an array
fruits.pop();
console.log(fruits); // Output: ['apple', 'grape', 'orange', 'mango']

// Adding elements to the beginning of an array
fruits.unshift('kiwi');
console.log(fruits); // Output: ['kiwi', 'apple', 'grape', 'orange', 'mango']

// Removing elements from the beginning of an array
fruits.shift();
console.log(fruits); // Output: ['apple', 'grape', 'orange', 'mango']

// Finding the index of an element in an array
let index = fruits.indexOf('orange');
console.log(index); // Output: 2

// Removing elements from a specific index in an array
fruits.splice(1, 2);
console.log(fruits); // Output: ['apple', 'mango']

// Iterating over an array
fruits.forEach(function(fruit) {
  console.log(fruit);
});