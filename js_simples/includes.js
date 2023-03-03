const alunos = ["João", "Juliana", "Ana", "Caio"]
const medias = [10, 8, 7, 6.5]

const alunosEmedias = [alunos, medias]

function exibirNomeEnota(aluno) {
    //             esse zero aqui é alunos, que tá no índice zero
    // const alunos = alunosEmedias[0]
    // //             na constate criada, alunosEmeidas, indice 1, que se refere as medias, me da o indice, que se refere ao aluno    
    // const medias = alunosEmedias[1]
    // essas duas consts podem ser resumidas em:

    const [alunos, medias] = alunosEmedias

    if (alunos.includes(aluno)) {
        

    //                  na constaten que criamos, no índice zero, isto é, alunos, me da o indice do aluno(nós que damos essa palavra aluno, podia ser qlqr coisa)
        const indice = alunosEmedias[0].indexOf(aluno)
        
    
        const mediaAluno = medias[indice]

        console.log(`${aluno} tem a média ${mediaAluno}`)
    } else {
        console.log("Aluno não encontrado")
    }
}

exibirNomeEnota("Juliana")