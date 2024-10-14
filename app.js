const elemento = document.getElementById('miElemento');
const estilosOriginales = window.getComputedStyle(elemento);
/**===================== ===================================== */

/**===================== ===================================== */

/**==================================================== */
const botonPruebaLet = document.getElementById('botonPruebaLet');
//const estiloTabla = window.getComputedStyle(tablaUno)
/**==================================================== */

/**=========== Ventana Modal============================= */
const modal = document.getElementById('miModal');
//const estiloModal = window.getComputedStyle(modal);
/**======================================================= */
const modalBtn = document.getElementById('modalBtn');


const cerrarModal = document.getElementById('cerrarModal');

const originalStyles = {
            backgroundColor: estilosOriginales.backgroundColor,
            color: estilosOriginales.color,
            padding: estilosOriginales.padding,
            border: estilosOriginales.border,
            Transform:estilosOriginales.transform,
            marginRight:estilosOriginales.marginRight,
        };
/**======================================================================================= */

    document.getElementById('botonPruebaLet').addEventListener('click', () => {
        elemento.style.backgroundColor = 'blue';
    });

    

    document.getElementById('cambiarEstilos').addEventListener('click', () => {
        //elemento.style.transform = 'translateX(-50px)';
        elemento.style.backgroundColor = '#c20404';
        elemento.style.color = 'white';
        elemento.style.padding = '300px 650px';
        elemento.style.border = 'black solid 0px';
        elemento.style.boxShadow = '-webkit-box-shadow: 9px 17px 57px 40px rgba(110,32,48,0.83)';
        
        
        });

    document.getElementById('revertirEstilos').addEventListener('click', () => {
    elemento.style.backgroundColor = originalStyles.backgroundColor;
    elemento.style.color = originalStyles.color;
    elemento.style.padding = originalStyles.padding;
    elemento.style.border = originalStyles.border;
    modal.classList.remove('show'); 
    
    });

/** =================== funcion para ventanas modales =============*/



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
