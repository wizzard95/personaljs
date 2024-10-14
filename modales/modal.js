
const modal = document.getElementById('miModal');
const modalBtn = document.getElementById('modalBtn');
const cerrarModal = document.getElementById('cerrarModal');

// Función para abrir/cerrar la ventana modal
modalBtn.addEventListener('click', () => {
    if (modal.classList.contains('show')) {
        cerrarConAnimacion();
    } else {
        abrirConAnimacion();
    }
});

// Cerrar la ventana modal al hacer clic en la "X"
cerrarModal.addEventListener('click', cerrarConAnimacion);

// Cerrar la ventana modal al hacer clic fuera del contenido de la ventana
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        cerrarConAnimacion();
    }
});

// Función para abrir la ventana modal
function abrirConAnimacion() {
    modal.classList.remove('hide');
    modal.classList.add('show');
}

// Función para cerrar la ventana modal
function cerrarConAnimacion() {
    modal.classList.add('hide'); // Añadimos la clase para animar el cierre
    setTimeout(() => {
        modal.classList.remove('show'); // Después de la animación quitamos la clase 'show'
        modal.classList.remove('hide'); // Quitamos la clase 'hide'
    }, 300); // 300ms es la duración de la transición
}







/*const perfil = [{   
nombre: 'Juan',
apellido: 'Perez',
edad: 30,
hobbies: ['futbol', 'leer', 'programar'],
direccion: {
calle: 'Av. 5 de mayo',
numero: 123,
ciudad: 'Buenos Aires',
pais: 'Argentina',
descripcion: 'actualmente no se tiene regitro de su paradero'
}
},
aptitudes = { 
supervivencia: 'exelente',
ataque: 'mortal',
rango: 's',
poder: ['mazenko', 'chidori', 'serie mortal severa'],

}
];

const [{ nombres, apellidos, edad, hobbies, }] = perfil;
*/
//let midiv = document.getElementById('midiv');
/*let divmostrar = document.getElementById('mostrar');
let divnumtres = document.getElementById('numtres');
let claseGlobal = document.getElementsByClassName('.global')*/
// 

/*midiv.addEventListener('click', () => {
mostrar.innerHTML = perfil[0].nombre;
});*/
//const botones = document.querySelectorAll('.global');
// const bot = document.querySelectorAll('.bo');


//const elementos = document.querySelectorAll('.global');
//const revertir = document.querySelectorAll('.revertir');
/*
const tres = document.querySelectorAll('.tres');



function hacerAlgo() {
const colorAleatorio = '#' + Math.floor(Math.random() * 16777215).toString(16);
const colorAleatorioborde = '#' + Math.floor(Math.random() * 16777215).toString(16);
// Cambiar el color de fondo del botón
this.style.backgroundColor = colorAleatorio;
this.style.transform = 'scale(1.1)';
this.style.transition = 'all 0.2s';
this.style.border = 'solid 10px #ffff80';
this.style.color = 'black';
this.style.borderRadius = '50%';
this.style.transform = 'translateY(20px)';
this.style.boxShadow = '0px 0px 10px #ffff80';
this.style.borderColor = colorAleatorioborde;
this.style.marginTop = '50px 50px';
this.textContent = 'DAMIAN'
}



tres.forEach(tres=> {
tres.addEventListener("click", hacerAlgo);  
},
function revertirCambios() {
tres.style.removeProperty('background-color');
botonRevertir = document.getElementById('botonRevertir');
botonRevertir.addEventListener('click', revertirCambios);
}

);


/*revertir.addEventListener('click', function() {
// midivdos.innerHTML = perfil[0].hobbies = hobbiesArray[1];
tres.style.backgroundColor = "red";
}
)*/




