let tab = ["audrey","aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"];
let saisie = window.prompt(`Veuillez choisir un prénom parmi ${[...tab]}.`)
if(tab.includes(saisie)){
	tab.splice(tab.indexOf(saisie),1);
	tab.push(" ");
	alert(tab)
}
else{alert("erreur")}