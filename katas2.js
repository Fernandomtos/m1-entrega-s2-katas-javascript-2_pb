// Soma

function add(numeroA, numeroB) {
    return numeroA + numeroB;
}

console.log(add(2,4));

// Multiplicação

function multiply(repeticao, multiplicadorB) {
    let multiplicador = 0;
    for (let i=0; i<repeticao; i++) {
        multiplicador += (add(0, multiplicadorB));
    }
    return multiplicador;
}

console.log(multiply(6,8));

// Potência

function power(potA, repeticao) {
    let resultado = 1;
    for (let i=0; i<repeticao; i++) {
        resultado = multiply(potA, resultado);
    }
    return resultado;
}

console.log(power(2,8));

// Fatorial

function factorial(numeroFat) {
    let j=1;
    let fatorial = multiply(j, numeroFat);
    for (j=2; j<numeroFat; j++) {
        fatorial = multiply(j, fatorial);
    }
    return fatorial;
}

console.log(factorial(4));
