// Colocando funções dentro de um objeto
// suponto que este é o cliente de uma loja e ele quer fazer uma compra

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"], 
    saldo: 200,    // adicionamos a propriedade saldo para mostrar o $ que aquele cliente tinha de saldo         
                  //em seguida, fazemos uma função para ver se o cliente tem saldo suficiente para pagar o que ele quer comprar     
                    // valor da compra
    efetuaPagamento: function (valor) {
        // o this representa "este" cliente
        if(valor > this.saldo) {
            console.log("Saldo insuficiente")
        }
        else {
            // o saldo vai ser igual a ele diminuindo o valor da compra
            this.saldo -= valor
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`)
        }
    }
  };

  cliente.efetuaPagamento(190)