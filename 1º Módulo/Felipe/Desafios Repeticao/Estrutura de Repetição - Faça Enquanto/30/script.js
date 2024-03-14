var contador = 1;
var dentro = 0;
var fora = 0;

do {

    var userInput = parseInt(prompt('Digite o valor: '));

    if(userInput >= 10 && userInput <= 20) {
        dentro++;
    } else {
        fora++;
    }
    contador++;

} while(contador < 10);

alert(`Dentro do intervalo entre 10 e 20\nDentro estão ${dentro} números\nFora estão ${fora} números`);

// Ler 10 valores e escrever quantos desses valores lidos estão no intervalo [10,20] 
// (inlcuindo os valores 10 e 20 no intervalo) e quantos deles estão fora deste intervalo.