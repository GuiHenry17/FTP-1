/* ============================================================
   funcoes.js — Sistema de Lanchonete
   Fundamentos de Programação  |  TSI  |  UTFPR Campus Toledo
   ============================================================ */

// Preenche um vetor com nomes informados pelo usuario.
// Parâmetros: n = tamanho do vetor
// Retorna: vetor de strings
function preencherVetor(n) {
   let vetProdutos = []
   for (i = 0; i < n; i++) {
      vetProdutos[i] = prompt(`Informe o nome do ${i + 1}o. produto: `);
   }
   return vetProdutos
}

// Preenche um vetor com preços informados pelo usuario.
// Parâmetros: n = tamanho do vetor
// Retorna: vetor de números
function preencherPrecos(n) {
   let vetPrecos = []
   for (i = 0; i < n; i++) {
      vetPrecos[i] = Number(prompt(`Informe o preço do ${i + 1}o. produto: `));

      while (vetPrecos[i] < 0 || isNaN(vetPrecos[i])) {
         vetPrecos[i] = Number(prompt("Valor inválido. Preço do produto " + (i + 1) + ": R$ "));
      }
   }
   return vetPrecos
}

// Calcula e retorna a média aritmética dos elementos do vetor.
// Parâmetros: n = tamanho, vet = vetor de números
// Retorna: número (média)
function calcularMedia(n, vet) {
   let soma = 0, media
   for (i = 0; i < n; i++) {
      soma += vet[i]
   }
   media = soma / n

   return media

}

// Retorna a posição (índice) do maior elemento do vetor.
// Parâmetros: n = tamanho, vet = vetor de números
// Retorna: número (índice)
function encontrarMaior(n, vet) {
   let maior = vet[0], indice = 0
   for (i = 0; i < n; i++) {

      if (vet[i] > maior) {
         maior = vet[i]
         indice = i
      }
   }
   return indice
}

// Retorna a posição (índice) do menor elemento do vetor.
// Parâmetros: n = tamanho, vet = vetor de números
// Retorna: número (índice)
function encontrarMenor(n, vet) {
   let menor = vet[0], indice = 0
   for (i = 0; i < n; i++) {
      if (i == 0) {
         menor = vet[i]
      }

      if (vet[i] < menor) {
         menor = vet[i]
         indice = i
      }
   }
   return indice
}
