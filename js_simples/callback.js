const nomes = ["Evaldo", "Mari", "Camis"]

nomes.forEach(function (nome) {
    console.log(nome) //vai imprimir os nomes no console
})

console.log("-----")

nomes.forEach((nome) => { // mesma coisa com callback
    console.log(nome) //vai imprimir os nomes no console
})

console.log("-----")

// Outra forma de fazer a mesma coisa
function imprimirNome(nome) {
    console.log(nome)
}

nomes.forEach(imprimirNome)