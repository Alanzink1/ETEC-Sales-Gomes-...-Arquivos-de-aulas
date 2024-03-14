var userVetor1 = [];
var userVetor2 = [];
var userVetor3 = [];
var anotherVetor = [];

do {
    userVetor1.push(parseInt(prompt('Digite valor para o 1º vetor: ')));
} while(userVetor1.length != 9);

do {
    userVetor2.push(parseInt(prompt('Digite valor para o 2º vetor: ')));
} while(userVetor2.length != 9);

do {
    userVetor3.push(parseInt(prompt('Digite valor para o 3º vetor: ')));
} while(userVetor3.length != 9);

var umTerco = userVetor1.length / 3;
var doisTerco = (userVetor2.length*2) / 3;

for(let i=0; i<= umTerco-1; i++) {
    anotherVetor.push(userVetor1[i]);    
}

alert('foi 1')

for(let i=3; i<= doisTerco-1; i++) {
    anotherVetor.push(userVetor2[i]);    
}

alert('foi 2')

for(let i=6; i<= doisTerco+2; i++) {
    anotherVetor.push(userVetor3[i]);    
}

alert('foi 3')

alert(anotherVetor);

// Leia 3 vetores de 9 posições e crie 
// outro com o 1º terço do primeiro, o 
// segundo 2º terço do segundo e o ultimo terço 
// do 3º. Escrever o vetor resultante ao final.