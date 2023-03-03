// Exemplo de objeto
const Livro = {
    nome: "React Native",
    paginas: 185,
    anunciar: function () {
        console.log("A alura indica o livro " + this.nome)
    }
}

Livro.anunciar()

// Exemplo classe, aí posso criar quantos livros quiser
class Livro2 {
    constructor(nome, editora, paginas) {
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitutlo() {
        console.log(`Titulo ${this.nome}`)
    }
}
                        //corresponde a this.nome, this.editora, this.paginas
const novoLivro = new Livro2("Primeiros passos", "Casa do código", 195)
novoLivro.anunciarTitutlo()

// Herança de classes, quando queremos que uma classe herde as propriedades de outra

class LivroColecao extends Livro2 {
    constructor(nome, nomeColecao) {
        super(nome) // em super eu passo a propriedade que quero receber, no caso só nome
        this.nomeColecao = nomeColecao
    }
    descreverColecao(){
        console.log(`O livro ${this.nome} faz parte da colecao ${this.LivroColecao}`)
    }
}
                                    // corresponde ao this.nome, this.nomeColecao
const novoLivro2 = new LivroColecao("Logica de programacao", "comece a programar")
novoLivro2.descreverColecao()