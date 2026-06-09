// BÁSICO

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

function verficarAprovacao(vetor = [], criterio) {
    let i
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] >= criterio) {
            document.write(`${i + 1}º nota: ${vetor[i]} - Aprovado <br>`)
        } else {
            document.write(`${i + 1}º nota: ${vetor[i]} - Reprovado <br>`)
        }
    }
}

// INTERMEDIÁRIO

function encontrarIndiceDoMaiorValor(vetor = []) {
    let i, maiorValor, indiceDoMaiorValor;
    for (i = 0; i < vetor.length; i++) {
        if (i == 0) {
            maiorValor = vetor[i]
            indiceDoMaiorValor = i
        }
        if (vetor[i] > maiorValor) {
            maiorValor = vetor[i]
            indiceDoMaiorValor = i
        }
    }

    return indiceDoMaiorValor
}

function verificarExistenciaDeValor(vetor = [], numeroProcurado) {
    let i, encontrado;
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] == numeroProcurado) {
            encontrado = true
            break;
        }
        else {
            encontrado = false
        }
    }

    if (encontrado) {
        document.write(`<hr>O número ${numeroProcurado} está presente no vetor.`)
    } else {
        document.write(`<hr>O número ${numeroProcurado} NÃO está presente no vetor.`)
    }
}

function contarNotasAcimaDaMedia(vetor = [], vetorOpcional = []) {
    let media = calcularMedia(vetor), contador = 0, i, contadorVetorOpcional = 0;
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] > media) {
            contador++
            if (vetorOpcional) {
                vetorOpcional[contadorVetorOpcional] = vetor[i]
                contadorVetorOpcional++
            }
        }
    }

    return contador
}

function contarMultiplosDe3(vetor = [], vetorMultiplosDe3 = []) {
    let contador = 0, i, contadorMultiplosDe3 = 0;
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] % 3 == 0) {
            contador++
            if (vetorMultiplosDe3) {
                vetorMultiplosDe3[contadorMultiplosDe3] = vetor[i]
                contadorMultiplosDe3++
            }
        }
    }
    return contador
}

function calcularSomaDosPares(vetor = []) {
    let soma = 0, i;
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            soma += vetor[i]
        }
    }
    return soma
}

function contarNumerosIgualA(vetor = [], criterio, vetorOpcional = []) {
    let contador = 0, i, iVOpcional = 0;
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] == criterio) {
            contador++
            if (vetorOpcional) {
                vetorOpcional[iVOpcional] = vetor[i]
                iVOpcional++
            }
        }
    }
    return contador
}

function contarNumerosEntre(vetor = [], limiteInferior, limiteSuperior, vetorOpcional = []) {
    let contador = 0, i, iVOpcional = 0;
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] >= limiteInferior && vetor[i] <= limiteSuperior) {
            contador++
            if (vetorOpcional) {
                vetorOpcional[iVOpcional] = vetor[i]
                iVOpcional++
            }
        }
    }
    return contador
}

function encontrarIndiceDoMenorValor(vetor = []) {
    let i, menorValor, indiceDoMenorValor;
    for (i = 0; i < vetor.length; i++) {
        if (i == 0) {
            menorValor = vetor[i]
            indiceDoMenorValor = i
        }
        if (vetor[i] < menorValor) {
            menorValor = vetor[i]
            indiceDoMenorValor = i
        }
    }

    return indiceDoMenorValor
}

function calcularDiferenca(vetor = []) {
    let maiorValor = encontrarMaior(vetor), menorValor = encontrarMenor(vetor)
    return maiorValor - menorValor
}

// LANCHONETE

function contarNumerosMaiorOuIgualA(vetor = [], criterio, vetorOpcional = []) {
    let contador = 0, i, iVOpcional = 0;
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] >= criterio) {
            contador++
            if (vetorOpcional) {
                vetorOpcional[iVOpcional] = vetor[i]
                iVOpcional++
            }
        }
    }
    return contador
}

function transformarValoresEmReal(vetor = []) {
    let i;
    for (i = 0; i < vetor.length; i++) {
        Number(vetor[i])
        vetor[i] = `R$ ${vetor[i].toFixed(2)}`
    }
}

function validarNotas(vetor = []) {
    let i;
    for (i = 0; i < vetor.length; i++) {
        while (vetor[i] < 0 || vetor[i] > 10) {
            alert(`A ${i + 1}º nota deve ser um valor numérico entre 0 e 10!`)
            vetor[i] = Number(prompt(`Insira a ${i + 1}º nota:`))
        }
    }
}

function verificarTempoCritico(vetor = [], limite = 15, pedidosTCriticos = []) {
    let i, quantidade = 0

    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] > limite) {
            pedidosTCriticos[quantidade] = i + 1
            quantidade++
        }
    }

    return quantidade
}

//DESAFIO

function verificarDiasFechados(vetor = [], diasFechados = []) {
    let i, quantidade = 0

    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] == 0) {
            diasFechados[quantidade] = i + 1
            quantidade++
        }
    }

    return quantidade
}