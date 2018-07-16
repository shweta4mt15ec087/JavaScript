function checkPrime(){
    
  var num = getUserInput();
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
   var num=getUserInput();
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
   var num=getUserInput(); 
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

    
 function reverse(){
   var  num=getUserInput(); 
   
     var rev=0;
     while(num!=0){
        var r=num%10;
         rev= rev * 10 + r;
         num= Math.floor(num/10);
     }
     showResult("rev is :" +rev);  
     }

function ispalindrome(){
   var  num=getUserInput(); 
     
     var rev=0; var num2=num;
     while(num!=0){
       var  r=num%10;
         rev= rev * 10 + r;
         num= Math.floor(num/10);
     }
    if(num2==rev){
     showResult(" no. is ispalindrome : "); 
     }
    else{
        showResult("no. is not palindrome :"); 
    }
}


 function sumofsingledigit(){
    var num=getUserInput(); 
    
     var num2;
     var sum=num2;
     while(num > 9){
        sum = Math.floor (num /10 + num %10);
         num=sum;
     }
showResult("sum of single digit is :" +sum);
 }

 
function sumofdigit(){
  var   num=getUserInput(); 
     var sum=0;
   
     while(num!=0){
        sum+= (num % 10);
         num=Math.floor(num / 10);
     }
showResult("sum of digit: "+num+" is :" +sum);
 }
 


function getUserInput(){
    num=document.getElementById("num").value;
    return num;
}

function showResult(message){
   document.getElementById("result").innerHTML="<h4>"+message+"<h4>";
    
}
