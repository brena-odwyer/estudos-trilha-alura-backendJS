// O Json permite transformar um objeto em uma String e transmitir esses dados como string

               // função do node pra puxar o código de outro lugar 
const dados = require("./cliente.json") // permite que a gente use o arquivo json nesta constante

console.log(dados)
console.log(typeof dados) // imprime: object

    // Como escrever um texto no formato JSON a partir de um objeto js comum, stringfication
const clienteEmString = JSON.stringify(dados)
console.log(clienteEmString) // mostra o cliente em string
console.log(typeof clienteEmString) // imprime: string

// sendo uma string não conseguimos manipular como um objeto, não da pra usar notação  de ponto tipo clienteEmString.nome no console.log não vai funcionar

// Como transformar uma string de volta e em um objeto usando o "parse"
const objetoCliente = JSON.parse(clienteEmString)
console.log(objetoCliente) // vai mostrar a mesma coisa que a const "dados"

