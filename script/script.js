let numeri=[];
function salva(){
    let n=parseFloat(document.getElementById('numero'));
    numeri.push(n);
}
function esegui(){
    let somma=0;
    let prodotto=1;
    for(let pari of numeri){
        if(pari%2==0){
            somma+=pari;
        }
        for(let dispari in numeri){
        if(dispari%2!=0){
            prodotto=prodotto*pari;
        }
    }
    }
    alert(somma);
    alert(prodotto);
}