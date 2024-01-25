export default function Validator(inputs) {
    const errors = {};
    const regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (!regexEmail.test(inputs.email)) {
        errors.email = 'Email no valido!';
    }
    if (!inputs.email) {
        errors.email = 'Email es requerido!';
    }
    if (inputs.email.length > 35) {
        errors.email = 'Email supera los 35 caracteres!';
    }




    return errors;
}