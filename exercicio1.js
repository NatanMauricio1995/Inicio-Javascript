//Exercício 01

function ex1()
{
    //Exercício 1. Escreva um programa que faça a soma entre 2 números.

    let numero1 = prompt("Digite o primeiro número:");
    let numero2 = prompt("Digite o segundo número:");
    let resultado = Number(numero1) + Number(numero2);

    alert("Resultado: " + numero1 + " + " + numero2 + " = " + resultado);
}

function ex2()
{
    //Exercício 2. Escreva um programa que pergunte o nome e o sobrenome do usuário e escreva na tela: "Olá, -usuário-".

    let nome = prompt("Qual seu nome?");
    let sobrenome = prompt("Qual é seu sobrenome?");

    alert("Olá, " + nome + " " + sobrenome);
}

function ex3()
{
    //Exercício 3. Escreva uma calculadora que receba um valor em reais e converta para dólar. Considere o valor do dólar a R$5,25.

    let real = prompt("Digite o valor em reais para ser convertido em dolar:");
    
    let dolar = Number(real) / 5.25;
    
    alert("R$ " + real + " = " + "U$ " + dolar.toFixed(2));
}

function ex4()
{
    //Exercício 4. Construa um algoritmo que leia um número inteiro na tela e responda o número antecessor e o sucessor.

    let numero = prompt("Digite um número inteiro:");

    let anterior = Number(numero) - 1;
    let posterior = Number(numero) + 1;

    alert("O número anterior a " + numero + " é: " + anterior + "\nO número posterior a " + numero + " é: " + posterior);
}

function ex5()
{
    //Exercício 5. Construa um algoritmo que calcule o valor de um terreno baseado na sua área e valor por m2.

    let area = prompt("Digite a área do terreno em m²:");
    let valor = prompt("Digite o valor do m²:");

    let total = Number(area) * Number(valor);

    alert("Valor total é de R$" + total.toFixed(2));
}

function ex6()
{
    //Execício 6. Construa um algoritmo que leia 1- a distância percorrida por um veículo em km 2- o total gasto em combustível em litros. No final deverá ser respondido o consumo médio deste veículo em km/l.

    let distancia = prompt("Digite a distância percorrida em km:");
    let gasolina = prompt("Digite o gasto total de combustível em L:");

    let consumo = Number(distancia) / Number(gasolina);

    alert("Consumo médio " + consumo.toFixed(2) + "km/L");
}

function ex7()
{
    //Exercício 7. Escreva um programa que receba quatro notas de um aluno e calcule a média aritmética dessas notas.

    let nota1 = prompt("Digite a primeira nota:");
    let nota2 = prompt("Digite a segunda nota:");
    let nota3 = prompt("Digite a terceira nota:");
    let nota4 = prompt("Digite a quarta nota:");

    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4;

    alert ("Média = " + media.toFixed(2));
}

function ex8()
{
    //Exercício 8. Suponha que voce trabalhe em um laboratório e seu colega mediu a temperatura de um objeto em Fahrenheit. Escreva um programa capaz de converter em Celsius.

    let f = prompt("Digite a temperatura em Fahrenheit (°F):");

    let c = (Number(f) - 32) * 5/9;

    alert(Number(f).toFixed(2) + "°F = " + c.toFixed(2) + "°C");
}

function menu1()
{
    let numero = "0";

    do {
        numero = prompt("Escolha o número do exercício:\n   1) Soma;\n   2) Olá!\n   3) Conversor de Dolar\n   4) Anterior e posterior de um número inteiro\n   5) Valor de terreno\n   6) Consumo de combustível\n   7) Média de notas\n   8) Conversão de temperaturas\n   0) Sair");
        
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