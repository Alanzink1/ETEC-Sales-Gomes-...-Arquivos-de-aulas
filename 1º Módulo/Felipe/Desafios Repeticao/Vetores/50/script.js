var userVetor = [];
var iguaisVetor;

do {
    userVetor.push(parseInt(prompt('Digite valor: ')));
} while(userVetor.length != 10);

iguaisVetor = userVetor.filter((item, index) => userVetor.indexOf(item) == index);

alert(`O array, se houver iguais, sem os números iguais fica: `);
alert(iguaisVetor);

// Leia um vetor de 10 posições e 
// verifique se existem valores iguais e os escreva.