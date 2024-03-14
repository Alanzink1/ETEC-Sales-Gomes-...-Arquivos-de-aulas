var isTrue = false;

do {
    
    let userInput = parseFloat(prompt('Digite um valor entre 0 e 10: '));
    if(userInput <= 10 && userInput >= 0) {
        isTrue = true;
    }
} while(isTrue == false);

// Desenvolva um algoritmo que enquanto o usuário nâo digitar um entre 0 e 10, fique pedindo um novo valor