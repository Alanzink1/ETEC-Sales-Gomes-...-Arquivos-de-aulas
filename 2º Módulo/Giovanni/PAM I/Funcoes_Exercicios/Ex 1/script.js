// 1 - Criar uma função que receba um valor (X). 
// Essa função deverá exibir todos os valores de 1 até X. 

function exibeNaTela(msg) {
    document.write(msg);
}

function lerValor(msg = "Digite um valor: ") {
    return parseInt(prompt(msg));
}

function irAteValor(x) {

    for(let i = 1; i <= x; i++) {
        exibeNaTela(i + "<br>");
    }

}

var limite = lerValor();
irAteValor(limite);