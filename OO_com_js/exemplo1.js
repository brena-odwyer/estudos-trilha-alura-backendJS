// criando objeto literal e usando para fazer protótipos

const User = {
    exibirInfos: function(nome){
        return nome
    }
}

const novoUser = Object.create(user) // a const user é protótipo
console.log(novoUser.exibirInfos('Ju'))
console.log(user.isPrototypeOf(novoUser))