//pivô é o valor/elemento que vai separar a lista
const listaLivros = require("./array")

// função recebe o pivo e array
function encontrarMenor(pivo, array) {
    // menores são os elementos cujo valor é menor que o valor do pivo
    let menores = 0;

    // elemento atual começa em 0, percorre a array inteira, e vai indo pra próxima posição a cada iteração
    for(let atual = 0; atual < array.length; atual++) {
        // onde vamos guardar o objeto que está sendo analisado no for na iteração atual
        let produtoAtual = array[atual]
        // se o preço do produto atual, o elemento que está sendo analisado, for menor que o preço do pivo
        if(produtoAtual.preco <pivo.preco) {
            // atualiza o valor da variável menor, incrementando, o menores é quantos elementos tem o valor menor que o valor do pivo
            menores++
        }
    }

            // passamos a array que já esta na primeira função, o index do pivo, e os elementos que tem o valor menor que o pivo
    trocarLugar(array, array.indexOf(pivo), menores)
    return array
}
//                  o pivo vai ser o objeto na posição 2 do lista livros
console.log(encontrarMenor(listaLivros[2], listaLivros))

//agora já sabemos quantos elementos tem o valor menor que o pivo, então vamos reposicionar o pivo e coloca-lo no seu lugar na array
                // recebe um array e de onde vai e para onde vai; onde a troca vai ser feita
function trocarLugar(array, de, para) {
    // variáveis para trocar as posições dos elementos na array
    // guarda o objeto na posição atual
    let elem1 = array[de]
    // guarda o objeto na posição que o elemento vai
    let elem2 = array[para]

    array[para] = elem1
    array[de] = elem2


}

function divideNoPivo(array) {
    let pivo = array[Math.floor(array.length/2)]
    encontrarMenor(pivo, array)
    let valoresMenores = 0 

    for(let analisando = 0; analisando < array.length; analisando++) {
        let atual = array[analisando]
        if(atual.preco <= pivo.preco && atual !== pivo) {
            trocarLugar(array, analisando, valoresMenores)
            valoresMenores++
        }
    }

    return array
}

console.log(divideNoPivo(listaLivros))

module.exports = trocarLugar

