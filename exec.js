var readline = require('readline');

console.log("======================")
console.log("Bem vindo ao sistema Node.js para console app")
console.log("======================")

console.log("Digite o seu nome:")

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(nome){
  console.log("O nome digitado é: " + nome);
})

