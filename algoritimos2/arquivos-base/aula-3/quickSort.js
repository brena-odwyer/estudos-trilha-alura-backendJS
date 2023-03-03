const listaLivros = require("./array")
const trocarLugar = require("./encontrarMenor")

//          recebe o array, a parte a esquerda do pivo, e a parte a direita do pivo
function quickSort(array, esquerda, direita){

    if(array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
        if (esquerda < indiceAtual - 1) {
            quickSort(array, esquerda, indiceAtual - 1)
        }
        if(indiceAtual < direita) {
            quickSort(array, indiceAtual, direita)
        }
    }

    return array

}

function particiona(array, esquerda, direita) {
    console.log("array", array)
    console.log("esquerda e direita", esquerda, direita)
    // definindo o pivo no meio da array
    let pivo = array[Math.floor((esquerda + direita)/2)]
    let atualEsquerda = esquerda
    let atualDireita = direita

    while(atualEsquerda <= atualDireita) {
        while(array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++
        }
        while(array[atualDireita]. preco > pivo.preco) {
            atualDireita--

        }

        if(atualEsquerda <= atualDireita) {
            trocarLugar(array, atualEsquerda, atualDireita)
            atualEsquerda++;
            atualDireita--;
        }
    } 
    return atualEsquerda;
}

// passamos na função a array de livros, começando no elemento com idenx 0 e terminando no último elemento (isto é, o tamanho da lista -1 já que o primeiro elemento tem o índice 0)
console.log(quickSort(listaLivros, 0, listaLivros.length - 1))