console.log(window.innerWidth);
console.log(window.innerHeight);
let imageNames = ["IMAG0481","IMAG0482","IMAG0483"];
let tumbs = document.getElementById('tumbs');
let display = document.getElementById('display');

selecImage(Math.floor(Math.random()*imageNames.length));

for(let i = 0; i<imageNames.length; i++){
  let tumb = new Image();
  tumb.src = "images/small/" + imageNames[i];
  tumb.id = i;
  tumb.appendChild(tumb);
  tumb.addEventListener("click", function(e){
    selecImage(e.target.id);
  });
}

function selecImage(id){
  display.src = "images/big/" + imageNames[id];
}
