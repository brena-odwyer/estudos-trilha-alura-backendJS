const notas = [10, 6.5, 8, 7.5]

let somaNotas = 0

for(i=0; i<notas.length; i++) {
    // somaNotas tem 0 e aí vai ser incrementando com o for na const notas com o i de indice, então vai ir somando tudo la dentro
   somaNotas += notas[i]
}

const media = somaNotas / notas.length

console.log(`A média das notas é ${media}`)