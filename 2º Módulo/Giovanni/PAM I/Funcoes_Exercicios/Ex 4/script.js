// 4 - Completar o código da seguinte função:

// function calculadora(operador, a, b){

// }

// var resultado = calculadora("*", 10, 20)
// document.write(resultado); // Deve mostrar 200

function calculadora(operador, a, b) {

    return eval(a+operador+b);

};

var resultado = calculadora("*", 10, 20);
document.write(resultado);