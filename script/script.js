let numeri=[];
function salva(){
    let n=parseFloat(document.getElementById('numero').value);
    numeri.push(n);
    document.getElementById('inseriti').innerHTML=numeri.join(";");
}
function esegui(){
    let somma=0;
    let prodotto=1;
    if(numeri.length==0){ 
        alert('Inserisci almeno un numero'); 
        return;
    }
    for(let pari of numeri){
        if(pari%2==0){
            somma+=pari;
        }
    }
        for(let i in numeri){
        if(i % 2==0){        //Ho fatto in posizione dispari vista dall'utente, Se fosse stata pos dispari dell'array allora ==1
            prodotto*=numeri[i];
        }
    }
    numeri.length=0;
    document.getElementById('ris').innerHTML="Somma pari: " + somma + "<br>" +
                                             "Prodotto dispari: " +prodotto;

}