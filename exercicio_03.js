/* Crie um algoritmo que leia um vetor de 10 letras, e diga quantas 
consoantes foram lidas e mostre essas consoantes.
*/


let letras = [];
let msg = " ";
let cont = [];

for (let i=0; i<10; i++){
    
    let val = prompt("Informe letra");
    
    letras[i] = val;
    
} 

for (j=0; j<10; j++){
    
    let val = letras[j].toLocaleUpperCase();
    
    if(!(val=="A" || val=="E" || val=="I" || val=="O" || val=="U"))


    {   
        cont++;
        msg += val + "\n";

    }

}

alert(msg + cont + " consoantes");

