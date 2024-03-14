var numberRooms = parseInt(prompt('Digite o numero de salas: '));
var studentsRoomArray = [];
var notaRoomsArray = [];
//                  maior menor
var maiorMenorMedia = [];

for(let i = 0; i <= numberRooms-1; i++) {
    let numberStudents = parseInt(prompt(`Digite o numero de alunos da sala ${i+1}: `));
    studentsRoomArray[i] = numberStudents;

    for(let iN = 1; iN <= numberStudents; iN++) {
        let notaStudents = parseInt(prompt(`Digite a nota de cada aluno da sala ${i+1}: `));

        if(notaRoomsArray[i]) {
            notaRoomsArray[i] += notaStudents;
        } else {
            notaRoomsArray[i] = notaStudents;
        }

    }
}

for(let i=0; i <= notaRoomsArray.length-1; i++) {
    let mediaRoom = notaRoomsArray[i] / studentsRoomArray[i];
    alert(`A média da sala ${i+1} é de: ${mediaRoom.toFixed(2)}`);
    
    if(maiorMenorMedia[0]) {
        if(mediaRoom > maiorMenorMedia[0]) {
            maiorMenorMedia[0] = mediaRoom;
        }
    } else {
        maiorMenorMedia[0] = mediaRoom;
    }

    if(maiorMenorMedia[1]) {
        if(mediaRoom < maiorMenorMedia[1]) {
            maiorMenorMedia[1] = mediaRoom;
        }
    } else {
        maiorMenorMedia[1] = mediaRoom;
    }
    
}

alert(`A maior média é: ${maiorMenorMedia[0].toFixed(2)}`);
alert(`A menor média é: ${maiorMenorMedia[1].toFixed(2)}`);

// Desenvolva um programa que receba o número de salas, 
// o número de alunos de cada sala e as notas de cada aluno 
// separado por sala. No final da inserção das notas de cada sala, 
// exibir a média da sala. No final da inserção das notas de todas as 
//                 salas, mostrar:

//              Média de todas as salas
//                  Maior média
//                  Menor média