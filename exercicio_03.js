/*Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", 
mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, 
mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
*/

let diaSemana = function () {
    let dia = prompt('Entre com o dia: ');
    if (dia == 'Domingo' || dia == 'Sabado') {
        alert('Tenha um bom final de semana!');
    } else {
        alert('Boa semana!');
    }
}

let verificaNumero = function () {
    let numero = prompt('Entre com o numero a verificar: ');
    if (numero > 0) {
        alert('O numero é positivo!');
    } else if (numero < 0) {
        alert('O numero é negativo!');
    } else {
        alert("0 não é nem negativo e nem positivo");
    }
}

let pontosJogo = function () {
    let pontos = prompt('Entre com os pontos do jogo!');
    if (pontos >= 100) {
        alert('Parabens, você venceu !');
    } else {
        alert('Tente novamente para ganhar.');
    }
}

let saldoConta = function () {
    let saldo = 1000.0;
    alert(`O Seu Saldo é R$ ${saldo.toFixed(2)}`);
}

let boasVindasNome = function () {
    let nome = prompt('Qual o seu nome: ');
    alert(`Seja Bem Vindo ${nome}`);
}