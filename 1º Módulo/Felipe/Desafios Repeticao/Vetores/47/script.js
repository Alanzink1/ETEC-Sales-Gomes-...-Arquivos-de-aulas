var userVetor = [];
var negativesCount = 0;

do {
    userVetor.push(parseInt(prompt('Digite valor: ')));
} while(userVetor.length != 5);

userVetor.forEach(num => {
    if(num < 0) {
        let negativeNum = userVetor.indexOf(num);
        userVetor[negativeNum] = 0;
        negativesCount++;
    }
});

alert(`${negativesCount} números foram afetados!`);
alert(userVetor);

// Leia um vetor de 40 posições e atribua 
// valor 0 para todos os elementos que possuírem 
//           valores negativos.