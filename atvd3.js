//pedir dados
const login = prompt("Informe o login:");
const senha = prompt("Informe a senha:");

//mostrar dados
console.log(login);
console.log(senha);

if (login == 'aluno' && senha == '123' || login == 'professor' && senha == '456') {
    alert('SUCESSO!! login e senha autorizado');
} else{
    alert('Acesso negado! login ou senha errado!');
}