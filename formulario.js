const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{4,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) => {
    switch(e.target.name)
    {
        case "nombre":
            if(expresiones.nombre.test(e.target.value) || e.target.value == "")
            {
                document.getElementById('primer_nombre').classList.remove('inputInvalido');
                document.getElementById('primer_nombre').classList.add('inputValido');

            }else{
                document.getElementById('primer_nombre').classList.add('inputInvalido');
            }
        break;
        
        case "apellidos":
            if(expresiones.nombre.test(e.target.value) || e.target.value == "")
            {
                document.getElementById('apellidos').classList.remove('inputInvalido');
                document.getElementById('apellidos').classList.add('inputValido');
                
            }else{
                document.getElementById('apellidos').classList.add('inputInvalido');
            }
        break;
        
        case "telefono":
            if(expresiones.telefono.test(e.target.value) || e.target.value == "")
            {
                document.getElementById('telefono').classList.remove('inputInvalido');
                document.getElementById('telefono').classList.add('inputValido');
            }else{
                document.getElementById('telefono').classList.add('inputInvalido');
            }
        break;
        
        case "email":
            if(expresiones.email.test(e.target.value) || e.target.value == "")
            {
                document.getElementById('email').classList.remove('inputInvalido');
                document.getElementById('email').classList.add('inputValido');
            }else{
                document.getElementById('email').classList.add('inputInvalido');
            }
        break;

        case "password":
            if(expresiones.password.test(e.target.value))
            {
                const password2 = document.getElementById('confirma_password');
                if(password2.value === e.target.value)
                {

                    document.getElementById('password').classList.remove('inputInvalido');
                    document.getElementById('confirma_password').classList.remove('inputInvalido');
                    document.getElementById('password').classList.add('inputValido');
                    document.getElementById('confirma_password').classList.add('inputValido');
                    
                }else{
                    document.getElementById('password').classList.add('inputInvalido');
                    document.getElementById('confirma_password').classList.add('inputInvalido');
                }
            }
        break;

        case "confirma_password":
            if(expresiones.password.test(e.target.value))
            {
                const password = document.getElementById('password');
                if(password.value === e.target.value)
                {
                    document.getElementById('password').classList.remove('inputInvalido');
                    document.getElementById('confirma_password').classList.remove('inputInvalido');
                    document.getElementById('password').classList.add('inputValido');
                    document.getElementById('confirma_password').classList.add('inputValido');
                    
                }else{
                    document.getElementById('password').classList.add('inputInvalido');
                    document.getElementById('confirma_password').classList.add('inputInvalido');
                }
            }
        break;
    }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});