// comentario de uma linha
/* comentario de varia linhas */
alert('Seja Bem Vindo ao Jogo!');
let numeroInicial = 1;
let numeroLimite = 10;
let numeroSecreto = parseInt(Math.random() * numeroLimite + numeroInicial);
let tentativas = 1;
let chute;

while (chute != numeroSecreto) {
    chute = prompt(`Entre com um numero de ${numeroInicial} a ${numeroLimite}: `);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert('O numero que você digitou é maior que o numero secreto!');
        } else {
            alert('O numero que você digitou é menor que o numero secreto!');
        }
        tentativas++
    }

}
let palavra = tentativas == 1 ? 'Tentativa' : 'Tentativas';
alert(`Voce acertou o numero secreto que é =  ${numeroSecreto} e você acertou com ${tentativas} ${palavra}`);