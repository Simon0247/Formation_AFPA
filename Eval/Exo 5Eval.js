let bouton_envoyer = document.getElementById("go");
bouton_envoyer.addEventListener("click", verif_form);






function verif_form(e) {


    let Societe = document.getElementById("Société");
    let Personne_a_contacter = document.getElementById("Personne_à_contacter");
    let Adresse_l_entreprise = document.getElementById("Adresse_l_entreprise");
    let Code_postal = document.getElementById("Code postal");
    let Ville = document.getElementById("Ville");
    let mail = document.getElementById("E-mail");
    let Telephone = document.getElementById("Téléphone")

    if (nom.value == "") {

        alert("Veuillez renseigner votre nom");

        e.preventDefault();
    } else {

        let filtre = new RegExp("^[a-z0-9]+[.]?[a-z0-9]*@[a-z]+[.][a-z]{2,4}$");
        let resultat = filtre.test(nom.value);
        switch (Variable) {
            case "Société"   : reg = new RegExp("^(.|\n|\r|\n\r){3,}$","i"); break; // texte de 3 caractères minimum, retour à la ligne possible  
            case "texte" : reg = new RegExp("^(.|\n|\r|\n\r){3,}$","i"); break;
            case "mdp"     : reg = new RegExp("^.{5,32}$","i"); break; 
            case "date"    : reg = new RegExp("^[0-9]{2}/[0-9]{2}/[0-9]{4}$","i") ; break; // date au format 01/01/2000  
            case "ip"      : reg = new RegExp("^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$","i"); break; // adresse IPV4  
            case "cp"      : reg = new RegExp("^[0-9]{5}$","i"); break; // code postal  
            case "mail"    : reg = new RegExp("^([a-zA-Z0-9_-])+([.]?[a-zA-Z0-9_-]{1,})*@([a-zA-Z0-9-_]{2,}[.])+[a-zA-Z]{2,3}\\s*$","i"); break; // adresse mail valide customer@fai.ext  
            case "tel"     : reg = new RegExp("^0[1-9]([-. ]?[0-9]{2}){4}$","i"); break; // numéro de téléphone français  
            case "fichier" : reg = new RegExp("^.+\.[a-zA-Z]{2,5}$","i"); break; // fichiers à uploader  
            // Ajoutez ici vos expressions  
        }
        return reg;
    };

        if (resultat == false) {


            alert("nom saisi pas ok !");
            e.preventDefault();
        }


    }

   











}