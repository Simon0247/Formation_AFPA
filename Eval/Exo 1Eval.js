let j = 0;
let v = 0;
let a = 0;
do {
    personnes = window.prompt("Entrez votre age");
    if ( personnes <20) {
      j++;
    }
    else if (personnes >40 ){
      v++;
    }
    else if ((personnes <40) && (personnes >20)){
      a++;
    }
    console.log(personnes);

  }
  while (personnes < 100);




alert ("Il y a " + "" + j + "" + " jeunes\n " + "Il y a " + "" + a + "" + " adulte\n " + " Il y a " + " Il y a " + "" + v + "" +" vieux\n " + " dont "+ " 1 " + "" + " centenaire ");