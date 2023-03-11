const listaLivros = require ("./arrayOrdenado")

        // a função recebe um array e depois as partes fatiadas do array, de é o indice onde começa a busca e até onde acaba, e o quarto valor é o valorBuscado
function buscar(array, de, ate, valorBuscado){
   // é o meio da array, de + ate é o indice de começo e final e aí divide por 2
    const meio = Math.floor((de + ate)/2)
    const atual = array[meio]
    // esse primeiro if é se não houver um numero maior, se o de > ate; o -1 é o que o indice js retorna quando não encontra o numero do indice
    if (de > ate) {
        return -1
    }
    if(valorBuscado === atual.preco) {
        return meio;
    }
    if( valorBuscado < atual.preco) {
        return buscar(array, de, meio -1, valorBuscado)
    }
    if (valorBuscado > atual.preco) {
        return buscar(array, meio + 1, ate, valorBuscado)
    } 
   

}

//                  array de livros, começando no indice zero, ate o final e o quarenta e um valor buscado qualquer
console.log(buscar(listaLivros, 0, listaLivros.length-1, 40))

// temos três possibilidades, se o valorbuscado for igual ao atual, então vai ser o meio; se for maior ou menor e por isso os três ifs