let consultaCEP = fetch('https://viacep.com.br/ws/01001000.json')
.then(response => response.json())
.then(r => console.log(r))
.catch(erro => console.log(erro))
.finally(mensagem => console.log("Concluído"))


console.log(consultaCEP)