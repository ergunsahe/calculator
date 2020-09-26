var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nein = document.getElementById("nein");
var zero = document.getElementById("zero");
var multi = document.getElementById("multiply");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var divide = document.getElementById("divide");
var dlt = document.getElementById("delete");
var display = document.getElementById("display");
var updisplay = document.getElementById("updisplay");
var downdisplay = document.getElementById("downdisplay");
var ac = document.getElementById("ac");
var equal = document.getElementById("equal");
var dot = document.getElementById("dot");

var downSum = "";
var upSum ="";
var result = "";
var charDel="";
var myNum ="";

function exhibit (n){
    if (n === "."){
        if (downSum.includes(".")) {
            downSum=downSum;
        }else if(n === "." && ddownSum===""){
            downSum = downSum;

        }else {
            downSum += n;
            charDel += n;
            downdisplay.innerHTML = downSum;
        }

    }else {
        downSum += n;
            charDel += n;
            downdisplay.innerHTML = downSum;
    }  
    
}

function total () {
    
        result =eval(upSum + downSum);
        downdisplay.innerHTML =result;
        downSum= result;
        upSum = "";
        updisplay.innerHTML="";
        downSum = downSum.toString();
    
    
    
    // console.log(result);
}

function sendUp (n) {
    
    if (upSum ==="") {
        downSum += n;
        upSum += downSum;
        updisplay.innerText=upSum;
        downSum ="";
        downdisplay.innerText="";
    } else {
        
        downSum +=n;
        upSum += downSum;
        lastN=upSum.charAt(upSum.length -1);
        console.log(upSum.charAt(upSum.length -1))
        downSum ="";
        downdisplay.innerHTML = "";
        upSum= eval(upSum.slice(0, -1))
        upSum= upSum.toString() + lastN;
        updisplay.innerHTML = upSum;
    }
}
 
    
    

    
    

function clearDisplay () {
    downdisplay.innerHTML = "";
    updisplay.innerHTML="";
    upSum = "";
    downSum="";
    result= "";
}

function lastCharDel (){
    downSum = downSum.toString();
    upSum = upSum.toString();
    charDel = upSum + downSum;
    upSum ="";
    downSum ="";
    updisplay.innerHTML=upSum;
    downdisplay.innerHTML = charDel.slice(0, -1);
    downSum=charDel.slice(0, -1);
    
    
      
    
}


one.addEventListener("click", function (){exhibit ("1");});
two.addEventListener("click", function (){exhibit ("2");});
three.addEventListener("click", function (){exhibit ("3");});
four.addEventListener("click", function (){exhibit ("4");});
five.addEventListener("click", function (){exhibit ("5");});
six.addEventListener("click", function (){exhibit ("6");});
seven.addEventListener("click", function (){exhibit ("7");});
eight.addEventListener("click", function (){exhibit ("8");});
nein.addEventListener("click", function (){exhibit ("9");});
zero.addEventListener("click", function (){exhibit ("0");});
dot.addEventListener("click", function (){exhibit (".");});
plus.addEventListener("click", function (){sendUp ("+");});
minus.addEventListener("click", function (){sendUp ("-");});
divide.addEventListener("click", function (){sendUp ("/");});
multi.addEventListener("click", function (){sendUp ("*");});
equal.addEventListener("click", function (){ total ();});
ac.addEventListener("click", function (){ clearDisplay ();});
dlt.addEventListener("click", function (){ lastCharDel ();});












