// 3 - Criar uma função que receba dois e retorne apenas o maior.

function exibeNaTela(msg) {
    document.write(msg);
}

function lerValor(msg = "Digite um valor: ") {
    return parseInt(prompt(msg));
}

function escolheMaior(n1, n2) {
    if(n1 === n2) {
        return "Inválido! Os números informados são iguais!"
    }

    if(n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

var numero1 = lerValor();
var numero2 = lerValor();

var numeroMaior = escolheMaior(numero1, numero2);

if(typeof numeroMaior == 'number') {
    exibeNaTela("O maior número é: " + numeroMaior);
} else {
    exibeNaTela(numeroMaior);
}