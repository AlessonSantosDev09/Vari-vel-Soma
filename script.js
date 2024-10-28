function calcularSoma() {
    let INDICE = 12;
    let SOMA = 0;
    let K = 1;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    document.getElementById("resultado").innerText = 
        "O valor da SOMA é: " + SOMA;
}  