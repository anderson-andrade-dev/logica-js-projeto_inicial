/**
  Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
  Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
  Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
  Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
 */

let contador01 = function () {
    let contador = 1;
    while (contador < 10) {
        console.log('O contador é ' + contador);
        contador++;
    }
}

let contador02 = function () {
    let contador = 10;
    while (contador > 0) {
        console.log('O contador é ' + contador);
        contador--;
    }
}

let contagemRegressiva = function () {
    let numero = prompt('Entre com o numero para contagem regressiva: ')
    while (numero >= 0) {
        console.log('Contagem regressiva ' + numero);
        numero--;
    }
}

let contagemProgressiva = function(){
    let numero = prompt('Entre com o numero para contagem progressiva: ')
    let contador = 0
    while (contador <= numero) {
        console.log('Contagem progressiva ' + contador);
        contador++;
    }
}