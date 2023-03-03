const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"], // array dentro do objeto
  };
  
  console.log(cliente.telefone[0]); // acessa o objeto cliente, o array telefone, e o item 1 que está no indice 0

  // objetos c/objetos dentro

  cliente.endereco = [{ // adicionando este colchete aqui, fazemos uma lista de endereços, criando uma array
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  }]; // a array de endereços fecha aqui
  
  console.log(cliente) // saída fica : 
  //{
//     nome: 'Joao',
//     idade: 24,
//     email: 'joao@firma.com',
//     telefone: [ '1155555550', '1144444440' ],
//     endereco: {
//       rua: 'R. Joseph Climber',
//       numero: 1337,
//       apartamento: true,
//       complemento: 'ap 934'
//     }
//   }

cliente.endereco.push({
    rua: "Rua Josepsh Lader",
    numero: 404,
    apartamento: false,
})


console.log(cliente.endereco) // aqui vai imprimir os dois endereços no console


// já que utilizamos array podemos usar todos os metodos de array
// aqui usamos um filter para trazer apenas o que for apartamento, tiver apartamento true
const listaApenasApartamentos = cliente.endereco.filter(
    (endereco) => endereco.apartamento === true
)

console.log(listaApenasApartamentos)