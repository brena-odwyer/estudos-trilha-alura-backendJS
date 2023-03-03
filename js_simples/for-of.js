const notas = [10, 6.5, 8, 7.5]

//para let elemento de notas(elementos) faça o que está nas {} no caso cai mostrar uma lista com as notas
// for (let nota of notas) {
//     console.log(nota)
// }

let somaNotas = 0

// para cada nota de notas
for (let nota of notas) {
    // pega o 0, somaNotas, e incrementa cada elemento nota
    somaNotas += nota
}
            // pega o somaNotas divide pelo numero de elementos dentro de notas
let media = somaNotas /notas.length

console.log(media)