// desafio: quem são os alunos reprovados?
const alunos =["Ana", "Marcos", "Maria", "Mauro"]
const medias = [7, 4.5, 8, 7.5]

//filter retorna novo array então precisa de uma const
                            // o primeiro parametro do filter diz respeito ao item na array, o segundo ao indice; os nomes a gente que dá
const reprovados = alunos.filter((aluno, indice) => {
    //retornar o indice dentro de medias, se for menor que 7 aí vai dar true e por isso essa é const reprovados, um console.log nela mostra só Marcos
    return medias[indice] < 7;
})

console.log(reprovados) 