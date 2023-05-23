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

    console.log(a31 + a11);
    
});
