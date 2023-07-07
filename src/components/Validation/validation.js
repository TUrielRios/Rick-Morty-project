export default function validation(input) {
    const errors = {};
  
    const regexEmail = /^\S+@\S+\.\S+/;
    const regexPassword = /\d+/;
  
    if (!input.email) {
      errors.email = 'El campo de correo electrónico es requerido';
    } else if (!regexEmail.test(input.email)) {
      errors.email = 'Debe ingresar un email válido';
    } else if (input.email.length > 35) {
      errors.email = 'Correo muy largo, debe tener menos de 35 caracteres.';
    }
  
    if (!input.password) {
      errors.password = 'El campo de contraseña es requerido';
    } else if (input.password.length < 6 || input.password.length > 10) {
      errors.password = 'La contraseña debe contener entre 6 y 10 caracteres';
    } else if (!regexPassword.test(input.password)) {
      errors.password = 'La contraseña debe contener al menos un número';
    }
  
    return errors;
  }
  