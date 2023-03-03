// uma forma de interar (percorrer) dentro do objeto

const cliente = {
    //chave: valor
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

  // diferente da array, o objeto não tem índices

  //para cada chave in cliente
  for (let chave in cliente) {
      console.log(chave) // vai imprir o nome de cada chave
      console.log(cliente[chave]) // vai imprimir a chave e o valor


      //para checar o tipo do objeto, com um filtro:
      // variavel salvando o tipo da chave, que é o que definimos na let da linha 23
      let tipo = typeof cliente[chave]
      // uma validação para caso a chave não seja nem objeto e nem função
      if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} tem valor ${cliente[chave]}`) // vai retornar email, telefone, endereços
      }
  }