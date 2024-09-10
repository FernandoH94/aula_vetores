/* Crie um algoritmo que leia um vetor de 5 números inteiros e mostre-os
*/


let num = [];
mensagem = "";

for (let i = 0; i < 5; i++) {
    num.push(prompt("Digite um número: "));


}
for (let i = 0;  i < num.length; i++) {
    mensagem += num[i] + ",";

}

alert(mensagem);