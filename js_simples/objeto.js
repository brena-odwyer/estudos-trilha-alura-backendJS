// ----> Construindo objetos
const objetoPessoa = {
    nome: "Jose",
    idade: 32,

}

// ----> acesso ponto

const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
  };

  console.log(cliente.nome) // imprime: André

  // ----> Acessando o valor dentro de uma propriedade    método subtring começando em no índice 0 e terminando em 3
  console.log(`Os três primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`)

  //------> Acessando com colchetes
  console.log(cliente["idade"]) // imprime: 32

  // quando temos um objeto e conhecemos apenas os nomes das chaves como parâmentros:
  const chaves = ["nome", "idade", "cpf", "email", "altura"]
  // podemos percorrer a lista para acessar todos os valores
  chaves.forEach((chave) => {   //essa chave é o parâmetro  //essa chave é da const
      console.log(`A chave é ${chave} com o valor ${cliente[chave]}`)
  }) 

  // imprime:
//  A chave é nome com o valor Andre
// A chave é idade com o valor 32
// A chave é cpf com o valor 1122233345
// A chave é email com o valor andre@dominio.com
// A chave é altura com o valor undefined -> da unefined porque não há uma propriedade altura no objeto

// ------> Alterando objetos:

const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
  };

  pessoa.telefone = "11 2233444"; // vai adicionar a propriedade ao objeto

  pessoa.nome = "Luma Silva" // vai se sobrepor a Luma e vai ficar "Luma Silva"
// mesmo sendo const você pode fazer a modificação, só não pode reatribuir o objeto inteiro


// -----> Deletando uma propriedade

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   delete objPersonagem.aliado

console.log(objPersonagem.aliado) //Imprime: undefined

//Com notação de colchetes:

delete objPersonagem["status"]


console.log(objPersonagem.status) //Imprime: undefined

// delete remove do objeto o valor da propriedade, assim como a chave.