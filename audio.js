let sect1 = "I am section1";
let sect2 = "I am section2";
let sect3 = "I am section3";

let mySection = sect2;

if(mySection==sect1){
  console.log("turn on 1, turn off 2 and 3");
}else if(mySection==sect2){
  console.log("turn on 2, turn off 1 and 3");
}else{
  console.log("turn on 3, turn off 1 and 2");
}

<!--audio js-->

const keys = document.querySelectorAll('.sound');
const instruments = document.querySelectorAll('header>nav>a');

function clickSound(e){
  let soundKey = e.target.dataset['sound'];
  let audio = document.querySelector(`audio[data-sound="${soundKey}"]`);
  audio.currentTime = 0;
  audio.play();
}

function switchInstrument(e){
  e.preventDefault();
  let inst1 = document.querySelector('#Brazil');
  let inst2 = document.querySelector('#Italian');
  let instrument = e.target.dataset['instrument'];
  if(instrument=="instrument1"){
    inst1.style.display = "flex";
    inst2.style.display = "none";
    return;
  }
  inst1.style.display = "none";
  inst2.style.display = "flex";
}

keys.forEach(function(key){
    key.addEventListener("click", clickSound);
});

instruments.forEach(function(instrument){
  instrument.addEventListener("click", switchInstrument);
});
