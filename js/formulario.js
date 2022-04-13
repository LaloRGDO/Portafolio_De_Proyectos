var nombre = document.querySelector("#nombreapellido");
var telefono = document.querySelector("#telefono");
var correo = document.querySelector("#correoelectronico");
var asunto = document.querySelector("#asunto");
var mensaje = document.querySelector("#mensaje");
var submit = document. querySelector(".enviar");
var mensajeErrorNombre = document.querySelector(".errorNombre");
var mensajeErrorCorreo = document.querySelector(".correo_requerido");
var mensajeErrorCorreo2 = document.querySelector(".errorCorreo");
var mensajeErrorAsunto = document.querySelector(".errorAsunto");
var mensajeErrorMensaje = document.querySelector(".errorMensaje");
var formulario = document.querySelector(".contacto");
const correoExpReg = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/;
let validarNombre = false;
let validarCorreo = false;
let validarAsunto = false;
let validarMensaje = false;
//submit.disabled = true;

/*function habilitarBoton(){
    if(validarNombre && validarCorreo && validarAsunto && validarMensaje){
        submit.disabled = false;
    }else{
        submit.disabled = true;
    }
}*/



nombre.addEventListener("blur", function(){
    if(this.value == ""){
        mensajeErrorNombre.classList.add(`aparecerMensaje`);
        validarNombre = false;
    }else{
        mensajeErrorNombre.classList.remove(`aparecerMensaje`);
        validarNombre = true;
    }
    //habilitarBoton();
});

correo.addEventListener("blur", function(){
    if(this.value == ""){
        mensajeErrorCorreo.classList.add(`aparecerMensaje`);
    }else{
        mensajeErrorCorreo.classList.remove(`aparecerMensaje`);
    }

    if(!correoExpReg.test(this.value)){
        mensajeErrorCorreo2.classList.add(`aparecerMensaje`);
    }else{
        mensajeErrorCorreo2.classList.remove(`aparecerMensaje`);
    }

    if(correoExpReg.test(this.value) && this.value != ""){
        validarCorreo = true;
    }else{
        validarCorreo = false;
    }

    //habilitarBoton();

});

asunto.addEventListener("blur", function(){
    if(this.value == ""){
        mensajeErrorAsunto.classList.add(`aparecerMensaje`);
        validarAsunto = false;
    }else{
        mensajeErrorAsunto.classList.remove(`aparecerMensaje`);
        validarAsunto = true;
    }
    //habilitarBoton();
});

mensaje.addEventListener("blur", function(){
    if(this.value == ""){
        mensajeErrorMensaje.classList.add(`aparecerMensaje`);
        validarMensaje = false;
    }else{
        mensajeErrorMensaje.classList.remove(`aparecerMensaje`);
        validarMensaje = true;
    }
    //habilitarBoton();
});

/*submit.addEventListener("click", function(){
    console.log("funciona :v");
    mensaje.blur();
});



/*var expCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

function validarCorreo(){
    console.log(expCorreo.test(correo.value));
}

validarCorreo();

console.log(nombre);
console.log(nombre.value);*/

/*if(nombre.value == "" && correo.value == "" && asunto.value == "" && mensaje.value == ""){
    submit.disabled = false;
}*/

