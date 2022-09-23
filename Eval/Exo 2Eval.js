// let res = window.prompt("Entrez un nombre")
// let result = 'x ';
// for (let i = 0; i < 11; i++) {

//     for (let j = 0; j < 11; j++) {

//         if(i == 0 && j > 0){
//           result += '[' + j + ']';
//         } 
//         else if(j == 0 && i>0){
//           result += '[' + i + '] ';
//         } 
//         else if(i>0 && j>0){
//         result += (i*j) + ' ';
//         }
//     }
//     result += '\n';
// }

// console.log(result);

let chiffreSaisie = window.prompt("Entrez un chiffre pour une table")

for(var i = 1; i<=10; i++){
  let result = chiffreSaisie * i;
  alert(chiffreSaisie + ' * ' + i + ' = ' + result);

}