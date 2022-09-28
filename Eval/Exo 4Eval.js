let pu = window.prompt("Prix unitaire")
let QTECOM = window.prompt("Quantité")
let TOT = pu*QTECOM;
let remis = TOT * 0.05; 
let port;
alert("pu = " + pu + "/QTECOM= " + QTECOM)

console.log("PU =" + pu + "/QTECOM=" + QTECOM)
    if (TOT > 99 && TOT < 201){
        let remis = TOT * 0.05;
        TOT = TOT - remis;
        alert("remise 5% (" + remis + ") = " + TOT);
       
        
    }
        if(TOT > 99 && TOT < 201){
            port = 0,05;
        }
        if(TOT >200){

            port = 0.1;
        }
        
        if(TOT > 99 && TOT <201){
            port = 0,05;
        }
        else if (TOT > 99 && TOT < 201) {
            port = 0,1;
        }

        const total = remis * port; 
        console.log(TOT);



    // else if (port = 6 + '€'){
        
    // } 
    
    // 600 * 1 == 600 - remis(TOT) == (-60 + '€');