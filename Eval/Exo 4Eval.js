let pu = window.prompt("Prix unitaire");
let QTECOM = window.prompt("Quantité");
let TOT = pu*QTECOM;
let remis;
alert("pu = " + pu + "/QTECOM= " + QTECOM);

console.log("PU =" + pu + "/QTECOM=" + QTECOM);
    if(TOT >= 100 && TOT <= 200){
        remis = TOT * 0.05;
        TOT = TOT - remis;
        alert("remise 5% (" + remis + ") = " + TOT);
        
        
        }
        
        if (TOT > 200){
            remis = TOT * 0.1;
            TOT = TOT - remis;
        }

        let port = 0;

         if (TOT <= 500){
            port = TOT * 0.02;
         }

         if (port < 6 && TOT <= 500){
            port = 6;
         }

         else if (TOT > 500){
            port = 0;
         }


         
         TOT = TOT + port;
         

        console.log("Le port est de :" + port + "€");
         

        console.log("Prix à payer = " + TOT + "€");


                
        


        // else if (port = 6 + '€'){
        
        // } 
    
        // 600 * 1 == 600 - remis(TOT) == (-60 + '€');