const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ];

  function ligarCliente(telefoneComercial, telefoneResidencial) {
      console.log( `Ligando para ${telefoneComercial}`)
      console.log( `Ligando para ${telefoneResidencial}`)
  }

  ligarCliente(cliente.telefone[0], cliente.telefone[1]) // imprime: Ligando para 1155555550
                 //  Ligando para 1144444440
                //   Ligando para 1155555550

  // usando espalhamento para fazer a mesma coisa
  ligarCliente(...cliente.telefone)

  // fazendo algo similar com objetos, vamos simular um envio para o cliente
  const encomenda = {
    destinario: cliente.nome,
    endereco: cliente.enderecos[0]
  }

  console.log(encomenda) // vai imprimir:
    // um objeto com outro objeto
//   {
//     destinario: 'Joao',
//     endereco: {
//       rua: 'R. Joseph Climber',
//       numero: 1337,
//       apartamento: true,
//       complemento: 'ap 934'
//     }
//   }

// usando o espalhamento no objeto pra imprimir um único objeto

const encomenda2 = {
    destinario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(encomenda2) // exibe um único objeto