const btnCalc = document.querySelector("#btn");

btnCalc.addEventListener("click", function () {
    // Primeiro Função
    const a11 = parseFloat(document.querySelector("#a11").value);
    const a12 = parseFloat(document.querySelector("#a12").value);
    const a13 = parseFloat(document.querySelector("#a13").value);
    const b1 = parseFloat(document.querySelector('#b1').value);

    // Segunda Função

    const a21 = parseFloat(document.querySelector("#a21").value);
    const a22 = parseFloat(document.querySelector("#a22").value);
    const a23 = parseFloat(document.querySelector("#a23").value);
    const b2 = parseFloat(document.querySelector('#b2').value);

    // Terceira Função

    const a31 = parseFloat(document.querySelector('#a31').value);
    const a32 = parseFloat(document.querySelector('#a32').value);
    const a33 = parseFloat(document.querySelector('#a33').value);
    const b3 = parseFloat(document.querySelector('#b3').value);

    function gaussSolver(A, b){
        var i, j, k, l, m;
        //ETAPA DE ESCALONAMENTO
        for(k = 0; k < A.length - 1; k++){
            //procura o maior k-ésimo coeficiente em módulo
            var max = Math.abs(A[k][k]);
            var maxIndex = k;
            for(i = k + 1; i < A.length; i++){
                if(max < Math.abs(A[i][k])){
                    max = Math.abs(A[i][k]);
                    maxIndex = i;
                }
            }
            if(maxIndex != k){
                /*
                 troca a equação k pela equação com o
                 maior k-ésimo coeficiente em módulo
                 */
                for(j = 0; j < A.length; j++){
                    var temp = A[k][j];
                    A[k][j] = A[maxIndex][j];
                    A[maxIndex][j] = temp;
                }
                var temp = b[k];
                b[k] = b[maxIndex];
                b[maxIndex] = temp;
            }
            //Se A[k][k] é zero, então a matriz dos coeficiente é singular
            //det A = 0
            if(A[k][k] == 0){
                return null;
            }else{
                //realiza o escalonamento
                for(m = k + 1; m < A.length; m++){
                    var F = -A[m][k] / A[k][k];
                    A[m][k] = 0; //evita uma iteração
                    b[m] = b[m] + F * b[k];
                    for(l = k + 1; l < A.length; l++){
                        A[m][l] = A[m][l] + F * A[k][l];
                    }
                }
            }
        }
        //ETAPA DE RESOLUÇÃO DO SISTEMA
        var X = [];
        for(i = A.length - 1; i >= 0; i--){
            X[i] = b[i];
            for(j = i + 1; j < A.length; j++){
                X[i] = X[i] - X[j] * A[i][j];
            }
            X[i] = X[i] / A[i][i];
        }
        return X;
    }

    console.log(gaussSolver());
    
});

// Eliminação de Gauss

function gaussSolver(A, b){
    var i, j, k, l, m;
    //ETAPA DE ESCALONAMENTO
    for(k = 0; k < A.length - 1; k++){
        //procura o maior k-ésimo coeficiente em módulo
        var max = Math.abs(A[k][k]);
        var maxIndex = k;
        for(i = k + 1; i < A.length; i++){
            if(max < Math.abs(A[i][k])){
                max = Math.abs(A[i][k]);
                maxIndex = i;
            }
        }
        if(maxIndex != k){
            /*
             troca a equação k pela equação com o
             maior k-ésimo coeficiente em módulo
             */
            for(j = 0; j < A.length; j++){
                var temp = A[k][j];
                A[k][j] = A[maxIndex][j];
                A[maxIndex][j] = temp;
            }
            var temp = b[k];
            b[k] = b[maxIndex];
            b[maxIndex] = temp;
        }
        //Se A[k][k] é zero, então a matriz dos coeficiente é singular
        //det A = 0
        if(A[k][k] == 0){
            return null;
        }else{
            //realiza o escalonamento
            for(m = k + 1; m < A.length; m++){
                var F = -A[m][k] / A[k][k];
                A[m][k] = 0; //evita uma iteração
                b[m] = b[m] + F * b[k];
                for(l = k + 1; l < A.length; l++){
                    A[m][l] = A[m][l] + F * A[k][l];
                }
            }
        }
    }
    //ETAPA DE RESOLUÇÃO DO SISTEMA
    var X = [];
    for(i = A.length - 1; i >= 0; i--){
        X[i] = b[i];
        for(j = i + 1; j < A.length; j++){
            X[i] = X[i] - X[j] * A[i][j];
        }
        X[i] = X[i] / A[i][i];
    }
    return X;
}
