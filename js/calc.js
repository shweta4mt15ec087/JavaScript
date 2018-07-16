function calc(operation){
    var NUM1=parseInt(document.getElementById("NUM1").value);
     var NUM2=parseInt(document.getElementById("NUM2").value);
    var message=" ";
    switch(operation){
        case"add":
            message=NUM1 + " + " +NUM2 + " = " +(NUM1 + NUM2);
            break;
            
             case"sub":
            message=NUM1 + " - " +NUM2 + " = " +(NUM1 - NUM2);
            break;
            
            case"mul":
            message=NUM1 + " * " +NUM2 + " = " +(NUM1 * NUM2);
            break;
            
             case"div":
            message=NUM1 + " / " +NUM2 + " = " +(NUM1 / NUM2);
            break;
            
             case"mod":
            message=NUM1 + " % " +NUM2 + " = " +(NUM1 % NUM2);
            break;
            
    default: message ="please provide valid input";
}
  document.getElementById("res").innerHTML=message; 
}