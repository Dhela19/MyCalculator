//Play Audio on click

const audio = new Audio("./click.mp3");
function click() {
    audio.play();
    document.getElementById("cont").style="background:white;"
  };
  function aftermath(){
  document.getElementById("cont").style="background:#aaffdfa1"
  }
var display = (document.getElementById("disp"));
var results = (document.getElementById("res"));
function add()
{
    click()
    display.value +=("+")
    aftermath()
}
function subt(){
    click()
    display.value +=("-")
    aftermath()
}
function mult(){
    click()
    display.value +=("*")
    aftermath()
}
function nine(){
    click()
    display.value +=("9")
    
}
function eight(){
    click()
    display.value +=("8")
    
}
function seven(){
    click()
    display.value +=("7")
    
}
function six(){
    click()
    display.value +=("6")
    
    }

function div(){
    click()
    display.value +=("/")
}
function five(){
    click()
    display.value +=("5")
}
function four(){
    click()
    display.value +=("4")
}
function three(){
    click()
    display.value +=("3")
}
function two(){
    click()
    display.value +=("2")
}
function one(){
    click()
    display.value +=("1")
}
function zero(){
    click()
    display.value +=("0")
}
//Equals operation
function equals(){
    click()
    function looseJsonParse(display) {
  return eval?.(`"use strict";(${display.value})`);
}
results.value=(looseJsonParse(display));
    display.style=("display:none");
    results.style=("display:inline");
    //return results.value=results
    aftermath()
}
function mc(){
    click()
display.style=("display:inline")
    display.value=("")
    results.style=("display:none")
    results.value=("")
    aftermath()
}
