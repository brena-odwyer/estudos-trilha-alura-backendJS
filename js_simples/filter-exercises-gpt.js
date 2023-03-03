// Given an array of numbers, write a function to return a new array with all negative numbers removed.

const numbers = [-1, 2, -3, 4, -5, 6];

function removeNegatives(numbers) {
    return numbers.filter(number => number > 0)
}

console.log(removeNegatives(numbers)); // Output: [2, 4, 6]


// Given an array of objects, write a function to return a new array with all objects that have the property "isActive" set to true.
const users = [
    { id: 1, name: 'John', isActive: true },
    { id: 2, name: 'Jane', isActive: false },
    { id: 3, name: 'Jim', isActive: true },
    { id: 4, name: 'Joan', isActive: false },
  ];
  
  function getActiveUsers(users) {
    return users.filter(user => user.isActive == true)
  }
  
  console.log(getActiveUsers(users)); 
  /* Output: 
  [
    { id: 1, name: 'John', isActive: true },
    { id: 3, name: 'Jim', isActive: true }
  ]
  */

  // outra forma de fazer:
  //const getActiveUsers = users.filter(user => user.isActive);
  
  //console.log(getActiveUsers);

// In this version, the filter method is called directly on the users array, and the result is assigned to a constant getActiveUsers. 
//The callback function for the filter method is also simplified, as the value of user.isActive is already a boolean, so there's no need to compare it to true.
  
  //Given an array of strings, write a function to return a new array with all strings that have a length greater than 5 characters.
  const words = ['hello', 'world', 'javascript', 'filter', 'exercise'];

function getLongWords(words) {
  return words.filter(word => word.length > 5)
}

console.log(getLongWords(words)); // Output: ['javascript', 'exercise']
