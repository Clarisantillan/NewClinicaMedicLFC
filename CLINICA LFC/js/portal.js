let historia = document.getElementById("histo").addEventListener("click", mostrarH);
let turnos = document.getElementById("tur").addEventListener("click", mostrarT);
let bienve =  document.querySelector(".section");
let hc = document.querySelector(".historia");
let tr = document.querySelector(".solicitartur")
var clic = 1;


function mostrarH(){
    if(clic==1){
        hc.style.opacity= "1";
        document.getElementById("bienv").remove();
        clic = clic+1;    
    }else{
        hc.style.opacity= "0";
        clic = 1;
    }
 
}

function mostrarT(){
    if(clic==1){
        tr.style.opacity= "1";
        document.getElementById("historiac").remove();
        document.getElementById("bienv").remove();
        clic = clic+1; 
    }else{
        tr.style.opacity= "0";
        clic = 1;
    }
}
//volver a cargar pagina
var casa = document.getElementById("casa").addEventListener("click", inicio)
function inicio(){
    window.location.reload();
}
// turnos radiologia
let radiologia = document.getElementById("calenrad");
let vacunacion = document.getElementById("calenvac");
let laboratorio = document.getElementById("calenlab");

document.getElementById("radiologia").addEventListener("click", ver1);
document.getElementById("laboratorio").addEventListener("click", ver2);
document.getElementById("vacunacion").addEventListener("click", ver3);

function ver1(){
    radiologia.style.opacity= "1";

}
function ver2(){
    laboratorio.style.opacity= "1";
}
function ver3(){
    vacunacion.style.opacity= "1";
}
