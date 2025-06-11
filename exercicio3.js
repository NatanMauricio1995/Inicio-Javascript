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



