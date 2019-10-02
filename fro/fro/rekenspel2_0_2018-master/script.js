const myAssignment = document.getElementById('myAssignment');
const myInput = document.getElementById('myInput');
const feedback = document.getElementById('feedback');

let assignments = [];
let counter = 0;

function init(){
  for(var i=1; i<=10;i++){
    makeSum();
  }
}

function inputHandler(evt){
  //
}

function makeSum(){
temp.Sum{};
let = Math.floor(Math.random() * 9 + 1);
tempSum.numberA = getNumber();
tempSum.numberB = getNumber();
return temp.Sum;
}

function evaluate(){

}

function getNumber(){
  let number = Math.floor(Math.random()*9)+1;
  return number;
}

myInput.addEventListener('keydown',inputHandler,false);
