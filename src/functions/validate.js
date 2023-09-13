export const validate = (user) => {
  let errors = {};

  if (!user.email && !user.password) {
    console.log("Debe ingresar un usuario y contraseña");
  }

  if (!user.email) {
    errors.email = "Ingrese un email";
  } else if (!/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(user.email)) {
    errors.email = "Ingrese un email válido";
  } else if (user.email.length > 35) {
    errors.email = "El email no puede tener más de 35 caracteres";
  }

  if (!user.password) {
    errors.password = "Ingrese una contraseña";
  } else if (user.password.length < 6 || user.password.length > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  } else if (!/[a-zA-Z]/.test(user.password) || !/\d/.test(user.password)) {
    errors.password = "La contraseña debe contener al menos una letra y un número";
  }

  return errors;
};
