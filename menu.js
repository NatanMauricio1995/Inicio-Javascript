const prompt = require('prompt-sync')(); // se ainda não instalou, veja abaixo
const { menu1 } = require('./exercicio1');

const numero = prompt("Escolha o número do exercício:\n1 - Exercícios Básicos\n2 - Outro grupo de exercícios\n");

switch (numero) {
    case "1":
        menu1();
        break;
    case "2":
        console.log("Em desenvolvimento...");
        break;
    default:
        console.log("Opção inválida");
}