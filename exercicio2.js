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

        
    }
    

    deficiente = prompt("Possui alguma deficiência?\n   1 - Sim\n   2 - Não");
    gestante = prompt("Está gestando?\n   1 - Sim\n   2 - Não");

}

ex3()