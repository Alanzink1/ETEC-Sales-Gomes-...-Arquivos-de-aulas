// VARIAVEZAIADAS

// BOTOES
const btn_felipeEl = document.getElementById("btn1");
const btn_giovanniEl = document.getElementById("btn2");
const btn_tituloEl = document.getElementById("btn3");
const btn_dsEl = document.getElementById("btn4");
const btn_pw2El = document.getElementById("btn5");
const btn_apsEl = document.getElementById("btn6");

// LISTA DE PROFESSORES
const tituloProfessoresEl = document.querySelectorAll(".titulo")[0];
const professorDiogoEl = document.querySelectorAll(".professor")[0];
const professorFelipeEl = document.querySelectorAll(".professor")[1];
const professorRogerioEl = document.querySelectorAll(".professor")[2];
const id_giovanniEl = document.getElementById("giovanni");

// LISTA DE COMPONENTES
const tituloComponentesEl = document.querySelectorAll(".titulo")[1];
const disciplinaBD2El = document.querySelectorAll(".disciplina")[0];
const disciplinaPAM1El = document.querySelectorAll(".disciplina")[1];
const disciplinaPW2El = document.querySelectorAll(".disciplina")[2];
const id_DSEl = document.getElementById("ds");
const disciplinaPTCEl = document.querySelectorAll(".disciplina")[3];
const disciplinaSisEmbEl = document.querySelectorAll(".disciplina")[4];
const id_aps = document.getElementById("aps");

// FOFOQUEIROS // ESCUTADORES // OUVINTES
btn_felipeEl.addEventListener("click", ()=> {
    professorFelipeEl.style.color = "green";
});

btn_giovanniEl.addEventListener("click", ()=> {
    id_giovanniEl.style.color = "blue";
});

btn_tituloEl.addEventListener("click", ()=> {
    tituloProfessoresEl.style.color = "yellow";
    tituloComponentesEl.style.color = "yellow";
});

btn_dsEl.addEventListener("click", ()=> {
    id_DSEl.style.color = "purple";
});

btn_pw2El.addEventListener("click", ()=> {
    disciplinaPW2El.style.color = "orange";
})

btn_apsEl.addEventListener("click", ()=> {
    id_aps.style.color = "gray";
});