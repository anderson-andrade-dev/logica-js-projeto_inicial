// comentario de uma linha
/* comentario de varia linhas */
alert('Seja Bem Vindo ao Jogo!');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = prompt('Entre com um numero de 1 a 10: ');

if(chute == numeroSecreto){
    alert(`Voce acertou o numero secreto que é =  ${numeroSecreto}`);
}else{
    alert('Voce Errou!');
}