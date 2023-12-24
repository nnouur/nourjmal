function calcul1(a,b,c,f){
    var taux1 = document.getElementById(new String(b)).value; 
    var nbr1 = document.getElementById(new String(c)).value;
    var val1 = document.getElementById(new String(a)).value;
    const t1 = new Number (taux1);
    const v1 = new Number (val1);
    const d1 = new Number (nbr1);
    var x=0;


    for(let i=1;i<v1+1;i++){
        let y=t1/100;
        x+=Math.pow(1+y,i)*d1;
    }

    if(v1<0 || d1<0)
        alert("Il faut inserez un nombre de periodes et un montant positives")
     
    else if (t1>100 || t1<0){
        alert("Corriger le Taux")
    }
    else{    
     
      document.getElementById(new String(f)).innerHTML=x;
 
    }
}

function calcul2(a,b,c,f){
    var taux1 = document.getElementById(new String(b)).value; 
    var nbr1 = document.getElementById(new String(c)).value;
    var val1 = document.getElementById(new String(a)).value;
    const t1 = new Number (taux1);
    const v1 = new Number (val1);
    const d1 = new Number (nbr1);
    var x=0;


    for(let i=0;i<v1;i++){
        let y=t1/100;
        x+=Math.pow(1+y,i)*d1;
    }

    if(v1<0 || d1<0)
        alert("Il faut inserez un nombre de periodes et un montant positives")
     
    else if (t1>100 || t1<0){
        alert("Corriger le Taux")
    }
    else{    
     
      document.getElementById(new String(f)).innerHTML=x;
 
    }
}

function calcul3(a,b,c,f){
    var taux1 = document.getElementById(new String(b)).value; 
    var nbr1 = document.getElementById(new String(c)).value;
    var val1 = document.getElementById(new String(a)).value;
    const t1 = new Number (taux1);
    const v1 = new Number (val1);
    const d1 = new Number (nbr1);
    var x=0;


    for(let i=0;i<v1;i++){
        let y=t1/100;
        let z=Math.pow(1+y,i);
        x+=d1*(1/z);
    }

    if(v1<0 || d1<0)
        alert("Il faut inserez un nombre de periodes et un montant positives")
     
    else if (t1>100 || t1<0){
        alert("Corriger le Taux")
    }
    else{    
     
      document.getElementById(new String(f)).innerHTML=x;
 
    }
}

function calcul4(a,b,c,f){
    var taux1 = document.getElementById(new String(b)).value; 
    var nbr1 = document.getElementById(new String(c)).value;
    var val1 = document.getElementById(new String(a)).value;
    const t1 = new Number (taux1);
    const v1 = new Number (val1);
    const d1 = new Number (nbr1);
    var x=0;


    for(let i=1;i<v1+1;i++){
        let y=t1/100;
        let z=Math.pow(1+y,i);
        x+=d1*(1/z);
    }

    if(v1<0 || d1<0)
        alert("Il faut inserez un nombre de periodes et un montant positives")
     
    else if (t1>100 || t1<0){
        alert("Corriger le Taux")
    }
    else{    
     
      document.getElementById(new String(f)).innerHTML=x;
 
    }
}
