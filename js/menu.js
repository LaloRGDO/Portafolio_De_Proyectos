const menu = document.querySelector(".nav_menu");
var posicion = window.pageYOffset;
var secciones = ["#portada", "#portada", "#sobreMi", "#skills", "#hobbies", "#formacion", "#proyectos", "#contacto"];
var opcion = document.querySelectorAll(".link_nav");
var menu_opened = document.querySelector(".contenedorNav_menu");

function asignarSeccion(seccion){
    return document.querySelector(seccion);
}

var portada = asignarSeccion(secciones[1]);
var sobreMi = asignarSeccion(secciones[2]);
var skills = asignarSeccion(secciones[3]);
var hobbies = asignarSeccion(secciones[4]);
var formacion = asignarSeccion(secciones[5]);
var proyectos = asignarSeccion(secciones[6]);
var contacto = asignarSeccion(secciones[7]);

var secciones_variabes = [portada, portada, sobreMi, skills, hobbies, formacion, proyectos, contacto];

//Menu Hamburguesa
menu.addEventListener("click",function(){
    menu.classList.toggle("active");
    menu_opened.classList.toggle("menu_opened");
    menu.classList.toggle("nav_menu_fixed")
});

//Desaparecer Menu con scroll
window.onscroll = function(){
    let nuevaPosicion = window.pageYOffset;
    
    if(posicion>=nuevaPosicion){
        document.querySelector(".barra_navegacion").style.top="0";
    }else{
        document.querySelector(".barra_navegacion").style.top="-150px";
    }
    
    posicion = nuevaPosicion;
}

//desaparecer hamburguesa
for(var i=0;i<opcion.length;i++){
    opcion[i].addEventListener("click",function(event){
        menu_opened.classList.remove("menu_opened");
        menu.classList.remove("active");
        menu.classList.remove("nav_menu_fixed")
    });
}

/*opcion[0].setAttribute("href",secciones[0]);
opcion[1].setAttribute("href",secciones[1]);
opcion[2].setAttribute("href",secciones[2]);
opcion[3].setAttribute("href",secciones[3]);
opcion[4].setAttribute("href",secciones[4]);
opcion[5].setAttribute("href",secciones[5]);
opcion[6].setAttribute("href",secciones[6]);
opcion[7].setAttribute("href",secciones[7]);*/




