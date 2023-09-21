// criando objeto como construtor

 function User(nome, email) {
    this.nome = nome, 
    this.#email = email

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = new User('Juliana', 'j@j.com')
console.log(novoUser.exibirInfos()) // o contexto de exibir infos é o new User com as propriedades do this

// criando objetos object.create

function Admin(role) {
    // fazendo o admin receber o que tem lá no User
    User.call(this, 'Juliana', 'j@j.com') // este this se refere ao contexto de User
    this.role = role || 'estudante' // se ele não receber um role, colocar estudante automaticamente
}

Admin.prototype = Object.create(User.prototype) // criamos um objeto e passando como parametro a propriedade protótipo de user
const newUser = new Admin('Admin') // criamos um novo objeto a partir do construtor
console.log(newUser.exibirInfos())
console.log(newUser.role)