function preencherVetor(nEntradas) {
    let entradas = [], i;
    for (i = 0; i < nEntradas; i++) {
        let entrada = prompt(`Insira o ${i + 1}º valor:`)

        if (isFinite(entrada)) {
            entrada = Number(entrada)
        }

        entradas[i] = entrada
    }

    return entradas
}

function validarNumeros(vetor = []) {
    let i;
    for (i = 0; i < vetor.length; i++) {
        while (isNaN(vetor[i])) {
            alert(`O ${i + 1}º valor deve ser um valor numérico!`)
            vetor[i] = Number(prompt(`Insira o ${i + 1}º valor:`))
        }
    }
}

function exibirElementosDeVetor(vetor = [], label) {
    let i;
    for (i = 0; i < vetor.length; i++) {
        document.write(`${i + 1}º ${label}: ${vetor[i]} <br>`)
    }
}

function transformarEmInteiros(vetor = []) {
    let i;
    for (i = 0; i < vetor.length; i++) {
        vetor[i] = parseInt(vetor[i])
    }
}

function exibirVetor(vetor = []) {
    return `[${vetor}]`
}

function preencherElemetosPares(vetor = []) {
    let pares = [], iPares = 0, i;
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            pares[iPares] = vetor[i]
            iPares++
        }
    }
    return pares
}

function calcularSoma(vetor = []) {
    let soma = 0, i;
    for (i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
    return soma
}

function calcularMedia(vetor = []) {
    let media, acumulador = 0, i;
    for (i = 0; i < vetor.length; i++) {
        acumulador += vetor[i]
    }
    media = acumulador / vetor.length

    return media
}

function inverterVetor(vetor = []) {
    let vetorInvertido = [], i, iVInvertido = 0;
    for (i = (vetor.length - 1); i >= 0; i--) {
        vetorInvertido[iVInvertido] = vetor[i]
        iVInvertido++
    }
    return vetorInvertido
}

function contarNumerosMaiorQue(vetor = [], criterio, vetorOpcional = []) {
    let contador = 0, i, iVOpcional = 0;
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] > criterio) {
            contador++
            if (vetorOpcional) {
                vetorOpcional[iVOpcional] = vetor[i]
                iVOpcional++
            }
        }
    }

    return contador
}

function contarNumerosMenorQue(vetor = [], criterio, vetorOpcional = []) {
    let contador = 0, i, iVOpcional = 0;
    for (i = 0; i < vetor.length; i++)
        if (vetor[i] < criterio) {
            contador++
            if (vetorOpcional) {
                vetorOpcional[iVOpcional] = vetor[i]
                iVOpcional++
            }
        }

    return contador
}

function encontrarMaior(vetor = []) {
    let i, maior;
    for (i = 0; i < vetor.length; i++) {
        if (i == 0) {
            maior = vetor[i]
        }
        if (vetor[i] > maior) {
            maior = vetor[i]
        }
    }

    return maior
}

function encontrarMenor(vetor = []) {
    let i, menor;
    for (i = 0; i < vetor.length; i++) {
        if (i == 0) {
            menor = vetor[i]
        }
        if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }

    return menor
}

