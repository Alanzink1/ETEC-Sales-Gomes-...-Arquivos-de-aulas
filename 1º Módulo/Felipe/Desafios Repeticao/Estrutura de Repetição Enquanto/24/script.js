var i = 1;
var dentro = 0;
var fora = 0;

while (i <= 10) {
    let userInput = prompt('Digite um valor: ');
    userInput = parseInt(userInput);

    if (userInput >= 10 && userInput <= 20) {
        dentro++;
    } else {
        fora++;
    }

    i++;
}

alert(`Estão dentro ${dentro} números e estão fora ${fora} numeros`);

// Ler 10 valores e escrever quantos desses valores lidos estão no intervalo [10,20]
// (incluindo os valores 10 e 20 no intervalo) e quantos deles estão fora deste intervalo.