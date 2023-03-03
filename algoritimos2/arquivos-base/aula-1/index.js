// este algortimo só funciona se as listas originais já estiverem ordenadas 
const { edFolha, edGalho} = require("./arrays")

function unirListas(lista1, lista2) {
    let listaFinal = [];
    // duas variáveis para comparar as posições dos arrays
    let posicaoAtualLista1 = 0
    let posicaoAtualLista2 = 0
    let atual = 0

    // enquanto a posicao Atual 1 (o item analisado) for menor que o tamanho da lista 1 && mesma coisa lista 2, ou seja, para chegar até o final das listas
    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 <lista2.length){
        // criamos as variáveis para acessar o valor do item, utilizado os [], vendo o valor de cada item conforme for fazendo o laço de repetição
        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let produtoAtualLista2 = lista2[posicaoAtualLista2];

        // se o produto da lista 1 tiver o valor menor que o da lista 2, ele vai ser passado para a array vazia listaFinal na posição atual
        if(produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal[atual] = produtoAtualLista1
            //pra ir percorrendo a lista:
            posicaoAtualLista1++;
            // se a condição não for atingida, isto é, se o preco do produto da lista 2 for maior então
        } else {
            // a lista final vai ter como produto atual o produto da lista 2
            listaFinal[atual] = produtoAtualLista2
            // e depois, vai pro proximo elemento percorrendo a lista:
            posicaoAtualLista2++
        }
        // fora do else porque precisa sempre ir pro proximo elemento 
        atual++
    }
    while (posicaoAtualLista1 < lista1.length) {
        listaFinal[atual] = lista1[posicaoAtualLista1];
        posicaoAtualLista1++;
        atual++
    }
    while (posicaoAtualLista2 < lista2.length) {
        listaFinal[atual] = lista2[posicaoAtualLista2];
        posicaoAtualLista2++;
        atual++
    }

    return listaFinal
}

console.log(unirListas(edGalho, edFolha))