import User from "./User.js/index.js.js.js"

export default class Docente extends User{ // esse extends diz que a classe Admin herda a classe User
    constructor(nome, email, nascimento, role = 'Docente', ativo = true) {
    super(nome, email, nascimento, role, ativo) // com este super estamos trazendo todas as propriedades que queremos trazer de User
} 
    aprovaEstudante(estudante, curso){
        return `estudante ${estudante} aprovado no curso ${curso}`
    }

}

// const novoDocente = new Docente("Mari", "m2m", "2021-01-01")
// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())
// console.log(novoDocente.aprovaEstudante('Ju', 'Js'))