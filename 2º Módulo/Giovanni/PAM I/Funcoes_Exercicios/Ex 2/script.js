// 2 - Criar uma função que receba 5 valores e calcule
// e exiba a média aritmética. Também mostrar se o aluno
//    foi aprovado ou reprovado (>= 6 {Aprovado}). 

function lerValor(msg = "Digite um valor: ") {
    return parseInt(prompt(msg));
}

function mediaAritmetica(n1, n2, n3, n4, n5) {
    return (n1 + n2 + n3 + n4 + n5) / 5;
}

function situacao(media) {
    if(media >= 6) {
        return 'Aprovado';
    } else {
        return 'Reprovado';
    }
}

function exibeNaTela(msg) {
    document.write(msg);
}

var nota1 = lerValor("Digite a 1ª nota: ");
var nota2 = lerValor("Digite a 2ª nota: ");
var nota3 = lerValor("Digite a 3ª nota: ");
var nota4 = lerValor("Digite a 4ª nota: ");
var nota5 = lerValor("Digite a 5ª nota: ");

var media = mediaAritmetica(nota1, nota2, nota3, nota4, nota5);
var situacao = situacao(media);

exibeNaTela(`<h1>Sua média foi de ${media.toFixed(2)}. Você foi ${situacao}!</h1>`);