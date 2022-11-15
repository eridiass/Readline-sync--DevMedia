import dadosEntrada from 'readline-sync'
console.log("Área do triângulo: \n");

const base = dadosEntrada.question("Informe o valor da base: ");
const altura = dadosEntrada.question("Informe o valor da altura: ");

console.log("\nVocê informou " + base + " para base");
console.log("Você informou " + altura + " para altura");

let area = (base * altura) / 2;
console.log("A área do triângulo é: " + area);