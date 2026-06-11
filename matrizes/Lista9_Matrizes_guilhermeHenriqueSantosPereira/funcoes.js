function preencherMatriz(l, c, givenNumber = false, number = null) {
    let mat = [], i, j
    for (i = 0; i < l; i++) {
        mat[i] = []
        for (j = 0; j < c; j++) {
            if (!givenNumber){
                mat[i][j] = Number(prompt(`Insira o valor da ${j + 1}º coluna da ${i + 1}º linha ( Matriz[${i},${j}] ):`))
            } else {
                mat[i][j] = number
            }
        }
    }
    return mat;
}

function exibirMatriz(mat = []) {
    let l = mat.length, c = mat[0].length
    document.write("<hr>Matriz:<br>")

    for (let i = 0; i < l; i++) {
        document.write("[ ")
        for (let j = 0; j < c; j++) {
            document.write(mat[i][j])
            if (j < c - 1) {
                document.write(" | ")
            }
        }
        document.write(" ]<br>")
    }

    document.write("<hr>")
}

function calcularSomaMatriz(mat = [], exibir = false) {
    let i, j, l = mat.length, c = mat[0].length, soma = 0
    for (i = 0; i < l; i++) {
        for (j = 0; j < c; j++) {
            soma += mat[i][j]
        }
    }
    if (exibir) {
        document.write(`A soma dos elementos da matriz é: ${soma}.`)
    }
    return soma
}

function calcularMediaMatriz(mat = []) {
    let soma = calcularSomaMatriz(mat)
    let media = soma / (mat.length * mat[0].length)
    document.write(`<hr> A média dos valores da Matriz é: ${media}`)
    return media
}

function encontrarMaiorValorMatriz(mat = []) {
    let i, j, l = mat.length, c = mat[0].length, maior;
    for (i = 0; i < l; i++) {
        for (j = 0; j < c; j++) {
            if (i == 0 && j == 0) {
                maior = mat[i][j]
            }
            if (mat[i][j] > maior) {
                maior = mat[i][j]
            }
        }
    }
    document.write(`<hr> O maior valor da Matriz é: ${maior}`)
    return maior
}

function encontrarMenorValorMatriz(mat = []) {
    let i, j, l = mat.length, c = mat[0].length, menor;
    for (i = 0; i < l; i++) {
        for (j = 0; j < c; j++) {
            if (i == 0 && j == 0) {
                menor = mat[i][j]
            }
            if (mat[i][j] < menor) {
                menor = mat[i][j]
            }
        }
    }
    document.write(`<hr> O menor valor da Matriz é: ${menor}`)
    return menor
}

function exibirParesMatriz(mat = []) {
    let i, j, l = mat.length, c = mat[0].length, vetorPares = [], iPares = 0
    for (i = 0; i < l; i++) {
        for (j = 0; j < c; j++) {
            if (mat[i][j] % 2 == 0) {
                vetorPares[iPares] = mat[i][j]
                iPares++
            }
        }
    }
    document.write(`<hr>Números pares da matriz: [ ${vetorPares} ]`)
    return vetorPares
}

function exibirImparesMatriz(mat = [], posicoes = false) {
    let i, j, l = mat.length, c = mat[0].length, vetorImpares = [], iImpares = 0
    for (i = 0; i < l; i++) {
        for (j = 0; j < c; j++) {
            if (mat[i][j] % 2 != 0) {
                vetorImpares[iImpares] = mat[i][j]
                iImpares++

                if (posicoes) {
                    document.write(`Valor ${mat[i][j]} encontrado em [${i},${j}]<br>`)
                }
            }
        }
    }
    document.write(`<hr>Números ímpares da matriz: [ ${vetorImpares} ]`)
    return vetorImpares
}

function contarElementosMaioresQue(mat = [], criterio, exibir = false) {
    let i, j, l = mat.length, c = mat[0].length, contador = 0
    for (i = 0; i < l; i++) {
        for (j = 0; j < c; j++) {
            if (mat[i][j] > criterio) {
                contador++
            }
        }
    }

    if (exibir) {
        if (contador > 0) {
            document.write(`Foram encontrados ${contador} valor(es) maior(es) que ${criterio} na matriz.`)
        } else {
            document.write(`Não foram encontrados elementos maiores que ${criterio}.`)
        }
    }

    return contador
}

function buscarElementoNaMatriz(mat = [], target) {
    let i, j, l = mat.length, c = mat[0].length, contador = 0
    for (i = 0; i < l; i++) {
        for (j = 0; j < c; j++) {
            if (mat[i][j] == target) {
                document.write(`Valor ${target} encontrado na linha ${i + 1}, coluna ${j + 1}! [${i},${j}]<br>`)
                contador++
            }
        }
    }
    if (contador == 0) {
        document.write(`Valor ${target} não foi encontrado na matriz.`)
    }
}

function calcularSomaVetor(vetor = [], exibir = false) {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
    if (exibir) {
        document.write(`<hr>Soma dos números ímpares: ${soma}`)
    }

    return soma
}

function valoresEmPosicaoPar(mat = []) {
    let i, j, l = mat.length, c = mat[0].length, contador = 0
    document.write(`Números onde a soma de linha + coluna é par: <hr>`)
    for (i = 0; i < l; i++) {
        for (j = 0; j < c; j++) {
            if ((i + j) % 2 == 0) {
                document.write(`Número ${mat[i][j]} em ${i},${j} ; Linha ${i} + Coluna ${j} = ${i + j} <br>`)
            }
        }
    }

}

function triplicarValoresMatriz(mat = []) {
    let i, j, l = mat.length, c = mat[0].length, matrizTriplicada = []
    for (let i = 0; i < l; i++) {
        matrizTriplicada[i] = []
        for (let j = 0; j < c; j++) {
            matrizTriplicada[i][j] = mat[i][j] * 3
        }
    }

    return matrizTriplicada
}