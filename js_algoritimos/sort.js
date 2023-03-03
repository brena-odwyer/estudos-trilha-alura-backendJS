const livros = require("./listaLivros")


function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;
    
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
      if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
        maisBarato = atual
      }
    }
    return maisBarato;
  }

            
for (let atual = 0; atual < livros.length - 1; atual++) {
                // chamando a função acima, que é uma versão genérica do que está no arquivo algoritmo.js, algo que funciona em qualquer array
    let menor = menorValor(livros, atual)
  
    // guardo a informação, livros na posição atual (e não guardando o índice)
    let livroAtual = livros[atual];
    console.log('posição atual', atual)
    console.log('livro atual', livros[atual])
    let livroMenorPreco = livros[menor];
    console.log('livro menor preço', livros[menor])
  
    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
  }
  
  console.log(livros)