const spanOperation = document.querySelector('#span-operation');
const selectResult = document.querySelector('.select-operation');

document.getElementById('btn').addEventListener('click', function() {
  // Obter o valor de epsilon
  const epsilon = parseFloat(document.getElementById('epsilon-input').value);

  // Obter os valores dos coeficientes e termos independentes das equações
  const a11 = parseFloat(document.getElementById('a11').value);
  const a12 = parseFloat(document.getElementById('a12').value);
  const a13 = parseFloat(document.getElementById('a13').value);
  const b1 = parseFloat(document.getElementById('b1').value);

  const a21 = parseFloat(document.getElementById('a21').value);
  const a22 = parseFloat(document.getElementById('a22').value);
  const a23 = parseFloat(document.getElementById('a23').value);
  const b2 = parseFloat(document.getElementById('b2').value);

  const a31 = parseFloat(document.getElementById('a31').value);
  const a32 = parseFloat(document.getElementById('a32').value);
  const a33 = parseFloat(document.getElementById('a33').value);
  const b3 = parseFloat(document.getElementById('b3').value);

  const selectedOperation = selectResult.value;

  if (selectedOperation === 'EliminacaoGauss-Seidel') {
    realizarMetodoGaussSeidel(a11, a12, a13, b1, a21, a22, a23, b2, a31, a32, a33, b3, epsilon);
  } else if (selectedOperation === 'EliminacaoGauss') {
    realizarMetodoEliminacaoGauss(a11, a12, a13, b1, a21, a22, a23, b2, a31, a32, a33, b3);
  } else {
    // Operação não suportada
    const output = document.getElementById('output');
    output.innerHTML = 'Operação não suportada.';
  }
});

function realizarMetodoGaussSeidel(a11, a12, a13, b1, a21, a22, a23, b2, a31, a32, a33, b3, epsilon) {
  let x1 = 0;
  let x2 = 0;
  let x3 = 0;
  let x1Anterior = 0;
  let x2Anterior = 0;
  let x3Anterior = 0;
  let erro = Infinity;
  let iteracao = 0;
  const maxIteracoes = 100;

  while (erro > epsilon && iteracao < maxIteracoes) {
    x1Anterior = x1;
    x2Anterior = x2;
    x3Anterior = x3;

    x1 = (b1 - (a12 * x2Anterior) - (a13 * x3Anterior)) / a11;
    x2 = (b2 - (a21 * x1) - (a23 * x3Anterior)) / a22;
    x3 = (b3 - (a31 * x1) - (a32 * x2)) / a33;

    if (a22 !== 0) {
      x2 = (b2 - (a21 * x1) - (a23 * x3Anterior)) / a22;
    } else {
      // Tratar a situação em que a22 é zero
      // Aqui você pode atribuir um valor padrão ou tomar alguma outra decisão
      x2 = 0;
    }

    if (a33 !== 0) {
      x3 = (b3 - (a31 * x1) - (a32 * x2)) / a33;
    } else {
      // Tratar a situação em que a33 é zero
      // Aqui você pode atribuir um valor padrão ou tomar alguma outra decisão
      x3 = 0;
    }

    erro = Math.max(
      Math.abs(x1 - x1Anterior),
      Math.abs(x2 - x2Anterior),
      Math.abs(x3 - x3Anterior)
    );

    iteracao++;
  }

  if (iteracao < maxIteracoes) {
    const output = document.getElementById('output');
    output.innerHTML = `x1 = ${x1.toFixed(4)}, x2 = ${x2.toFixed(4)}, x3 = ${x3.toFixed(4)} <br> Número de iterações: ${iteracao}`;
  } else {
    const output = document.getElementById('output');
    output.innerHTML = 'O método não convergiu.';
  }
}



function realizarMetodoEliminacaoGauss(a11, a12, a13, b1, a21, a22, a23, b2, a31, a32, a33, b3) {
  // Aplicar a eliminação de Gauss

  // Converter para matriz aumentada
  const matrizAumentada = [
    [a11, a12, a13, b1],
    [a21, a22, a23, b2],
    [a31, a32, a33, b3]
  ];

  const n = matrizAumentada.length;

  for (let i = 0; i < n - 1; i++) {
    // Encontrar o elemento pivô
    let maxPivot = Math.abs(matrizAumentada[i][i]);
    let maxRow = i;
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(matrizAumentada[j][i]) > maxPivot) {
        maxPivot = Math.abs(matrizAumentada[j][i]);
        maxRow = j;
      }
    }

    // Trocar as linhas para garantir o pivô máximo
    if (maxRow !== i) {
      for (let k = 0; k < n + 1; k++) {
        const temp = matrizAumentada[maxRow][k];
        matrizAumentada[maxRow][k] = matrizAumentada[i][k];
        matrizAumentada[i][k] = temp;
      }
    }

    // Eliminação Gaussiana
    for (let j = i + 1; j < n; j++) {
      const ratio = matrizAumentada[j][i] / matrizAumentada[i][i];
      for (let k = i; k < n + 1; k++) {
        matrizAumentada[j][k] -= ratio * matrizAumentada[i][k];
      }
    }
  }

  // Resolver o sistema usando substituição retroativa
  const solucoes = new Array(n);

  solucoes[n - 1] = matrizAumentada[n - 1][n] / matrizAumentada[n - 1][n - 1];

  for (let i = n - 2; i >= 0; i--) {
    let soma = 0;
    for (let j = i + 1; j < n; j++) {
      soma += matrizAumentada[i][j] * solucoes[j];
    }
    solucoes[i] = (matrizAumentada[i][n] - soma) / matrizAumentada[i][i];
  }

  // Exibir o resultado
  exibirResultado(solucoes[0], solucoes[1], solucoes[2]);
}

function exibirResultado(x1, x2, x3) {
  const output = document.getElementById('output');
  output.innerHTML = `x1 = ${x1.toFixed(4)}, x2 = ${x2.toFixed(4)}, x3 = ${x3.toFixed(4)}`;
}


