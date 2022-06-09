const mostrarMas = document.querySelector('.botonMostrarMas');
const mostrarMenos = document.querySelector('.botonMostrarMenos');
const proyectosNoMostrados = document.querySelectorAll('.ElementoADesaparecer');

mostrarMas.addEventListener('click', ()=>{
    for(let i=0; i<proyectosNoMostrados.length; i++){
        proyectosNoMostrados[i].classList.remove('desaparecer');
    }
    mostrarMas.classList.add('desaparecer');
});

mostrarMenos.addEventListener('click', ()=>{
    for(let i=0; i<proyectosNoMostrados.length; i++){
        proyectosNoMostrados[i].classList.add('desaparecer');
    }
    mostrarMas.classList.remove('desaparecer');
});

