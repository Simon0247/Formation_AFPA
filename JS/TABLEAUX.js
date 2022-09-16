////////////////////////////////////////////////////JS 10 : Tableaux


///////////////////////////Exercice 1

// let n = window.prompt("Entrez la taille du tableau");
// let tab = new Array();
// for (let i = 0; i < n; i++) 
// {
//     let rand = window.prompt("Entrez les différentes valeurs du tableau");
//     tab[i]= rand;
// }
//     console.log(tab);





///////////////////////Exercice 2


function InitTab (){
     r = window.prompt("Entrez la taille du  tableau");
     re = new Array();
    re.length = r ;  
    console.log(re);

//     for (i=0; i<r; i++){
//     re [i] = ;
//     console.log(re)
    // }
}
InitTab()


function SaisieTab (){
    for (i=0;i<r;i++){
        let s = window.prompt("Saisir un chiffre  du tableau")
        re[i] = s 
        console.log(re);
    }
}
SaisieTab()


function AfficheTab (){
    window.alert(re);
}
AfficheTab()



function RechercheTab (){
    let v = window.prompt("Saisir le numéro de la case")
    alert(re[v-1]);
}
RechercheTab()



function InfoTab ()
{
alert("La plus grande valeur du tableau est : " + (Math.max(...re)));

let som = 0;

for (i=0; i< re.length;i++){
    
    som = Number(som) + Number(re[i]);
    
}
alert("Somme = " + som);
let moy = som/re.length;
alert("moyenne = " + moy);
}
InfoTab()





////////////////////////////////////////////////////////////////////////Exercice 3 : Tri d’un tableau



function bubbleSort(tableau){
   
let isSorted = false;
while(!isSorted){
    isSorted = true;
    for(let value =0; value<tableau.length; value++){
    if(value == tableau.length -1)break;
    if(tableau[value]>re[value+1]){
    const buffer = tableau[value+1]; 
    tableau[value+1]=tableau[value];
    tableau[value] = buffer;
    isSorted = false;
}
}
}
}
// const tableau = [12,11,24,0,32,100,48,72];
bubbleSort(re);
alert(re);
// re.sort();