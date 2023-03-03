//Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];

const salaJava = [6, 5, 8, 9, 5, 6];

const salaPython = [7, 3.5, 8, 9.5];

function calcularMedia(notasSala) {
            //o reduce é uma função que recebe no primeiro parametro o acumulador (acc); no segundo o item da array
    const somaNotas = notasSala.reduce((acc, nota) => {
        // o acumlador começa em 0 e aí vai indo em cada um dos itens no array e somando
        return acc + nota
        // depois o reduce pode receber outro parametro, no caso aqui 0, que é o valor inicial do acumulador
    }, 0)
    
    
    const media = somaNotas /notasSala.length
    return media
}

console.log(`A média da sala de JS é ${calcularMedia(salaJS)}`)
console.log(`A média da sala de Java é ${calcularMedia(salaJava)}`)
console.log(`A média da sala de Phyton é ${calcularMedia(salaPython)}`)