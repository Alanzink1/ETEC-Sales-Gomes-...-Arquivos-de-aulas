var userInput = prompt('Insira o Valor: ');
userInput = parseInt(userInput);

var result = 1;
var strResult = '';

for(let i = userInput; i >= 1; i--) {
    if(i == 1) {
        str = `${i}`;
    } else {
        str = `${i} * `;
    }

    strResult += str;
    result = result * i;
}

alert(strResult);
alert(`Resultado do Fatorial: ${result}`);

// Desenvolva um programa que receba um valor e na sequência exiba o resultado do fatorial. (Utilizar o FOR)
// 5 -> 5 * 4 * 3 * 2 * 1 -> 120
// 7 -> 5040