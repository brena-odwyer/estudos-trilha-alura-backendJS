//desafio: padronizar os dados

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"]

// cria uma nova const pq o map não altera a instring = array nomes usa a função map, passa o "nome" que vai corresponder a cada elemento
const nomesPadronizados = nomes.map((nome)=> {
   // retorna elemento("nome").função para letras maisculas
    return nome.toUpperCase()
})

console.log(nomesPadronizados)