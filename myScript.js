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

var downcalcu = "";
var upcalcu ="";
var result = "";
var charDel="";
var myNum ="";

function exhibit (n){
    if (n === "."){
        if (downcalcu.includes(".")) {
            console.log(downcalcu);
            downcalcu=downcalcu;
        }else {
            downcalcu += n;
            charDel += n;
            downdisplay.innerHTML = downcalcu;
        }

    }else {
        downcalcu += n;
            charDel += n;
            downdisplay.innerHTML = downcalcu;
    }  
    
}

function total () {
    
        result =eval(upcalcu + downcalcu);
        downdisplay.innerHTML =result;
        downcalcu= result;
        upcalcu = "";
        updisplay.innerHTML="";
        downcalcu = downcalcu.toString();
    
    
    
    // console.log(result);
}

function sendUp (n) {
    downcalcu += n;
    upcalcu += downcalcu;
    updisplay.innerText=upcalcu;
    downcalcu ="";
    downdisplay.innerText="";
}
    
    

function clearDisplay () {
    downdisplay.innerHTML = "";
    // display.innerHTML="";
    updisplay.innerHTML="";
    upcalcu = "";
    downcalcu="";
    result= "";
}

function lastCharDel (){
    console.log(upcalcu, downcalcu)
    downcalcu = downcalcu.toString();
    upcalcu = upcalcu.toString();
    charDel = upcalcu + downcalcu;
    upcalcu ="";
    downcalcu ="";
    updisplay.innerHTML=upcalcu;
    downdisplay.innerHTML = charDel.slice(0, -1);
    downcalcu=charDel.slice(0, -1);
    
    // updisplay.innerHTML = upcalcu;
      
    
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












