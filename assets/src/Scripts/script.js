
//CODIGO  PARA MOSTRAR UN MENU
let estructuraMenu = document.querySelector(".nav-menuicono");
let menu = document.getElementById('items');
let menuEstado = "activado";

estructuraMenu.addEventListener('click', function mostrarOcultarMenu() {
    if (menuEstado == "activado") {
        menu.classList.add("estiloresponsive");
        console.log("Muestra el Menu");
        menuEstado = "desactivado";
    } else {
        menu.classList = "";
        console.log("Quita el Menu");
        menuEstado = "activado";
    }
});

//FUNCION QUE PERMITE QUITAR EL MENU CUANDO SE LA CLICK EN ALGUN item
function seleccionar() {
    document.getElementById("items").classList = "";
    menuEstado = "activado";
}


//CODIGO QUE PERMITE APLICAR LAS ANIMACIONES--  SECCION SKILLS
let atributos = ['javascript', 'htmlcss', 'Photoshop', 'Wordpress', 'Drupa', 'comunicacion', 'trabajo-en-equipo', 'Creatividad', 'Dedicacion'];
let barrasProgreso = document.getElementsByClassName("progreso");
for (let i in atributos) {
    barrasProgreso[i].classList.add(atributos[i]);
}


// CODIGO QUE PERMITE REDIRIGIE AL DONDE ESTA EL  CURRICULUM --  SECCION CURRICULUM 
const buttoCv = document.querySelector(".botonCV");
console.log(buttoCv);

buttoCv.addEventListener('click', function enviarCV() {
    //window.location.href = 'https://www.facebook.com/juandavidc2';
    window.open('https://drive.google.com/file/d/1zyAWnuGOd-XE8Bnny6qc1MdjTvQJDIfU/view?usp=sharing', '_blank');
});


let etiquetali = document.getElementsByTagName('li');
console.log(etiquetali[0]);



//CODIGO QUE ELIMINA LA INFORMACION QUE ESTA INGRESADA EN LOS CAMPOS - SECCION CONTACTO
// Este evento se activa cuando el documento HTML ha siido completamente cargado
document.addEventListener('DOMContentLoaded', function () {

    // Nos ubicamos un elemento de HTML en este caso formulario
    let formulario = document.getElementById('form');
    // Este evento se activa cuando se envia la informacion o se la click en enviar
    formulario.addEventListener('submit', function () {
        //se activa el metodo que restablece los valores de los campos es decir los borrar
        formulario.reset();
    });

});


// CODIGO QUE PERMITE EL PROCESO DE ENVIAR INFORMACION DESDE HTML HASTA CORREO PERSONAL  NOTA: El codigo se importo del sitio Web programa EmailJs
// Envio de informacion al correo personal
// Selecciono Boton de formulario
const btn = document.getElementById('button_form');
//Selecciono Formulario
const formularioEnviar = document.getElementById('form');
// Capturo el eveneto que se genera en el formulario
formularioEnviar.addEventListener('submit', function (event) {
    event.preventDefault();
    btn.value = 'Enviando...';
    const serviceID = 'default_service';
    const templateID = 'template_n5uc2rm';

    emailjs.sendForm(serviceID, templateID, this).then(() => {
        btn.value = 'Enviar Mensaje';
        alert('Mensaje enviado correctamente');
    }, (err) => {
        btn.value = 'Enviar Mensaje';
        alert(JSON.stringify(err));
    });

})


















