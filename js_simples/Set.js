// desafio: tirar os nomes repetidos

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

                        //os elementos de um Set não podem se repetir
let nomesSemRepeticao = new Set(nomes)

console.log(nomesSemRepeticao) // Aparece Ana, Clara, Maria, João como objeto -> removendo os nomes repetidos

                        //Uso o spread pra pegar o nomesSemRepeticão pra transformar em uma array
const nomesAtualizados = [...nomesSemRepeticao]

console.log(nomesAtualizados) // Aparece os nomes, mas como array e não objeto


function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}

const usandoOFilter = removeDuplicates(nomes)
console.log(usandoOFilter)


// This code demonstrates how to remove duplicates from an array using JavaScript. 
// The removeDuplicates function takes an array 'arr' as its argument and returns a new array with duplicates removed. 
// The function uses the Array.filter() method to accomplish this. The Array.filter() method takes a callback function 
// as its argument and returns a new array that includes only the elements for which the callback function returns a truthy value. 
// In this case, the callback function checks each element in the array to see if it is a duplicate or not. 
// If the first index of an element in the array is equal to the current index of the loop, it means that the element is not a duplicate. 
// The expression 'arr.indexOf(item) === index' returns a truthy value if 'item' is not a duplicate, and a falsy value otherwise. 
// Finally, the removeDuplicates function returns the new array with duplicates removed.


// Exemplo:

// const arr = [1, 2, 2, 3, 4, 4, 5];

// arr.filter((item, index) => {
//   console.log(`item: ${item}, index: ${index}, arr.indexOf(item): ${arr.indexOf(item)}`);
//   return arr.indexOf(item) === index;
// });

//output:
// item: 1, index: 0, arr.indexOf(item): 0
// item: 2, index: 1, arr.indexOf(item): 1
// item: 2, index: 2, arr.indexOf(item): 1
// item: 3, index: 3, arr.indexOf(item): 3
// item: 4, index: 4, arr.indexOf(item): 4
// item: 4, index: 5, arr.indexOf(item): 4
// item: 5, index: 6, arr.indexOf(item): 6

// As you can see from the output, the filter method only keeps the elements for which arr.indexOf(item) === index is truthy, i.e. the elements that are not duplicates.