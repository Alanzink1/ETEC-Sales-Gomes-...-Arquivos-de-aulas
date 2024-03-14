var userVetor = [];
var pares = 0;

do {
    userVetor.push(parseInt(prompt('Digite valor: ')));
} while(userVetor.length != 40);

userVetor.forEach(num => {
    if(num % 2 == 0) {
        pares++;
    }
})

if(pares > 1) {
    alert(`Foram digitados ${pares} pares!`);
} else if(pares == 1) {
    alert(`Foi digitado somente ${pares} par!`);
} else {
    alert("Não foi digitado nenhum par!");
}

//          Leia um vetor de 40 posições. 
// Contar e escrever quantos valores pares ele possui.