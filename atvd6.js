let restaurante = new Array();
let precos = new Array();
let gorjeta = new Array();

for (let i = 0; i < 3; i++) {
    let nome = prompt("Informe o nome do restaurante:");
    let valor = prompt("Informe o valor total da conta:");

    restaurante.push(nome);
    precos.push(valor);

    const gor = calcularGorjeta(valor);
    gorjeta.push(gor);
}

detalhamento(restaurante, precos, gorjeta);

//funcao
function calcularGorjeta(valor) {
    parseFloat(valor);

    if (valor < 50) {        
        return valor * 0.2;
    }
    else if(valor >= 50 && valor <= 200){
        return valor * 0.15;
    }else{
        return valor * 0.1;
    }
    
}

function detalhamento(restaurante, precos, gorjeta) {

    for (let i = 0; i < 3 ; i++) {
        const rest = restaurante[i];
        const valor = precos[i];
        const gor = gorjeta[i];
        
        let total = parseFloat(valor) + parseFloat(gor);

        console.log(`Restaurante do(a) ${rest} - [Valor: R$ ${valor} | Gorjeta: R$ ${gor} | Total: R$ ${total}]`);
    }
    return;
}