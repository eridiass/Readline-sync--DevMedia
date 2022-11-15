//Importação do readline + cabeçalho
import dadosEntrada from 'readline-sync'
console.log("Área do triângulo: \n");

//Declaração de principais variaveis
const base = dadosEntrada.question("Informe o valor da base: ");
const altura = dadosEntrada.question("Informe o valor da altura: ");

//Apresentação de dados digitados em tela
console.log("\nVocê informou " + base + " para base");
console.log("Você informou " + altura + " para altura");

//Declaração de variável + apresentação de resultados
let area = (base * altura) / 2;
console.log("A área do triângulo é: " + area);