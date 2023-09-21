const user = {
    nome: "Brena",
    email: "j@j.com",
    nascimento: "2023/03/27",
    role: "estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email) 
    }
}

const admin = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2023/03/27",
    role: "admin",
    ativo: true,
    criarCurso(){
        console.log(`Curso criado.`)
    }
}

                    // primeiro parametro é quem herda a propriedade e o segundo é quem dá a propriedade
Object.setPrototypeOf(admin, user ) // criando um protótipo
admin.criarCurso() 
admin.exibirInfos() // o interpretador do js vai no objeto admin e vê que não tem o método exibirCursos, 
//aí ele procura pra ver se o admin tá usando um objeto como prototipo e está porque definimos que sim
//isso é a cadeia de protótipo, o js vai lendo o código e buscando os protótipos
// como iniciamos a cadeia no admin, o contexto (escopo) utilizado vai ser do admin

user.exibirInfos() // retorna: Brena j@j.com
const exibir = user.exibirInfos()
console.log(exibir) // retorna undefined porque a função perdeu contexto

// Em Programação Orientada a Objetos existe o conceito de classe:
// a classe foi introduzida no JS em 2015, antes disso para trabalhar com o OO só com funções e com herança de protótipo.
// A herança de protótipo é como o JS pensava em OO, antes de 2015 quando incluíram as classes,
// que era uma demanda dos programadores que vinham de outras linguagens.
// Mesmo utilizando classes é importante entender this porque é parte da herança de protótipo, 
//e foi a partir dessa herança que a classe foi criada no js.