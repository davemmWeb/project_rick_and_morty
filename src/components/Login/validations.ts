export const validationUser = (value: string) => {
  if (value) {
    if (value.length <= 0) return "El nombre de usuario no puede estar vacío";
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
      return "El nombre de usuario tiene que ser un email";
    if (value.length > 35)
      return "El nombre de usuario no puede tener más de 35 caracteres";
  }
};
export const validationPassword = (value: string) => {
  if (value.length < 1)
    return "La contraseña tiene que tener al menos un número.";
  if (value.length < 6 || value.length > 10)
    return "La contraseña tiene que tener una longitud entre 6 y 10 caracteres";
};
