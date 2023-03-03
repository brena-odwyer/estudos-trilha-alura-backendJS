const numeros = [100, 200, 300, 400, 500, 600]

    // para i começando em zero; i menor que o tamanho da constante; i = i +1, vai de 1 em 1
    // primeira expressão é executada 1 vez; segunda é a condição de execução do bloco; a terceira expressão é executada ao final do bloco dentro das chaves
for (let i =0; i<numeros.length; i++) {
    // dentro das chaves sera executado várias vezes
    //estou chamando os numeros, e imprindo o i, então vou imprimir cada um dos itens nos indices dentro da const
    console.log(numeros[i])
}

console.log("-----")
for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(numeros[i]);
  }

  // dá no console 600, 500, 400, 300, 200, 100
  console.log("-----")
  for (let i = numeros.length - 1; i >= 0; i -= 2) {
    console.log(numeros[i]);
  }

  // dá no console 600, 400, 200
  console.log("-----")
  for (let i = numeros.length - 1; numeros[i] >= 300; i -= 2) {
    console.log(numeros[i]);
  }

  // dá no console 600, 400

  console.log("-----")
  const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);

// dá no console uma array com todos os pares de 0 a 100