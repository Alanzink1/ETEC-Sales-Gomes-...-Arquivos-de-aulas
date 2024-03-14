// Definindo algumas variáveis
var pessoasDaTerceiraIdade = 0;
var somaDasAlturas = 0;

for(let i=1; i<=5; i++) {
    // Mostra ao usuário à qual pessoa o programa está se referindo
    alert("Pessoa " + i);
    
    // Pergunta e verifica se a idade é maior que 50 anos
    let idadeUsuario = parseInt(prompt("Digite a idade da pessoa: "));
    if(idadeUsuario > 50) {
        pessoasDaTerceiraIdade++;
    }

    // Pergunta sua altura e armazena junto da altura das outras pessoas
    var alturaUsuario = parseInt(prompt("Qual a vossa altura? (em cm)"));
    somaDasAlturas += alturaUsuario;
    
    // Pergunta ao usuário o peso da pessoa referida
    var pesoUsuario = parseInt(prompt("E quanto pesa? (em kg)"));
}

// Calcula a média
var mediaDeAlturas = somaDasAlturas / 5;

// Exibe ao usuário os resultados
alert(`${pessoasDaTerceiraIdade} dessas pessoas estão com a idade acima de 50!`);
alert(`A média de todas as alturas é de ${mediaDeAlturas.toFixed(2)}cm`);

// Faça um programa que receba a idade, a altura e o peso de cinco pessoas, calcule e
// mostre: (for)
// a) a quantidade de pessoas com idade superior a 50 anos;
// b) a média das alturas das pessoas;