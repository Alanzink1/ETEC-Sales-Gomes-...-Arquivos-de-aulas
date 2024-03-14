var alunosExistentes = parseInt(prompt('Digite o Número de Alunos Existentes: '));
var notasSoma = 0;
var contador = 0;

while(contador != alunosExistentes) {
    var notasAlunos = parseFloat(prompt('Digite as notas dos alunos: '));
    notasSoma += notasAlunos;
    contador++;
}

var notasTotal = notasSoma / alunosExistentes;

alert(`A média aritmética dessas notas é: ${notasTotal.toFixed(2)}`);

// Ler o número de alunos existentes em uma turma e, após isto, ler as notas destes alunos, 
// calcular e escrever a média aritmética dessas notas lidas