let numero = prompt("Escolha o número do exercício:\n   1) Lista 1\n   2) Lista 2\n   3) Lista 3\n   4) Lista 4");

switch (numero) {
    case "1":
        menu1(); // chama a função definida em exercicio1.js
        break;
    case "2":
        menu2();
        break;
    case "3":
        menu3();
        break;
    case "4":
        menu4();
        break;

        console.log("Opção inválida");
}
