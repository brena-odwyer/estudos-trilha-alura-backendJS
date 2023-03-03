const notas = [10, 6.5, 8, 7.5]

let somaNotas = 0
            // passamos uma função no forEach, se eu passar só um console.log(oi) dentro vai aparecer oi 4x no console
                        //esse paramento aqui está correspondendo a cada elemento dentro da array, o nome sou eu que dou
notas.forEach(function (nota){
    // pegando a somaNotas que começou como zero e atribuindo cada nota porque o forEach passa em cada elemento
    somaNotas += nota
})

const media = somaNotas / notas.length

console.log(`A média das notas é ${media}`)


