function preencherMatriz(l, c) {
    let mat = [], i, j
    for (i = 0; i < l; i++) {
        mat[i] = []
        for (j = 0; j < c; j++) {
            mat[i][j] = Number(prompt(`Insira o valor da ${j + 1}º coluna da ${i + 1}º linha ( Matriz[${i},${j}] ):`))
        }
    }
    return mat;
}

function exibirMatriz1(mat = []) {
    let i, j, l = mat.length, c = mat[0].length
    for (i = 0; i < l; i++) {
        for (j = 0; j < c; j++) {
            document.write(`Matriz[${i}][${j}] = ${mat[i][j]}<br>`)
        }
    }
}

function exibirMatriz2(mat = []) {
    let i, j, l = mat.length, c = mat[0].length
    for (i = 0; i < l; i++) {
        for (j = 0; j < c; j++) {
            if (j < c - 1) {
                document.write(`${mat[i][j]} - `)
            } else {
                document.write(`${mat[i][j]}<br>`)
            }
        }
    }
}

function calcularSomaMatriz(mat = []) {
    let i, j, l = mat.length, c = mat[0].length, soma = 0
    for (i = 0; i < l; i++) {
        for (j = 0; j < c; j++) {
            soma += mat[i][j]
        }
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

function exibirImparesMatriz(mat = []) {
    let i, j, l = mat.length, c = mat[0].length, vetorImpares = [], iImpares = 0
    for (i = 0; i < l; i++) {
        for (j = 0; j < c; j++) {
            if (mat[i][j] % 2 != 0) {
                vetorImpares[iImpares] = mat[i][j]
                iImpares++
            }
        }
    }
    document.write(`<hr>Números ímpares da matriz: [ ${vetorImpares} ]`)
    return vetorImpares
}