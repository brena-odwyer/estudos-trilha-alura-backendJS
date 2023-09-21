import User from "./User.js/index.js.js.js";

export default class Admin extends User{ // esse extends diz que a classe Admin herda a classe User
    constructor(nome, email, nascimento, role = 'Admin', ativo = true) {
    super(nome, email, nascimento, role, ativo) // com este super estamos trazendo todas as propriedades que queremos trazer de User
} 
    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

// const novoAdmin = new Admin('Ro', 'r@r', "2021-01-01")
// console.log(novoAdmin)
// console.log(novoAdmin.exibirInfos())
// console.log(novoAdmin.criarCurso('Js', 20))

// exemplo de herança de classe