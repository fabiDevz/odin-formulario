const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÁ-y\s]{1,20}$/,
    password: /^.{5,15}/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/
}

const validarFormulario = (e) => {
    switch(e.target.name)
    {
        case "nombre":
        /*codigo*/ 
        break;
        
        case "apellidos":
            /**/
        break;
        
        case "telefono":
            /* */
        break;
        
        case "email":
            /**/ 
        break;

        case "password":
            /** */
        break;

        case "confirma_password":
            /** */
        break;
    }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});