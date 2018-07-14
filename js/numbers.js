function checkPrime(){
    
  var num = getuserInput();
  var flag = true;
  
  if(num < 2){
    flag = false;
  }
    
  for(var i = 2 ; i <= Math.sqrt(num) ; i++){
      if(num % i == 0){
          flag = false;
          break;
      }
  }
  
  if(flag){
        showResult("Given number : "+num+" is Prime");
                   
    }else{
        showResult("Given number : "+num+" not is Prime");
    }
}

function factorial(){
    num=getuserInput();
    var res = 1;
    for(var i=2; i < num; i++){
        res *= i;
    }
    showResult("Factorial of : "+num+" is :" +res);
    }
function factors(){
    var output="";
    for(var i=1; i <=num; i++){
        if(num % i == 0){
            output+= i+" ";
        }
       showResult("factors of : "+num+" is :" +output);  
    }
    
}
function fibonacci(){
    num=getuserInput(); 
    var output =" ";
    if(num == 1){
        output += "0";
    }else if(num ==2){
        output += "0 1";
    }else {
        var a=0 ,b=1;
        output += "0 1";
        for(var i=3;i<=num;i++){
            c = a + b;
            output += " "+c;
            a=b;
            b=c;
        }
    }
     showResult("Fibonacci series of : "+num+" is :" +output);  
    }
    
 

function getuserInput(){
    num=document.getElementById("num").value;
    return num;
}

function showResult(message){
   document.getElementById("result").innerHTML="<h4>"+message+"<h4>";
    
}
