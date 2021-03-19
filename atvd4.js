
const numero = prompt("Informe um numero:");
let palavras = new Array();

for (let i = 0; i < numero; i++) {
    const palavra = prompt("infome uma palavra");
    console.log(palavra);
    palavras.push(palavra);
}

for (let i = palavras.length-1; i >=0 ; i--) {
    const palavra = palavras[i];
    console.log(`Palavra ${i + 1}: ${palavra}`);
}


