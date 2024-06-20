/**
 * Autor: Anderson Andrade
 * Data: 19/06/2024
 * Desafios do Curso da Oracle One
 */

// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
let programa1 = function () {
    console.log('Seja Bem Vindo!');
}

/*
Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
*/
let programa2 = function () {
    let nome = 'Anderson';
    console.log(`Olá ${nome}`);
}

/*
Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
*/
let programa3 = function () {
    let nome = 'Anderson';
    alert(`Olá ${nome}`);
}

/*
Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
*/
let programa4 = function () {
    let resposta = ('Qual a linguagem de programação que você mais gosta?');
    console.log(`Sua linguagem preferida é ${resposta}`);
}

/*
Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
*/
let programa5 = function () {
    let valor1 = 15;
    let valor2 = 20;
    let resultado = valor1 + valor2;
    console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
}

/*
Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
*/
let programa6 = function () {
    let valor1 = 15;
    let valor2 = 20;
    let resultado = valor1 - valor2;
    console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
}

/*
Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
*/
let programa7 = function () {
    let idade = prompt('Digite sua idade: ');

    idade >= 18 ? 'Você é maior de idade' : 'Você é menor de idade';
}

/*
Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
*/
let programa8 = function () {
    let numero = prompt('Digite o numero: ');

    if (numero == 0) {
        console.log('Zero não é negativo nem positivo!');
    } else if (numero > 0) {
        console.log('o numero é positivo!');
    } else {
        console.log('O numero é negativo!');
    }
}

//Use um loop while para imprimir os números de 1 a 10 no console.
let programa9 = function () {
    let cont = 1;

    while (cont <= 10) {
        console.log('Numeros ' + cont);
        cont++;
    }
}

/*
Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
*/
let programa10 = function () {
    let nota = 8;

    if (nota >= 7) {
        console.log("Aprovado!");
    } else {
        console.log('Reprovado!');
    }
}

//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let programa11 = function(){
    console.log(Math.random());
}

//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let programa12 = function(){
    console.log(parseInt(Math.random()*10+1));
}

//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let programa13 = function(){
    console.log(parseInt(Math.random()*1000+1));
}