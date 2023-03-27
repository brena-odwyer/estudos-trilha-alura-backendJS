const user = {
    nome: "Brena",
    email: "j@j.com",
    nascimento: "2023/03/27",
    role: "admin",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email) 
    }
}

// Em Programação Orientada a Objetos existe o conceito de classe:
// a classe foi introduzida no JS em 2015, antes disso para trabalhar com o OO só com funções e com herança de protótipo.
// A herança de protótipo é como o JS pensava em OO, antes de 2015 quando incluíram as classes,
// que era uma demanda dos programadores que vinham de outras linguagens.
// Mesmo utilizando classes é importante entender this porque é parte da herança de protótipo, 
//e foi a partir dessa herança que a classe foi criada no js.