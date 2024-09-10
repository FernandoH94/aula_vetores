/* Crie um algoritmo que leia o salário bruto de 5 pessoas, e ao final, 
mostre o salário líquido de todos, considerando 12% de INSS a descontar.
*/


let listaSalario = [];
const INSS = 0.12;


for (let i=0; i<5; i++){
    
    let salarioString = prompt("Informe seu salário: ");

    let salario = parseFloat(salarioString);
    listaSalario.push(salario);
}

let mensagem ="";
for (let j = 0; j< listaSalario.length; j++) {
    let salLiquido = listaSalario[j] * (88 / 100);

    mensagem += "R$ " + salLiquido.toFixed(2) + "\n";
 
}
alert(mensagem);