// Algoritmo é uma sequência finita de ações que visam a solução de um problema

// chamando o array de objetos
const livros = require("./listaLivros")

// uma função para poder usar esse for em outras partes do código, encontrando o mais barato


    let maisBarato = 0

// atual corresponde ao item da array
for (let atual = 0; atual < livros.length; atual++) {
    // se a array Livros, na posição atual (que começa na posição 0, isto é, 25).preco for menor do que tinhamos anteriormente (o maisBarato que começa com 0).preco
    if (livros[atual].preco < livros[maisBarato].preco) {
        //faça maisBarato ficar = atual
        maisBarato = atual
    }
}



// o console só vai ser executado depois que o for percorrer a lista inteira então o mais barato vai mostrar 15
console.log(`O livro mais barato custa ${livros[maisBarato].preco}`)

