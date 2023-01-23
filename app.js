var display = (document.getElementById("disp"));
var results = (document.getElementById("res"));
function add()
{
    display.value +=("+")
}
function subt(){
    display.value +=("-")
}
function mult(){
    display.value +=("*")
}
function nine(){
    display.value +=("9")
}
function eight(){
    display.value +=("8")
}
function seven(){
    display.value +=("7")
}
function six(){
    display.value +=("6")
    }

function div(){
    display.value +=("/")
}
function five(){
    display.value +=("5")
}
function four(){
    display.value +=("4")
}
function three(){
    display.value +=("3")
}
function two(){
    display.value +=("2")
}
function one(){
    display.value +=("1")
}
function zero(){
    display.value +=("0")
}
function equals(){
    function looseJsonParse(display) {
  return eval?.(`"use strict";(${display.value})`);
}
results.value=(looseJsonParse(display));
    display.style=("display:none");
    results.style=("display:inline");
    //return results.value=results
    
}
function mc(){
display.style=("display:inline")
    display.value=("")
    results.style=("display:none")
    results.value=("")
}