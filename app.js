// comentario de uma linha
/* comentario de varia linhas */
alert('Seja Bem Vindo ao Jogo!');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let tentativas = 1;
let chute;

while (chute != numeroSecreto) {
    chute = prompt('Entre com um numero de 1 a 100: ');
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