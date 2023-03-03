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

  // Agora, validaremos a compra do cliente, e desejamos visualizar se o cliente possui um endereço cadastrado no momento da compra.

                    // classe objetos, com keys com o parâmentro como cliente
const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto) // vai transformar as keys (chaves) do objeto em uma array

// fazer uma verificação pra ver se a chaveDoObjeto cliente inclui a key "endereco", o ! no começo é que só da erro se não tiver
if(!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro, é necessário ter um endereço cadastrado")
    // se comentar o campo endereços vai dar erro porque não vai achar endereço no objeto
}