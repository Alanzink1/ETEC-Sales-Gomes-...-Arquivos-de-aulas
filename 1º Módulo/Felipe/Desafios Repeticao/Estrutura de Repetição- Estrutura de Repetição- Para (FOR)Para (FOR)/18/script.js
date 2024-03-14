var quantidadeNegativos = 0;

for(let i = 1; i < 10; i++) {
    let userInput = prompt('Digite o Valor: ');
    userInput = parseInt(userInput);
    if(userInput < 0) {
        quantidadeNegativos++;
    }
}

alert(`A quantidade de numeros negativos digitados é de: ${quantidadeNegativos}`);
console.log(`A quantidade de numeros negativos digitados é de: ${quantidadeNegativos}`);

// Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS.