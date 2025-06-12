function ex1() 
{
    // Exercício 01: Escreva um programa que sirva como um cronômetro. O usuário deve digitar um número em segundos e o programa deve contabilizar os segundos digitados. O programa deve receber somente números entre 1 e 59, do contrário ele retorna um erro e solicita que o usuário digite um número válido.
    let tempo;
    do {
        tempo = parseInt(prompt("Digite o tempo, em segundos, para ativação do temporizador (use valores entre 1 e 59):"));
    } while (isNaN(tempo) || tempo < 1 || tempo > 59);

    let contador = tempo;
    const intervalId = setInterval(() => {
        console.log(`//------------------------- Temporizador de ${tempo}s -------------------------\\ \n|                                   ${contador}s                                   |\n\\----------------------------------------------------------------------//`);
        contador--;

        if (contador < 0) {
            clearInterval(intervalId);
            alert(`Cronômetro finalizado! Se passaram ${tempo} segundos`);

            let resposta;
            do {
                resposta = prompt("Deseja reativar o cronômetro? (S/N) ");
            } while (resposta !== 'S' && resposta !== 's' && resposta !== 'N' && resposta !== 'n');

            if (resposta === 'S' || resposta === 's') {
                ex1();
            } else {
                alert("Até mais!");
            }
        }
    }, 1000);
}

function ex2()
{
    //Exercício 02: 2) Desenvolva um programa que receba um número do usuário e escreva a tabuada dele.
    do
    {
        let multiplicador = prompt("Digite o número a ser multiplicado:");
        alert
        (
            multiplicador + " * 0 = " + multiplicador*0 + "\n" +
            multiplicador + " * 1 = " + multiplicador*1 + "\n" +
            multiplicador + " * 2 = " + multiplicador*2 + "\n" + 
            multiplicador + " * 3 = " + multiplicador*3 + "\n" +
            multiplicador + " * 4 = " + multiplicador*4 + "\n" +
            multiplicador + " * 5 = " + multiplicador*5 + "\n" + 
            multiplicador + " * 6 = " + multiplicador*6 + "\n" +
            multiplicador + " * 7 = " + multiplicador*7 + "\n" +
            multiplicador + " * 8 = " + multiplicador*8 + "\n" +
            multiplicador + " * 9 = " + multiplicador*9 + "\n" +
            multiplicador + " * 10 = " + multiplicador*10 + "\n"
        );
        
        do
        {
            let resposta = prompt("Deseja reativar a tabuada? (S/N)")
        } while(resposta != 'S' && resposta != 's' && resposta != 'N' && resposta != 'n');
    } while(resposta == 'S' || resposta == 's')
    alert("Até mais!");
}

function ex3()
{
    //Exercício 03: Escreva um código que receba dois números inteiros e escreva todos os números break;s entre eles.

        // Recebe os dois números
        let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
        let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));
    
        // Garante que a seja o menor e b o maior
        let a = Math.min(numero1, numero2);
        let b = Math.max(numero1, numero2);
    
        // Percorre do menor ao maior e exibe apenas os break;s
        for (let i = a; i <= b; i++) 
            if (i % 2 === 0) 
                alert(i);
}
    

function ex4() 
{
    function misterio() 
    {
        let x = parseInt(prompt("Digite um número inteiro para o mistério:"));
        return x;
    }

    function teste() 
    {
        let vezes = 0;
        let x = misterio();
        let y;

        do 
        {
            y = parseInt(prompt("Digite um número inteiro:"));
            let diferenca = Math.abs(x - y);

            switch (true) {
                case diferenca === 0:
                    alert(`Parabéns, você acertou! O número era ${x}!`);
                    break;
                case diferenca <= 2:
                    alert("Está pelando!");
                    break;
                case diferenca <= 5:
                    alert("Está muito quente!");
                    break;
                case diferenca <= 10:
                    alert("Está quente!");
                    break;
                case diferenca <= 20:
                    alert("Está morno!");
                    break;
                case diferenca <= 35:
                    alert("Está frio!");
                    break;
                case diferenca <= 50:
                    alert("Está muito frio!");
                    break;
                default:
                    alert("Está congelado!");
            }

            vezes++;
        } while (x !== y);

        alert(`Você acertou após ${vezes} tentativas!`);
    }

    let repetir;
    do 
    {
        teste();

        do 
        {
            repetir = prompt("Quer repetir? (S/N)").toUpperCase();
        } while (repetir !== 'S' && repetir !== 'N');

    } while (repetir === 'S');

    alert("Fim do jogo!");
}

function ex5()
{
    //Crie um algoritmo que receba login e senha e verifique as credenciais. Caso algum deles estiver errado o programa deve retornar ao usuário quais das opções está errada, se é o login ou a senha. O programa deve bloquear o acesso após 3 tentativas erradas. Quando for a última tentativa ele deve emitir um alerta: "Última tentativa, mais um erro seu acesso será bloqueado!"
    let loginReal = "natanmauriciosantos";
    let senhaReal = "20091995";

    function lerLogin()
    {
        let tentativaLogin = prompt("Digite o login:");
        return tentativaLogin;
    }

    function lerSenha()
    {
        let tentativaSenha = prompt("Digite a senha:");
        return tentativaSenha;
    }

    let i = 0;
    let login;
    let senha;
    do
    {
        login = lerLogin();
        senha = lerSenha();

        if((login != loginReal) && (senha != senhaReal))
            alert("Login e senha inválidos!");
        else if((login == loginReal) && (senha != senhaReal))
            alert("Senha inválida!");
        else if((login != loginReal) && (senha == senhaReal))
            alert("Login inválido!");
        else
            alert("Bem-vindo!");
        i++;
        if(i == 2)
            alert("Última tentativa!");
    }while(((login != loginReal) || (senha != senhaReal)) &&  (i < 3));

    if( i == 3)
            alert("Número máximo de tentativas excedido. Acesso bloqueado!");
}

function ex6e7()
{
    //Escreva um programa que seja capaz de desenhar uma pirâmide de asteriscos. O usuário deverá informar quantos andares ele deseja que a pirâmide tenha. Aproveitando o exercício anterior, escreva um programa que consiga construir um retângulo. O usuário deve informar a largura e a altura em asteriscos
    function piramide()
    {
        let andar;
        let i;
        let j;
        let k;
        let espaco;
        let piramide = "";
        andar = prompt("Quantos andares terá a pirâmide?");
        espaco = andar - 1;
        for(i = 0; i < andar; i++)
        {
            for(j = 0; j < (espaco - i); j++)
				piramide += " ";
			for(k = 0; k < (i + 1); k++)
            {
                piramide += "* ";
            }
            piramide += "\n";
        }

        alert(piramide);
    }

    function retangulo()
    {
        let altura;
        let largura;
        let i; 
        let j;
        let retangulo = "";
        altura = prompt("Digite a altura do retângulo:");
        largura = prompt("Digite a largura do retângulo:");
        for(i = 0; i < altura; i++)
		{
			for(j = 0; j < largura; j++)
				retangulo += ("*   ");
			retangulo += "\n";
		}
        alert(retangulo);
    }
    
    function escolha()
    {
        let escolha = prompt("O que deseja:\n   1) Desenhar pirâmide\n   2) Desenhar retângulo\n   3) Parar");
        return escolha;
    }
    
    let x;
    do
    {
        x = escolha();
        switch(x)
        {
            case '1':
                piramide();
                break;
            case '2':
                retangulo();
                break;
            case '3':
                alert("Até mais!");
                break;
            
        }
    }while((x != 3));
}

function menu3()
{
    let numero = "0";

    do {
        numero = prompt("Escolha o número do exercício:\n1 - Cronômetro;\n2 - Tabuada;\n3 - Pares\n4 - Adivinhação\n5 - Login e Senha\n6 - Pirâmide e Retangulo\n0 - Sair");
        
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
                ex6e7();
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


