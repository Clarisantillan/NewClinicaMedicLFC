var abre = document.querySelector(".cobertura");
var clic = 1;

function abrir(){
    if(clic==1){
        abre.style.opacity = 1; 
        clic = clic+1;    
    }else{
        abre.style.opacity = 0;
        clic = 1;
    }
}
/*
var imagenes = [];
imagenes  [0] = './img/doctor-paciente.jpg'; 
imagenes  [1] = './img/vacunacion.jpg';
imagenes  [2] = './img/radiologiaa.jpg';
imagenes  [3] = './img/laboratorio.jpg';

var indiceImagenes = 0;

function  cambiarImagenes() {
  document.slider.src = imagenes [indiceImagenes]; 
  if (indiceImagenes < 3) {
    indiceImagenes++;
  }
  else{
    indiceImagenes = 0;
  }
 }
setInterval(cambiarImagenes, 2000);*/




//laboratorio
function  SINTURNO(){
  if(clic==1){
    document.getElementById("Sinturno").style.opacity="1";
    clic=clic +1;
}else{
  document.getElementById("Sinturno").style.opacity="0";
  clic=1;
}

}
function ENVIESUORDEN(){
  if(clic==1){
      document.getElementById("Orden").style.opacity="1";
      clic=clic +1;
}else{
    document.getElementById("Orden").style.opacity="0";
    clic=1;
}
}

function PREPARACION(){
  if(clic==1){
      document.getElementById("Preparacion").style.opacity="1";
      clic=clic +1;
}else{
    document.getElementById("Preparacion").style.opacity="0";
    clic=1;
}
}






