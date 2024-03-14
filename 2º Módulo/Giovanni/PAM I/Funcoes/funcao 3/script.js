function lerValor(msg = "Digite um valor: ") {
    let valor = parseFloat(prompt(msg));
    return valor;
}

function calcularMedia(n1, n2, n3) {
    return (n1+n2+n3) / 3;
}

var nota1 = lerValor();
var nota2 = lerValor();
var nota3 = lerValor();

var media = calcularMedia(nota1, nota2, nota3);
alert(media);





// function lerValor(msg) {
//     let valor = parseInt(prompt(msg));
//     return valor;
// }

// var resposta = lerValor("Qual número que representa 2775122254521 + 1?");
// if(resposta == 2775122254522) {
//     alert("Aí sim!");
// } else {
//     alert("Aí não...")
// }