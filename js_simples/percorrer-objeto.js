const clientes = require("./clientes2.json");

            // a função recebe uma array, uma chave dos objetos(nome, telefone, etc) e um valor
function encontrarClientes(arr, chave, valor) {

    //retornar na array find(item) no qual a chave do item inclua o valor passado
    return arr.find((item) => item[chave].includes(valor))
}

const clienteEncontrado = encontrarClientes(clientes, "nome", "Kirby")

console.log(clienteEncontrado)


function filtrarApartamentoSemComplemento(arr){
    return arr.filter((cliente) => {
        return (cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        )
    })
}

const clientesFiltrados = filtrarApartamentoSemComplemento(clientes)

console.log(clientesFiltrados)