var total = 0;

alert(`O cardápio de uma lanchonete é o seguinte:\n

Especificação      Preço unitário\n
100 Cachorro quente       1,10\n
101 Bauru simples         1,30\n
102 Bauru c/ovo           1,50\n
103 Hamburger             1,10\n
104 Cheeseburger          1,30\n
105 Refrigerante          1,00`);


do {
    var userIdFood = parseInt(prompt('Digite o id do item: '));
    var userQuantity = parseInt(prompt('Quantidade: '));

    if(userIdFood == 100) {
        total += 1.10 * userQuantity;
    } else if(userIdFood == 101) {
        total += 1.30 * userQuantity;
    } else if(userIdFood == 102) {
        total += 1.50 * userQuantity;
    }else if(userIdFood == 103) {
        total += 1.10 * userQuantity;
    }else if(userIdFood == 104) {
        total += 1.30 * userQuantity;
    }else if(userIdFood == 105) {
        total += 1.00 * userQuantity;
    } else {
        alert('Pedido inválido!');
    }

    userAdd = prompt('Deseja mais algum item: (S/N)');

} while(userAdd != 'N');



// O cardápio de uma lanchonete é o seguinte:

//    Especificação      Preço unitário
// 100 Cachorro quente       1,10
// 101 Bauru simples         1,30
// 102 Bauru c/ovo           1,50
// 103 Hamburger             1,10
// 104 Cheeseburger          1,30
// 105 Refrigerante          1,00

// Escrever um algoritmo que leia o código do item pedido, 
// a quantidade e calcule o subtotal. No final de cada escolha, 
// perguntar se o usuário deseja mais algum item: (S/N). Quando o 
// usuário não desejar mais nenhum item, exibir o valor total da compra.