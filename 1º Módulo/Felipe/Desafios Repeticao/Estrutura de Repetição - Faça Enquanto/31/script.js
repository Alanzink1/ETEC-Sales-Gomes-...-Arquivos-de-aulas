var contagem = 1;
var alunosExistentes = parseInt(prompt('Quantos alunos existentes na turma? '));
var notas = 0;
var resultadoNotas;

do {
    let notaAluno = parseFloat(prompt('Insira a nota do aluno: '));
    notas += notaAluno;

    contagem++;

} while(contagem <= alunosExistentes);

resultadoNotas = notas / alunosExistentes;

alert(`A média aritmética dessas notas é: ${resultadoNotas.toFixed(2)}`);

// Ler o número de alunos existentes em uma turma e, após isto, ler as
// notas destes alunos, calcular e escrever a média aritmética dessas notas lidas.