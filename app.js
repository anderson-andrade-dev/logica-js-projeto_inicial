// comentario de uma linha
/* comentario de varia linhas */
alert('Seja Bem Vindo ao Jogo!');
let numeroSecreto = 5;
let tentativas = 1;
console.log(numeroSecreto);
let chute;

while (chute != numeroSecreto) {
    chute = prompt('Entre com um numero de 1 a 10: ');
    if (chute == numeroSecreto) {
        alert(`Voce acertou o numero secreto que é =  ${numeroSecreto} e você acertou com ${tentativas}`);
    } else {
        if (chute > numeroSecreto) {
            alert('O numero que você digitou é maior que o numero secreto!');
        } else {
            alert('O numero que você digitou é menor que o numero secreto!');
        }
        tentativas++
    }
}