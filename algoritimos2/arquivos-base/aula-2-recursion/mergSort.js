// Merge sort
const listaLivros = require("./array")


// uma função que recebe um array
function mergeSort(arr) {
    // se o tamanho do array for > 1
    if(arr.length > 1) {
        // divide a array em dois
        // para dividir em 2, criamos a const meio que usa o método Math para caso seja numero impar e colocar o tamanho (length) da array dividido por 2
        const meio = Math.floor(arr.length/2)
        // fatiamos a array em 2
        // a part1 começa no primeiro item e vai até a const meio
        //chamamos o mergeSort para que o código execute várias vezes e não pare na primeira lista criada a partir da lista
        const part1 = mergeSort(arr.slice(0, meio))
        // a part2 começa no meio e vai até o final da array
        const part2 = mergeSort(arr.slice(meio, arr.length))

        //depois de tudo precisamos ordenar a função array e pra isso criamos a função (mesma que usamos na aula1)
        arr = ordenar(part1, part2)
    }

    return arr;
}

// função ordenar está ordenando o array, ela precisa de dois argumentos, part1 e part 2
function ordenar(part1, part2) {
    // criamos duas lets, a posição atual de cada parte que começa em zero, em que índice está a cada momento
    let posicaoAtualPart1 = 0
    let posicaoAtualPart2 = 0
    // uma const que guarda o resultado ordenado das duas partes
    const resultado = []

    // enquanto a posição atual da parte 1 for menor que o tamanho da part1 e o mesmo para parte 2
    while (posicaoAtualPart1< part1.length && posicaoAtualPart2 < part2.length) {
        // criamos duas variáveis com o produto atual da parte 1 e 2, que vai ser a posicao atual em relação a parte
        let produtoAtualParte1 = part1[posicaoAtualPart1]
        let produtoAtualParte2 = part2[posicaoAtualPart2]

        // comparação: se o produto atual na parte 1 preço for menor que o da parte 2
        if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
            // pegue o resultado e push, coloque no final da array, esse produto da parte 1
            resultado.push(produtoAtualParte1)
            // atualizamos a posição com o ++ indo pra proxima posição
            posicaoAtualPart1++
            // se não, faça isso com a parte 2
        } else {
            resultado.push(produtoAtualParte2)
            posicaoAtualPart2++
        }
    }
    // retorne o resultado concatenando, para caso sobre algum elemento nos arrays
    return resultado.concat(
        // fazer a comparação com um ternário
        // se a posição atual da parte 1 for menor que o tamanho da parte 1, se for true -> ?, concatene o resultado com o que ficou sobrando
                                            //pega a parte1 fatia a partir da posição atual e coloca no final do resultado
        posicaoAtualPart1 < part1.length ? part1.slice(posicaoAtualPart1)
        // : (resultado falso do ternário) se for falso, faça com a parte 2
        : part2.slice(posicaoAtualPart2))
}

console.log(mergeSort(listaLivros))