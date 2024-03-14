
// FUNÇÕES
function apresentar(){
    titulo.innerHTML = "Faaala, Alan!";
    btnApresentacao.innerHTML = "Cricado";
    // Apresentação mudando para fundo verde e texto amarelo
    btnApresentacao.style.backgroundColor = "green";
    btnApresentacao.style.color = "yellow";
}    

function despedida(){
    titulo.innerHTML = "Vaza daqui, Alan!";
    btnDespedida.innerHTML = "Despedado";
    // Despedida mudando para fundo roxo e texto branco
    btnDespedida.style.backgroundColor = "purple";
    btnDespedida.style.color = "white";
}

// Procura via tagname
document.getElementsByTagName("button");

// CONSTANTES
const btnApresentacao = document.getElementById("btn-apresentacao");
const btnDespedida = document.getElementsByClassName("btn-despedida")[0];
// const btnDespedida = document.querySelector(".btn-despedida");
// const btnDespedida = document.querySelectorAll(".btn-despedida")[0];
const titulo = document.getElementById("titulo");



// Alterando estilo via JS (não recomendado)


btnApresentacao.style.backgroundColor = "yellow";
btnApresentacao.style.color = "green";


// Adicionando escutas de eventos
btnApresentacao.addEventListener("click", apresentar);    

btnDespedida.addEventListener("click", despedida);