function exibirBemVindo(cliente) {
    document.write(`Boa tarde, ${cliente}! <br>`)
}

function exibirPedido(nomeLanche, quantidade) {
    document.write(`Pedido: <br> Quandtidade: ${quantidade} <br>Produto:  ${nomeLanche} <br><br>`);
}

function calcularTotal(preco, quantidade) {
    return preco * quantidade;
}