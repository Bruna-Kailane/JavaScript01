// alert('Mensagem do arquivo index.js');
console.log("Hello world!");

const nome = "Diego";
console.log(nome);

// nome = 'Pedro';

let idade;
idade = 22;
console.log(idade);
idade = idade + 15;
console.log(idade);

//const peso = prompt('Informe seu peso.');
// console.log('Peso do usuário: ' + peso);

// const apagar = confirm("Vecê deseja apagar todos os arquivos?");
// console.log(apagar);

// Number

const pi = 3.14;
const calculo = 2 / 2 + 3;

console.log(pi);
console.log(typeof pi);

console.log(calculo);
console.log(typeof calculo);

// Strings

let endereco = "Rua Xyz, ";
endereco = endereco + "987";
console.log(endereco);

const sobrenome = "Stiehl";
const nomeCompleto = `Dr. ${nome} ${sobrenome}!`;

console.log(nomeCompleto);

// Boolean

const identificado = true;
console.log(typeof identificado);

const rodando = false;
const parado = !rodando;

console.log(`Aplicação rodando? ${rodando}`);
console.log(`Aplicação parada? ${parado}`);

if (rodando) {
  console.log("Iniciando menus...");
} else {
  console.log("Desligando sistema...");
}

const status = rodando ? "Executando" : "Parada";
console.log(`Status do app: ${status}.`);

// Undefined

let altura;
console.log(altura);
console.log(typeof altura);
altura = 10;
console.log(altura);
console.log(typeof altura);

// console.log(circunferencia);

// Conversão

// const valor = prompt('Informe um valor');
// console.log(typeof valor);
// console.log(valor);

// // const novoValor = valor + 100;
// const novoValor = parseInt(valor) + 100;
// console.log(novoValor);

// if

const nota = 7.5;

console.log("Nota do aluno:");
if (nota >= 8) {
  console.log("A");
} else if (nota >= 6) {
  console.log("B");
} else if (nota >= 5) {
  console.log("C");
} else {
  console.log("D");
}

// Truthy e Falsy

if (nome) {
  console.log("A variável nome é: Truthy");
} else {
  console.log("A variável nome é: Falsy");
}

//aray
const pessoas = ["Diego", "Pedro", "Zé"];

console.log("Usando for simples");
for (let i = 0; i < pessoas.length; i++) {
  const pessoa = pessoas[i];
  console.log(`Pessoa ${i + 1}: ${pessoa}`);
}

console.log("Usando for..of");
for (const pessoa of pessoas) {
  console.log(`Pessoa: ${pessoa}`);
}

console.log("For sem array");
for (let i = 1; i <= 8; i++) {
  console.log(`Contando: ${i}`);
}

//funcoes
console.log(soma(5, 5));

function soma(n1, n2) {
  return n1 + n2;
}

function teste() {
  console.log("Teste");
}

console.log(soma(1, 2));
console.log(soma(3, 2));

const result = teste();
console.log(result);

// Function expression

// console.log(multiplicacao(5, 4));

const multiplicacao = function (n1, n2) {
  return n1 * n2;
};

console.log(multiplicacao(5, 4));

// Arrow functions

const subtracao = (n1, n2) => {
  return n1 - n2;
};

console.log(subtracao(8, 5));

const divisao = (n1, n2) => n1 / n2;

console.log(divisao(10, 2));

const falarAlgo = mensagem => console.log(mensagem);
falarAlgo("Hello world");