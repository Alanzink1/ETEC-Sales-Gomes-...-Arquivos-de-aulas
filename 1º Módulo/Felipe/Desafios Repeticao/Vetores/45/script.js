var userVetor = [];

do {
    userVetor.push(parseInt(prompt('Digite valor: ')));
} while(userVetor.length != 20);

var userRequest = parseInt(prompt("Digite o valor a ser procurado: "));
var searchRequest = userVetor.indexOf(userRequest);

if(searchRequest != -1) {
    alert(`O número ${userRequest} está na ${searchRequest + 1}ª posição na lista!`);
} else {
    alert("O número informado não está na lista!");
}

// Leia um vetor de 20 posições e em seguida 
// um valor X qualquer. Seu programa devera fazer
// uma busca do valor de X no vetor lido e informar 
// a posição em que foi encontrado ou se não foi
//                 encontrado.