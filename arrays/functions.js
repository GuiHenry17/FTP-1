function preencherCardapio(vetor, n) {
    for (i = 0; i < n; i++) {
        vetor[i] = prompt(`Informe o nome do ${i + 1}º produto: `)
    }
    return vetor;
}

function exibirCardapio(vetor) {
    for (i = 0; i < vetor.length; i++) {
        document.write(`${i + 1}º produto: ${vetor[i]} <br>`)
    }
}

function preencherPrecos(vetor, n) {
    for (i = 0; i < n; i++) {
        vetor[i] = prompt(`Informe o preço do ${i + 1}º produto: `)
    }
    return vetor;
}

function exibirPrecos(vetor) {
    for (i = 0; i < vetor.length; i++) {
        document.write(`${i + 1}º produto: R$ ${Number(vetor[i]).toFixed(2)} <br>`)
    }
}
