/**
 * Pessoas com uma quantidade de milhas inferior a 5.000 não recebem desconto.
   Pessoas com uma quantidade de milhas igual ou superior a 30.000 recebem 20% de desconto.
   Pessoas com uma quantidade de milhas superior a 5.000, mas inferior a 30.000, recebem 10% de desconto.
 */

let desconto = 0
let milhas = prompt('Entre com a quantidade de milhas: ')

if (milhas >= 30000) {
    desconto = 0.20
    console.log("Desconto: " + desconto)
} else if (milhas < 5000) {
    desconto = 0
    console.log("Desconto: " + desconto)
}else{
    desconto = 0.10
    console.log("Desconto: " + desconto)
}



