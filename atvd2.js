//pedir dados
const nome = prompt("Informe seu nome:");
const peso = prompt("Informe seu peso:");
const altura = prompt("Informe sua altura:");

//dados
console.log(nome);
console.log(peso);
console.log(altura);

//imc
const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
console.log(imc);

if (imc < 17) {
    console.log(`${nome} você está MUITO abaixo do peso!!!`);
} 
else if(imc >= 17  && imc < 18.50){
    console.log(`${nome} você está abaixo do peso!!!`);
} 
else if(imc >= 18.5  && imc < 25){
    console.log(`${nome} PARABEENS! Você está com o pesso normal!!`);
}
else if(imc >= 25  && imc < 30){
    console.log(`${nome} você está acima do peso!!!`);
}
else if(imc >= 30  && imc < 35){
    console.log(`${nome} você está com obesidadeI!!`);
}
else if(imc >= 35  && imc < 40){
    console.log(`${nome} você está com obesidadeII(SEVERA)!!!`);
}
else if(imc >= 40){
    console.log(`ATENÇÃO ${nome} você está COM OBESIDADE III (MÓRBIDA)!!!`);
}
