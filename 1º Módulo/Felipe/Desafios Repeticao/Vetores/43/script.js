var positions = [];
var i = 1;

do {

    if(i % 2 == 1) {
        positions.push(i);
    }

    i++;
} while(positions.length != 10);

alert(`Os dez primeiros números são: ${positions}`);

// Declare um vetor de 10 posições e o preencha com 
//      os 10 primeiros números impares
//       (começando do 1) e o escreva.