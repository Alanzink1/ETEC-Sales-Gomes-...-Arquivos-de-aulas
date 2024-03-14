var state = true;

while(state == true) {
    let userInput = parseFloat(prompt('Digite um valor de 0 a 10: '));

    if(userInput >= 0 && userInput <= 10) {
        state = false;
    }
}

// Desenvolva um algoritmo que enquanto o usuário nâo digitar um entre 0 e 10, fique pedindo um novo valor.