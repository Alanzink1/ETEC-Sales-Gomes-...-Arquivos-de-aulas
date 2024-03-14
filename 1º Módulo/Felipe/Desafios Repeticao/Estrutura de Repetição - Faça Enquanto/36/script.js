var total = 0;
var quantity = 0;

do {

    var userInput = parseInt(prompt('Digite um valor: '));
    if(userInput < 0) {
        alert("Encerrado!");
    } else {
        total += userInput;
        quantity += 1;
    }

} while(userInput >= 0);

alert(`Todos somados dão: ${total}\n E a média dos valores é de: ${total / quantity}`);

// Desenvolva um programa que fique recebendo valor enquanto o valor for 
// maior ou igual a 0. No final, exiba a soma e a média dos valores digitados.