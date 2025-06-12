function ex1()
{
        //Exercício 01: Voce é gerente de um supermercado e sabe que os valores das vendas do dia são gravados em um vetor. Digite um código que faça o fechamento (soma) de vendas do dia de maneira automatizada.
    function checar(itens, x)
    {
        return itens.some(linha => linha.includes(x));
    }

    function posicao(itens, x)
    {
        for (let i = 0; i < itens.length; i++)
        {
            let j = itens[i].indexOf(x);
            if (j !== -1)
            {
                return [i, j];
            }
        }
        return null;
    }

    function inserir(itens)
    {
        let item, valor, escolha, verificar;
        do
        {
            escolha = prompt("Digite sua escolha:\n   1) Inserir novos itens\n   2) Voltar");
            if (escolha === '1')
            {
                do
                {
                    item = prompt("Digite o nome do produto que deseja inserir:").toUpperCase();
                    verificar = checar(itens, item);
                    if (verificar)
                    {
                        alert("Item já cadastrado!");
                    }
                }
                while (verificar);

                valor = parseFloat(prompt("Digite o valor do produto (somente numérico):"));
                itens.push([item, valor, 0]);
            }
        }
        while (escolha !== '2');
    }

    function vendas(itens)
    {
        let item, quantidade, escolha, verificar, coordenada;
        do
        {
            escolha = prompt("Digite sua escolha:\n   1) Adicionar uma venda\n   2) Voltar");
            if (escolha === '1')
            {
                do
                {
                    item = prompt("Digite o nome do produto que foi vendido:").toUpperCase();
                    verificar = checar(itens, item);
                    if (!verificar)
                    {
                        alert("Produto não cadastrado!");
                    }
                }
                while (!verificar);

                quantidade = parseInt(prompt("Digite a quantidade do produto que foi vendida:"), 10);
                coordenada = posicao(itens, item);
                itens[coordenada[0]][2] += quantidade;
                alert("Venda registrada com sucesso!");
            }
        }
        while (escolha !== '2');
    }

    function total(itens)
    {
        let resumo = "Fechamento do Caixa:\n\n";
        let somaTotal = 0;

        for (let i = 0; i < itens.length; i++)
        {
            let nome = itens[i][0];
            let preco = itens[i][1];
            let quantidade = itens[i][2];
            let subtotal = preco * quantidade;

            resumo += `${nome}: R$${preco.toFixed(2)} x ${quantidade} = R$${subtotal.toFixed(2)}\n`;
            somaTotal += subtotal;
        }

        resumo += `\nTOTAL DAS VENDAS: R$${somaTotal.toFixed(2)}`;
        alert(resumo);
    }

    let itens = [];
    let escolha = '-1';

    do
    {
        escolha = prompt("Escolha uma das opções:\n   1) Inserir produto\n   2) Venda de um produto\n   3) Fechamento do Caixa\n   0) Sair");
        switch (escolha)
        {
            case '1':
                inserir(itens);
                break;
            case '2':
                vendas(itens);
                break;
            case '3':
                total(itens);
                break;
        }
    }
    while (escolha !== '0');
}

ex1();
