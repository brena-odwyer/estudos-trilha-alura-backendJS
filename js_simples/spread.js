// considerando a array, crie uma array nova com um novo numero no final sem alterar a original

const notas = [7, 7, 8, 9]

// const novaNotas = notas.push(10) -> Isso muda o array original então não serve

                    // ... é o spread, vai pegar todo o conteúdo do notas e colocar no lugar dos ...
                            // o 10 é o que quero colocar no final
const novaNotas = [...notas, 10]



console.log(`As notas originais são ${notas}`)
console.log(`A nova array de notas notas é ${novaNotas}`)

// Outro exemplo
const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 7]

                // vai unir as duas arrays
const numeros = [...numerosPares, ...numerosImpares]