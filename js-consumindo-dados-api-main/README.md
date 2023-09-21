Parte teórica

---> Problema a ser desenvolvido no curso
Vamos contextualizar a nossa história. Nós somos uma dupla de desenvolvedores da Alura, especificamente do produto AluraBooks, uma plataforma de venda de livros técnicos. Nós trabalhamos com a linguagem JavaScript.

Durante nosso desenvolvimento, encontramos um problema nos dados dos usuários do AluraBooks. Vários usuários moravam na mesma rua e cada um deles estava escrevendo o nome dessa rua de formas diferentes. Isso impediu que os nossos cientistas de dados fizessem uma análise mais aprofundada sobre os nossos clientes.

Faremos um brainstorming para construir uma solução, passando por vários termos e conceitos sobre o JavaScript. Os termos são: JavaScript assíncrono e síncrono, Event Loop, Call Stack e Task Queue.

Esses quatro assuntos específicos vão nos ajudar a entender o funcionamento do JavaScript. A partir disso, aprenderemos sobre Callbacks, Fetch API e Promises e, em seguida, sobre assincronicidade, assunto relacionado ao JavaScript assíncrono e às requisições, que é o consumo da API.

Esses três tópicos nos gerarão mais dúvidas, especialmente sobre: Then; JSON; tratamento de erros com catch; e Finally, que são métodos das Promises, termo que acabamos de mencionar.

Também aprenderemos sobre Async Await, sobre tratamento de erros com Async e Promise All. Isso vai nos ajudar a entender funções assíncronas, assim, continuaremos o nosso aprendizado sobre assincronicidade.

Por fim, vamos aprender um pouquinho sobre getElementById, sobre Value e sobre addEventListener. Usaremos esses três tópicos para manipularmos o DOM e chegar na solução esperada. Repare que passaremos por vários tópicos para chegarmos na solução.

Mas, afinal, qual vai ser a solução? Começaremos pegando o formulário de cadastro de clientes da AluraBooks. Depois, vamos consumir a API do ViaCEP. Quando o nosso usuário for se cadastrar e colocar o CEP, vai puxar já o nome da rua, o nome da cidade e o estado automaticamente.

A partir de agora, teremos todos os nomes de rua escritos da mesma maneira, e isso vai facilitar muito a vida dos nossos cientistas de dados. Vamos testar e verificar a solução final.

Estou com a tela de cadastro do AluraBooks aberta e eu vou até o CEP. Vou colocar um CEP padrão que vai devolver um endereço de São Paulo. Em seguida, vou clicar no campo de "CEP" e apertar “zoom” para vermos melhor.

Agora, adicionaremos um "01001000" e tiraremos o mouse do campo de CEP. Selecionando fora, ele completa automaticamente o endereço da Praça da Sé, cidade de São Paulo e o estado de São Paulo.

O próximo passo é enviar esse formulário. Ele vai pedir para eu completar tudo e poderemos testar depois. O ponto principal, é: conseguimos resolver o problema dos nossos cientistas de dados. Agora ele completa automaticamente o endereço, a cidade e o estado.

--> Síncrono ou assíncrono?
00:00:31] Chamamos essas atividades em vídeo de videochamadas, síncronas, ou seja, quando você está falando ao mesmo tempo, simultaneamente, com os seus colegas, seus amigos.

A comunicação assíncrona também era bem comum, por exemplo, as mensagens de texto, quando você mandava um "Oi" para o seu colega e ele demorava horas para responder. Quem não tem aquele amigo que demora muito tempo para te responder? Essa é a comunicação assíncrona.

Então, quando você manda uma mensagem e seu amigo que demora três horas para te responder, quais são as opções? Você para de fazer suas coisas, tudo que você tem para fazer, ou você se ocupa para fazer outras tarefas até chegar essa resposta dele?

Isso é o que acontece em um sistema JavaScript também. Você pode ter o sistema síncrono, que é o padrão dele: responder uma tarefa após a outra. Por exemplo, uma imagem carrega, depois a outra carrega e depois a outra carrega e assim por diante, seguindo um fluxo.

Também temos como fazer um sistema assíncrono, com tarefas acontecendo, sendo concluídas uma após a outra, mas também com outras em segundo plano ou afastadas para carregar depois.

---> Event loop e call stack
Basicamente, podemos separar em três partes o que acontece no nosso código: o Event Loop, o Call Stack e o Task Queue.

As ações são enviadas para a call stack e ficam lá até terminarem o que tem que fazer.

E as ações são chamadas na ordem.

O Event Loop é como um segurança na festa e vai guiando para qual porta a pessoa tem que entrar, qual é o acesso dela e quando ela deve acontecer. Então ele fica o tempo inteiro no código olhando o que vai ser chamado para a Call Stack.

Na Call Stack vão todas as coisas que devem acontecer na tela. Então ele chama uma coisa por vez do código, essa é a função dele. O Event Loop manda para lá o nosso código, as partes VIPs que têm que acontecer primeiro. Elas entram primeiro ali na fila.

Por padrão, tudo vem vazio. Mas também temos a Task Queue, que vai dar conta do nosso sistema síncrono. É a outra fila que o guarda vai fazer a segurança.

Exemplo:
    function mandarMensagem() {
    console.log(“Estou aprendendo a programar.”);
    }
    console.log(“O javascript é legal.”);
    mandarMensagem();
    console.log(“Eu gosto de HTML e CSS.”);

    vai imprimir no console:
    O javascript é legal.
    Estou aprendendo a programar.
    Eu gosto de HTML e CSS.


---> Task Queue
O event loop chama as tasks pro call stack, se há algo que mostra que é assíncrono - como um set time out - a task vai pra task queue enquanto as coisas vão rodando na call stack.
Quando o tempo necessário passa na task queue aí a task vai pra call stack.


Por padrão o JavaScript funciona de modo síncrono, executando as tarefas linha a linha. Funções como as descritas anteriormente podem atrasar essa execução por terem um tempo de espera relativo a fatores externos (como o usuário ou a API). Para isso não afetar o nosso projeto, temos o que é chamado de programação assíncrona.

A assincronicidade em programação é o ato de executar uma tarefa em “segundo plano”, para a execução das outras tarefas menores acontecerem enquanto a maior está sendo carregada, sem interromper o código. O javascript tem o comportamento de executar uma coisa por vez, mesmo se transformarmos trechos de código em assíncrono. Mas como funciona isso?

Podemos destrinchar o fluxo de execução de tarefas em JavaScript em três partes: Event Loop, Call Stack e Task Queue. O Event Loop é um ciclo que monitora e executa as ações que mandamos para o JavaScript. O processo de leitura do código só é finalizado quando não existem mais ações a serem executadas. A call stack é um mecanismo que organiza como irá funcionar o script quando existem muitas funções: qual função está sendo executada, quais estão sendo chamadas dentro de alguma função, etc. Por fim, a task queue é a fila de tarefas assíncronas. Se algo precisa ocorrer em segundo plano ou mais tarde, é nessa fila que ele será adicionado e executado mais tarde.