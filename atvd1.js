//pedir dados
const nome1 = prompt("Informe seu nome:");
const peso1 = prompt("Informe seu peso:");
const altura1 = prompt("Informe sua altura:");

const nome2 = prompt("Informe seu nome:");
const peso2 = prompt("Informe seu peso:");
const altura2 = prompt("Informe sua altura:");

//dados
console.log(nome1);
console.log(peso1);
console.log(altura1);

console.log(nome2);
console.log(peso2);
console.log(altura2);

//imc
const imc1 = parseFloat(peso1) / (parseFloat(altura1) * parseFloat(altura1));
console.log(imc1);
const imc2 = parseFloat(peso2) / (parseFloat(altura2) * parseFloat(altura2));
console.log(imc2);

if(imc1 > imc2){
    console.log(`O IMC de ${nome1} ${imc1} é maior que o de ${nome2} ${imc2}`);  
} 
else if(imc2 > imc1){
    console.log(`O IMC de ${nome2} ${imc2} é maior que o de ${nome1} ${imc1}`);
}
else{ console.log(`O IMC de  ${nome1} e  ${nome2} sao iguais`);
}
