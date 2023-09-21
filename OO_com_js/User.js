export default class User { // criando a classe User e dentro podemos usar o conceito de construtor
    #nome
    constructor(nome, email, nascimento, role, ativo = true){ // para inicias a classe com algumas propriedades
        this.#nome = nome //essa # faz o encapsulamento, protegendo a propriedade
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudante' // a regra de negócio do exemplo define que se não colocar o role é estudante
        this.ativo = ativo
    }
    exibirInfos(){
        return `${this.#nome}, ${this.email}`
    }
}

// const novoUser = new User('Ju', 'j@j', '2021-01-01')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())

// As classes são açúcar sintático por cima das funções e herança de protótipo

console.log(User.prototype.isPrototypeOf(novoUser)) // retorna true

