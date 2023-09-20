export const validationUser = (email: any) => {
    if (email) {
        if (email.length <= 0) return "El nombre de usuario no puede estar vacío";
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
            return "El nombre de usuario tiene que ser un email";
        if (email.length > 35)
            return "El nombre de usuario no puede tener más de 35 caracteres";
    }
};
export const validationPassword = (password: any) => {
    if (password.length < 1)
        return "La contraseña tiene que tener al menos un número.";
    if (password.length < 6 || password.length > 10)
        return "La contraseña tiene que tener una longitud entre 6 y 10 caracteres";
};


