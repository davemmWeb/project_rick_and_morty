export const validationUser = (email: string) => {
    if (!email) {
        return "El nombre de usuario no puede estar vacío";
    }

    // Expresión regular para validar correos electrónicos
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        return "El nombre de usuario debe ser un correo electrónico válido";
    }

    if (email.length > 320) {
        return "El nombre de usuario no puede tener más de 320 caracteres";
    }

    // Si no se encuentra ningún problema, devuelve "" o null para indicar que la validación es exitosa.
    return "";
};


export const validationPassword = (password: string) => {
    if (password.length < 6) {
        return "La contraseña debe tener al menos 6 caracteres.";
    }

    if (password.length > 20) {
        return "La contraseña no debe tener más de 20 caracteres.";
    }

    if (!/[a-z]/.test(password)) {
        return "La contraseña debe contener al menos una letra minúscula.";
    }

    if (!/[A-Z]/.test(password)) {
        return "La contraseña debe contener al menos una letra mayúscula.";
    }

    if (!/[0-9]/.test(password)) {
        return "La contraseña debe contener al menos un número.";
    }

    // Puedes agregar más criterios de seguridad según sea necesario, como caracteres especiales

    return "";
};



