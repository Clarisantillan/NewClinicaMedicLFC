document.getElementById("btn__iniciar-sesion").addEventListener("click",iniciarSesion );
document.getElementById("btn__registrarse").addEventListener("click",register );
window.addEventListener("resize", anchoPagina);
var contenedor_login_register = document.querySelector(".contenedor__login-register");   
var formulario_login = document.querySelector(".formulario__login");
var formulario_register =  document.querySelector(".formulario__register");     
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register =  document.querySelector(".caja__trasera-register");

function anchoPagina(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
     }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
      formulario_login.style.display = "block";
      formulario_register.style.display = "none";
      contenedor_login_register.style.left = "0px";
     }
}
anchoPagina();

function iniciarSesion(){
    if (window.innerWidth > 850){
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
} else{
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "none"; 
} 
}

function register(){
    if (window.innerWidth > 850){ 
  formulario_register.style.display = "block";
  contenedor_login_register.style.left = "410px";
  formulario_login.style.display = "none";
  caja_trasera_register.style.opacity = "0";
  caja_trasera_login.style.opacity = "1";
} else{
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
}

}
let email = document.getElementById("email");
let pass = document.getElementById("password");
let form = document.getElementById("form");
let parrafo = document.getElementById("warning");
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning = ""
    let entrar = false
    let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    parrafo.innerHTML = ""
    if(regexEmail.test(email.value)){
     warning += ''
     entrar = true
    }else{
        warning += 'El email no es valido <br>'
    }
    if(pass.value.length < 8){
        warning += '¡La contraseña no es valida! Debe tener minimo 8 caracteres <br>'
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warning
    }
})
let passw = document.getElementById("passw");
let forms = document.getElementById("forms");
let parraf = document.getElementById("warnings");
forms.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let ingresar = false
    parraf.innerHTML = ""
   
    if(passw.value.length < 8){
        warnings += '¡La contraseña no es valida! Debe tener minimo 8 caracteres <br>'
       ingresar = true
    }
    if(ingresar){
        parraf.innerHTML = warnings
    }
})

let boton = document.getElementById("boton").addEventListener("click", login)
function login(){

  var user = document.getElementById("dni").value;
   var pass = document.getElementById("passw").value;

    if(user == "00000" && pass == "Luciano1"){

       window.location = "./portal.html";
    }
}
