// Write a function that takes an array of numbers as an argument and returns a new array containing only the even numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
}

console.log(getEvenNumbers(numbers)); // Output: [2, 4, 6, 8, 10]


// Write a function that takes an array of objects as an argument and returns a new array containing only the objects with a property 'isActive' set to true.

const users = [
    { id: 1, name: 'John', isActive: true },
    { id: 2, name: 'Jane', isActive: false },
    { id: 3, name: 'Jim', isActive: true },
    { id: 4, name: 'Joan', isActive: false },
  ];
  
  function getActiveUsers(users) {
    return users.filter(user => user.isActive === true);
  }
  
  console.log(getActiveUsers(users)); 
  /* Output: 
  [
    { id: 1, name: 'John', isActive: true },
    { id: 3, name: 'Jim', isActive: true }
  ]
  */

  // Write a function that takes an array of strings as an argument and returns a new array containing only the strings with a length greater than 5 characters.

  const words = ['hello', 'world', 'javascript', 'filter', 'exercise'];

function getLongWords(words) {
  return words.filter(word => word.length > 5);
}

console.log(getLongWords(words)); // Output: ['javascript', 'exercise']