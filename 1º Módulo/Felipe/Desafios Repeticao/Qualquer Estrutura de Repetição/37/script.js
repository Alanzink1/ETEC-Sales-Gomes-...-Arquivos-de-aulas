var strTabuada = '';


for(let number = 1; number <= 10; number++) {

    strTabuada += `Tabuada do ${number} \n`;

    for(let i=1; i <= 10; i++) {
        strTabuada += `${i} X ${number} = ${number*i}\n`;
    }

    alert(strTabuada);
    strTabuada = '';

}

// Escreva um algoritmo que imprima a tabuada (de 1 a 10) para os números de 1 a 10.

// 1x2 = 2
// 2x2 = 4