function checkNumber()
{
    var Num=
        document.getElementById("Num").value;
    var message;
    if(Num%2==0){
        message="Number:"+Num+" is even";
    } 
    else{
        message="Number:"+Num+" is odd";
        
    }
    document.getElementById("res").innerHTML=message;
}

function bill_calc(){
    var units=document.getElementById("units").value;
    var min_amount=0;
    var total_amount=0;
    var amount=0;
    if(units>=0 && units<100){
        amount=units*5;
    }else if(units>=100 && units<500){
        amount=units*6;
    }else{
        amount=units*10;
        
        
    }
     total_amount=min_amount+amount;
     message="total bill amount is:"+total_amount;
     document.getElementById("res").innerHTML=message;
}