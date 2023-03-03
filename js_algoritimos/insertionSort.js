// Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time by comparisons.
// Insertion sort iterates, consuming one input element each repetition, and grows a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.


// Insertion sort is a simple sorting algorithm that works by taking one element from an unsorted list at a time, and inserting it into its proper position in a sorted list.

// 1.We start with a list of unsorted elements.

// 2.We take the first element of the list and consider it as a sorted list.

// 3.We take the next element of the list and compare it to the first element. If it is smaller, we insert it before the first element. If it is larger, we insert it after the first element.

// 4.We continue this process for each subsequent element in the list, inserting each one into its proper position in the sorted list.

// 5.Once we have inserted all the elements into the sorted list, we have a fully sorted list.

const livros = require("./listaLivros")

        // função de insertion sort que recebe uma lista
function insertionSort(arr) {
    // queremos percorrer uma lista então usamos um for
            // sendo o i o item atual da lista enquanto percorre
    for (let i =0; i<arr.length; i++) {
        // variável pra visualizar o que está sendo visualizado em cada iteração
        let analise = i
        // a gente quer que enquanto o valor do item que estamos analisando seja menor - estamos ordenando do menor para maior - seja menor em valor do que o item que vem antes eles trocam de lugar
                    // o ponto preco é pra entrar na nossa lista de livros e olhar o valor, que pode ser comparado em termos de menor e maior
                                        // - 1 pq é o item anterior
        while (analise> 0 && arr[analise].preco < arr[analise - 1].preco) {
            // while essa condição for verdadeira, faça:

            let itemAnalise = arr[analise];
            let itemAnterior = arr[analise - 1];
    
  
            arr[analise] = itemAnterior
            arr[analise - 1] = itemAnalise

            // pra ele ir analisando e voltando, porque o while precisa de uma condição de fechada
            analise--

        }
    }

    console.log(arr)
}

insertionSort(livros)


// ----> Explicação passo a passo
    // o for começa com a let i que é o item atual da lista, ele começa com i sendo zero, vai rodar o tamanho da array e vai ir de item em item, incrementando de 1 em 1
// for (let i =0; i<arr.length; i++) {
        // criamos uma variável chamada analise e colocarmos nela o valor de i, que é o item atual na array
            // então cada vez que o for rodar dentro da array a i vai passar do item 1 para o 2, para o 3... e a variável analise também
//     let analise = i
        // nosso loop pelo while vai começar quando análise for maior que 0 && se a arr (lista) na posição análise, que começa em 0 for menor que a lista na posição -1, significando que não da pra comaparar o primeiro elemento porque não há nada a esquerda dele
            //aí volta pro começo do for, a let analise vai ser atualizada de 0 para 1 e a i também, e aí vai comparar o item na posição 1 da array com o que estiver na posição 0
//     while (analise> 0 && arr[analise].preco < arr[analise - 1].preco) {
       
            // dentro da variável intemAnalise vai salvar o item que está sendo analisado, quando começa o for é o item na posição 1
//         let itemAnalise = arr[analise];
            // salvando na variável o que está a esquerda do que está sendo analisado, quando começar o for é o item na posição 0
//         let itemAnterior = arr[analise - 1];

            // essas linhas é pra trocar de lugar e o que tiver o menor valor ficar a esquerda
//         arr[analise] = itemAnterior
//         arr[analise - 1] = itemAnalise

        
//         analise--

//     }
// }