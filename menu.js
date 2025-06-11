let numero = prompt("Escolha o número do exercício:\n1 - Lista 1\n2 - Lista 2\n");

switch (numero) {
    case "1":
        menu1(); // chama a função definida em exercicio1.js
        break;
    case "2":
        menu2();
        break;
    default:
        console.log("Opção inválida");
}
