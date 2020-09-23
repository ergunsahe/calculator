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
var ac = document.getElementById("ac");
var equal = document.getElementById("equal");
var dot = document.getElementById("dot");

var calcu = "";
var result = "";
function exhibit (n){
    display.innerHTML += n;
    calcu += n;
    console.log(calcu);
}

function total () {
    result = eval(calcu);
    display.innerHTML = result;
    calcu = result;
    console.log(result);
}

function clearDisplay () {
    display.innerHTML = "";
    calcu = "";
    result= "";
}

function lastCharDel (){
    
    charDel = calcu.toString();
    display.innerHTML =  parseInt(charDel.slice(0, -1));
    calcu = parseInt(charDel.slice(0, -1));
    if (calcu === NaN) {
        calcu = "";
        result = "";
    }
    // result = charDel;
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
plus.addEventListener("click", function (){exhibit ("+");});
minus.addEventListener("click", function (){exhibit ("-");});
divide.addEventListener("click", function (){exhibit ("/");});
multi.addEventListener("click", function (){exhibit ("*");});
equal.addEventListener("click", function (){ total ();});
ac.addEventListener("click", function (){ clearDisplay ();});
dlt.addEventListener("click", function (){ lastCharDel ();});







/* <div class="calcu-char screen" id="display"></div>
        <div class="calcu-char a-clear" id="ac">AC</div>
        <div class="calcu-char delete" id="delete">DEL</div>
        <div class="calcu-char fas fa-divide" id="divide"></div>
        <div class="calcu-char one" id="one">1</div>
        <div class="calcu-char two" id="two">2</div>
        <div class="calcu-char three" id="three">3</div>
        <div class="calcu-char multply" id="multiply">*</div>
        <div class="calcu-char four" id="four">4</div>
        <div class="calcu-char five" id="five">5</div>
        <div class="calcu-char six" id="six">6</div>
        <div class="calcu-char plus" id="plus">+</div>
        <div class="calcu-char seven" id="seven">7</div>
        <div class="calcu-char eight" id="eight">8</div>
        <div class="calcu-char nein" id="nein">9</div>
        <div class="calcu-char minus" id="minus">-</div>
        <div class="calcu-char dot" id="dot">.</div>
        <div class="calcu-char zero" id="zero">0</div>
        <div class="calcu-char equal" id="equal">=</div> */




