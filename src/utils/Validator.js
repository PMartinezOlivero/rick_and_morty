export default function Validator(inputs) {
    const errors = {};
    const regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const regexPassword = /^(?=.*\d)[a-zA-Z\d]{6,10}$/;

    //  Validacion de Email
    if (!regexEmail.test(inputs.email)) {
        errors.email = 'Email no valido!';
    }
    if (!inputs.email) {
        errors.email = 'Email es requerido!';
    }
    if (inputs.email.length > 35) {
        errors.email = 'Email supera los 35 caracteres!';
    }

    //  Validacion de Password
    if (!regexPassword.test(inputs.password)) {
        errors.password = 'Debe tener almenos un numero y entre 6 y 10 caracteres';
    }


    return errors;
}