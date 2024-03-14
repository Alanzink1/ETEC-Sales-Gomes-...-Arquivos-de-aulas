var userVetor = [];

do {
    userVetor.push(parseInt(prompt('Digite valor: ')));
} while(userVetor.length != 12);

var posX = parseInt(prompt('Digite a posicao do primeiro valor: '));
var posY = parseInt(prompt('Digite a posicao do segundo valor: '));

var result = userVetor[posX-1] + userVetor[posY-1];

alert(`O resultado de ${userVetor[posX-1]} + ${userVetor[posY-1]} é: ${result}`);

//         Leia um vetor de 12 posições e em seguida ler também 
// dois valores X e Y quaisquer correspondentes a duas posições no vetor. 
//      Ao final seu programa deverá escrever a soma dos valores 
//          encontrados nas respectivas posições X e Y.