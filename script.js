const spanOperation = document.querySelector('#span-operation');
const selectResult = document.querySelector('.select-operation');

document.getElementById('btn').addEventListener('click', function() {
    // Obter o valor de epsilon
    const epsilon = parseFloat(document.getElementById('epsilon').value);
  
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
  
    // Definir os valores iniciais para as variáveis x1, x2 e x3
    let x1 = 0;
    let x2 = 0;
    let x3 = 0;
  
    // Número máximo de iterações
    const maxIteracoes = 100;
  
    // Variáveis auxiliares
    let iteracao = 0;
    let erro = 1;
  
    // Executar o método de Gauss-Seidel
    while (iteracao < maxIteracoes && erro > epsilon) {
      // Salvar os valores antigos de x1, x2 e x3
      const x1Anterior = x1;
      const x2Anterior = x2;
      const x3Anterior = x3;
  
      // Calcular os novos valores de x1, x2 e x3
      x1 = (b1 - (a12 * x2) - (a13 * x3)) / a11;
      x2 = (b2 - (a21 * x1) - (a23 * x3)) / a22;
      x3 = (b3 - (a31 * x1) - (a32 * x2)) / a33;
  
      // Calcular o erro
      erro = Math.abs((x1 - x1Anterior) / x1) +
        Math.abs((x2 - x2Anterior) / x2) +
        Math.abs((x3 - x3Anterior) / x3);
  
      // Incrementar o número de iterações
      iteracao++;
    }
  
    // Exibir o resultado
    const output = document.getElementById('output');
    output.innerHTML = `
      <p>x1: ${x1}</p>
      <p>x2: ${x2}</p>
      <p>x3: ${x3}</p>
      <p>Número de iterações: ${iteracao}</p>
      <p>Erro: ${erro}</p>
    `;
  });

  // Verificação de qual Operação usar

  function changeOperation(){
    
  }
  