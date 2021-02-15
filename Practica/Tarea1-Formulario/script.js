window.onload = iniciar;

function iniciar() {
    let formulario = document.getElementById("form");
    formulario.getElementsByTagName("button")[0].addEventListener('click', validarForm);
}

function validarForm(e){
    let formulario = document.getElementById("form");
    let divs = formulario.getElementsByTagName("div");
    let opciones = formulario.getElementsByTagName("input");
    let mensajes = formulario.getElementsByTagName("small");
    
    //validar username
    if(!opciones[0].checkValidity()){
        if(opciones[0].validity.valueMissing){
            mensajes[0].innerHTML = "Username debe contener al menos 3 caracteres";
        }else if(opciones[0].validity.tooLong){
            mensajes[0].innerHTML = "Username debe tenes como maximo 15 caracteres";
        }else if(opciones[0].validity.patternMismatch){
            mensajes[0].innerHTML = "Username no válido";
        }
        e.preventDefault();
        mostrarError("username");
        mensajes[0].style.visibility='visible';
    }else{
        borrarError("username");
        mensajes[0].style.visibility='hidden';
    }

    //validar email
    if(!opciones[1].checkValidity()){
        if(opciones[1].validity.valueMissing){
            mensajes[1].innerHTML = "Emain no es válido";
        }else if(opciones[1].validity.patternMismatch){
            mensajes[1].innerHTML = "Emain no es válido";
        }
        e.preventDefault();
        mostrarError("email");
        mensajes[1].style.visibility='visible';
    }else{
        borrarError("email");
        mensajes[1].style.visibility='hidden';
    } 

    //validar password
    if(!opciones[2].checkValidity()){
        if(opciones[2].validity.valueMissing){
            mensajes[2].innerHTML = "Password debe contener al menos 6 caracteres";
        }else if(opciones[2].validity.tooLong){
            mensajes[2].innerHTML = "Password debe contener como máximo 25 caracteres";
        }else if(opciones[2].validity.patternMismatch){
            mensajes[2].innerHTML = "Password debe contener al menos 6 caracteres";
        }
        e.preventDefault();
        mostrarError("password");
        mensajes[2].style.visibility='visible';
    }else{
        borrarError("password");
        mensajes[2].style.visibility='hidden';
    } 

    //validar pasword2
    if(!opciones[3].checkValidity()){
        if(opciones[3].validity.valueMissing){
            mensajes[3].innerHTML = "Password2 es necesario";
        }else if(opciones[3].validity.tooLong){
            mensajes[3].innerHTML = "Password2 no en válido";
        }else if(opciones[3].validity.patternMismatch){
            mensajes[3].innerHTML = "Password2 no en válido";
        }
        e.preventDefault();
        mostrarError("password2");
        mensajes[3].style.visibility='visible';
    }else{
        borrarError("password2");
        mensajes[3].style.visibility='hidden';
    } 
    
}

function mostrarError(elemt){
    let elemento = document.getElementById(elemt);
    if(!elemento.checkValidity()){
        elemento.style.borderColor='red';
        elemento.focus;
    }
}
function borrarError(elemt){
    let elemento = document.getElementById(elemt);
    if(elemento.checkValidity()){
        elemento.style.borderColor='rgb(8, 240, 59)';
    }
}

//expresion regular para email -> ^[^@\s]+@[^@\s]+\.[^@\s]+$
// ^	    -> Comenzar la búsqueda de coincidencia al principio de la cadena.
// [^@\s]+  -> Buscar una o más repeticiones de cualquier carácter que no sea el carácter @ o el espacio en blanco.
// @	    -> Buscar el carácter @.
// [^@\s]+  -> Buscar una o más repeticiones de cualquier carácter que no sea el carácter @ o el espacio en blanco.
// \.	    -> Buscar un único carácter de punto.
// [^@\s]+  -> Buscar una o más repeticiones de cualquier carácter que no sea el carácter @ o el espacio en blanco.
// $	    -> Finalizar la búsqueda al final de la cadena
