//Exercício 02


function ex1()
{
    //Exercício 01. Escreva um programa que recebe um número digitado pelo usuário e responda se o número inserido é par ou ímpar ou 0.
    
    numero = prompt("Digite um número inteiro:");
    if(numero == "0")
        alert("O número digitado é 0");
    else if(Number(numero) % 2 == 0)
        alert(numero + " é par!");
    else
        alert(numero + "é ímpar!");
}

function ex2()
{
    //Exercício 02. Desenvolva um algoritmo que seja capaz de receber dois números digitados pelo usuário e diga qual deles é maior.

    numero1 = prompt("Digite o primeiro número:");
    numero2 = prompt("Digite o segundo número:");
    if(numero1 > numero2)
        alert(numero1 + " é maior que " + numero2);
    else if(numero1 < numero2)
        alert(numero1 + " é menor que " + numero2);
    else
        alert("Números iguais!");
}

function ex3()
{
    //Exercício 03. Um banco contratou você para que escreva um programa que irá ser utilizado pelo usuário em um tablet. O programa irá fazer 3 perguntas e encaminhar o cliente para 2 filas. A fila comum e a fila preferencial. Se o cliente atender a uma das condições a seguir ele deve ser encaminhado para a fila preferencial. As condições são: Ter mais de 65 anos, se deficiente ou gestante.
    do
    {
        idoso = prompt("Possui 65 anos ou mais?\n   1 - Sim\n   2 - Não");
    } while(idoso != "1" && idoso != "2");

    if(idoso == "2")
    {
        do
        {
           deficiente = prompt("Possui alguma deficiência?\n   1 - Sim\n   2 - Não");
        } while(deficiente != "1" && deficiente != "2");

        if(deficiente == "2")
        {
            do
            {
                gestante = prompt("Está gestando?\n   1 - Sim\n   2 - Não");          
            }while(deficiente != "1" && deficiente != "2");

            if(gestante == "2")
                alert("Dirija-se a fila comum");    
        }   

    }
    
    else if((idoso == "1") || (gestante == "1") || (deficiente == "1"));
        alert("Dirija-se a fila prioritária")
    
}
   
function ex4()
{
    //Um cliente que promove eventos e solicitou um programa que seja capaz de identificar se uma pessoa é maior de idade. Pessoas com menos de 16 anos não podem entrar nos eventos. Entre 16 e 18 anos somente acompanhado pelos responsáveis. Maiores de 18 podem entrar normalmente. Escreva o programa em Javascript.
    let dia_nascimento = prompt("digite o dia do seu aniversário:");
    let mes_nascimento = prompt("Digite o mês de nascimento (1 - 12):")
    let ano_nascimento = prompt("Digite o ano de nascimento:");
    let hoje = new Date();

    let idade = hoje.getFullYear() - ano_nascimento;
    let mes = hoje.getMonth - mes_nascimento;

    if((mes < 0) ||(mes === 0 && hoje.getDate() < dia_nascimento) )
        idade--;

    if(idade < "16")
        alert("Entrada proibida!");
    else if((idade >= "16") && (idade < "18"))
        alert("Entrada permitida se acompanhado por Responsável!")
    else if (idade >= "18")
        alert("Entrada liberada!");

}


function ex5() {
    function login() {
        let login_tentativa;
        do {
            login_tentativa = prompt("Digite seu login:");
            if (
                login_tentativa !== "Pet0104420" &&
                login_tentativa !== "PET0104420" &&
                login_tentativa !== "pet0104420"
            ) {
                alert("Login inválido!\n");
            }
        } while (
            login_tentativa !== "Pet0104420" &&
            login_tentativa !== "PET0104420" &&
            login_tentativa !== "pet0104420"
        );
    }

    function senha() {
        let senha_usuario;
        do {
            senha_usuario = prompt("Digite sua senha:");
            if (senha_usuario !== "20091995") {
                alert("Senha inválida!");
            }
        } while (senha_usuario !== "20091995");
    }

    login();
    senha();
    alert("Bem-vindo!");
}

function ex6()
{
    function introducao() {
        alert("Olá! Bem vindo ao nosso Quiz!\nA seguir serão apresentados 04 perguntas de múltipla escolha de conhecimentos gerais.\nBoa sorte!!\n");
      }
      
      function pergunta() {
        let x;
        do {
          x = prompt("Quer continuar? (S/N)").toUpperCase();
        } while (x !== 'S' && x !== 'N');
      
        return x === 'S' ? 1 : 0;
      }
      
      function pergunta1() {
        let x = prompt(
          "Pergunta 01: Qual é o maior oceano da Terra?\n" +
          "a) Oceano Atlântico\n" +
          "b) Oceano Índico\n" +
          "c) Oceano Ártico\n" +
          "d) Oceano Pacífico\n" +
          "Resposta:"
        ).toLowerCase();
      
        if (x === 'd') {
          alert("Parabéns, você acertou!");
          return 100;
        } else {
          alert("Infelizmente, você errou! A resposta certa é d) Oceano Pacífico.");
          return 0;
        }
      }
      
      function resposta1() {
        alert("O Oceano Pacífico cobre mais de 30% da superfície terrestre, sendo o maior e mais profundo oceano do planeta. Ele se estende do Ártico ao Antártico e separa Ásia e Austrália das Américas.\n");
      }
      
      function pergunta2() {
        let x = prompt(
          "Pergunta 02: Quem pintou a Mona Lisa?\n" +
          "a) Vincent van Gogh\n" +
          "b) Michelangelo\n" +
          "c) Leonardo da Vinci\n" +
          "d) Pablo Picasso\n" +
          "Resposta:"
        ).toLowerCase();
      
        if (x === 'c') {
          alert("Parabéns, você acertou!");
          return 100;
        } else {
          alert("Infelizmente, você errou! A resposta certa é c) Leonardo da Vinci.");
          return 0;
        }
      }
      
      function resposta2() {
        alert("Leonardo da Vinci, um dos maiores artistas e cientistas do Renascimento, pintou a Mona Lisa entre 1503 e 1506. A obra é famosa pelo sorriso enigmático da modelo e pelas técnicas inovadoras de sombreamento e perspectiva.\n");
      }
      
      function pergunta3() {
        let x = prompt(
          "Pergunta 03: Em que país foi inventado o papel?\n" +
          "a) Egito\n" +
          "b) China\n" +
          "c) Grécia\n" +
          "d) Índia\n" +
          "Resposta:"
        ).toLowerCase();
      
        if (x === 'b') {
          alert("Parabéns, você acertou!");
          return 100;
        } else {
          alert("Infelizmente, você errou! A resposta certa é b) China.");
          return 0;
        }
      }
      
      function resposta3() {
        alert("O papel foi criado por volta do século II d.C. pelo chinês Cai Lun, que usou fibras vegetais e trapos de tecidos para fabricar um material leve e durável. A invenção revolucionou a escrita e a disseminação do conhecimento.\n");
      }
      
      function pergunta4() {
        let x = prompt(
          "Pergunta 04: Qual é a língua com o maior número de falantes nativos no mundo?\n" +
          "a) Inglês\n" +
          "b) Espanhol\n" +
          "c) Mandarim\n" +
          "d) Hindi\n" +
          "Resposta:"
        ).toLowerCase();
      
        if (x === 'c') {
          alert("Parabéns, você acertou!");
          return 100;
        } else {
          alert("Infelizmente, você errou! A resposta certa é c) Mandarim.");
          return 0;
        }
      }
      
      function resposta4() {
        alert("O Mandarim é a língua oficial da China e é falada por mais de 900 milhões de pessoas como língua materna. Sua complexidade e sistema de caracteres a tornam única entre os idiomas globais.\n");
      }
      
      function inicio() {
        let pontos = 0;
        introducao();
      
        if (pergunta() === 1) {
          pontos += pergunta1();
          resposta1();
          alert("Você possui " + pontos + " pontos!\n");
      
          if (pergunta() === 1) {
            pontos += pergunta2();
            resposta2();
            alert("Você possui " + pontos + " pontos!\n");
      
            if (pergunta() === 1) {
              pontos += pergunta3();
              resposta3();
              alert("Você possui " + pontos + " pontos!\n");
      
              if (pergunta() === 1) {
                pontos += pergunta4();
                resposta4();
                alert("Você possui " + pontos + " pontos!\n");
              }
            }
          }
        }
      
        alert("Sua pontuação final é: " + pontos + "\n");
      
        switch (pontos) {
          case 400:
            alert("Parabéns! Você acertou todas as perguntas!");
            break;
          case 300:
            alert("Você acertou 03 questões!");
            break;
          case 200:
            alert("Você acertou 02 questões!");
            break;
          case 100:
            alert("Você acertou 01 questão!");
            break;
          case 0:
            alert("Você não acertou nenhuma questão!");
            break;
        }
      
        alert("Muito obrigado por jogar!");
      }
      
      // Para iniciar o quiz, execute:
      inicio();
      
}

function menu2()
{
    let numero = "0";

    do {
        numero = prompt("Escolha o número do exercício:\n1 - Par ou ímpar;\n2 - Maior ou menor;\n3 - Fila o banco\n4 - Boate\n5 - Senha\n6 - Quiz\n0 - Sair");
        
        switch (numero) {
            case "1":
                ex1();
                break;
            case "2":
                ex2();
                break;
            case "3":
                ex3();
                break;
            case "4":
                ex4();
                break;
            case "5":
                ex5();
                break;
            case "6":
                ex6();
                break;
            case "7":
                ex7();
                break;
            case "8":
                ex8();
                break;
            case "0":
                alert("Saindo...");
                break;
            default: 
                alert("Opção inválida. Tente novamente.");
                break;
        }
    } while (numero != "0");
}



