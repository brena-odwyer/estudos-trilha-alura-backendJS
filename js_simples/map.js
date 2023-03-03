// Todos os alunos receberam um ponto extra na sua média e precisamos colocar na lista

const notas = [10, 9.5, 8, 7, 6]

// como o map não muda a array precisamos de uma nova const 
                        //     chamou a array, usou a função map, o nota diz respeito aos elementos na array
const notasAtualizadas = notas.map((nota) => {
    // retorna o elemento da array, que chamamos de nota, + 1
                    // condicional com operador ternáro
                    //se nota + 1 >= 10  ?(sim ou não) sim(10) :(não) nota +1
    return nota + 1 >= 10 ? 10 : nota +1

})

console.log(notasAtualizadas)