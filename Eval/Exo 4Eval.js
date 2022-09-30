let pu = window.prompt("Prix unitaire")
let QTECOM = window.prompt("Quantité")
let TOT = pu*QTECOM;
let valeur;
alert("pu = " + pu + "/QTECOM= " + QTECOM)

console.log("PU =" + pu + "/QTECOM=" + QTECOM)
    if(TOT > 99 && TOT < 201){
        let remis = TOT * 0.05;
        TOT = TOT - remis;
        alert("remise 5% (" + remis + ") = " + TOT);
       
        
    }
        
        if (TOT > 200){
            remis = TOT * 0,1;
            TOT = TOT - remis;
        }

        let port = 0;

         if (TOT < 500){
            port = TOT * 0.2;
         }

         if (TOT < 6 && port < 500){
            port = 6;
         }
          
         TOT = TOT * remis/pu;

        // console.log("remise 5%"(" + remis + ") = "+ TOT")

        console.log("Le port est de :" + port + "€");
         
        // remis = document.write( "promoId" ).value;
         pu = Math.round((valeur * (1 - remis / 100)));


        console.log("Prix à payer = " + TOT + "€");



    // else if (port = 6 + '€'){
        
    // } 
    
    // 600 * 1 == 600 - remis(TOT) == (-60 + '€');