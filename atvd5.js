const nome = prompt("Informe seu nome:");
const idade = prompt("Informe sua idade:");
parseInt(idade);

const aposentadoria = calcularIdade(idade);

if (aposentadoria > 0) {
    console.log(`Falta ${aposentadoria} ano(s) para vocẽ se aposentar`);
    
} else {
    console.log("Você já é aposentado!!");
   
}

//funcao
function calcularIdade(anos) {
    if (anos < 65) {
        return 65 - anos;
    } else {
        return 0;
    }
}
  