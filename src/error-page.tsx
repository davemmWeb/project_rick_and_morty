import { useRouteError } from "react-router-dom";

// Define un tipo para la estructura del error
interface MyRouteError {
    message?: string;
    statusText?: string;
    // Agrega cualquier otra propiedad que esperes en el error
}

export default function ErrorPage() {
    const rawError = useRouteError();

    // Comprueba si rawError es del tipo MyRouteError o null
    const error: MyRouteError | null = typeof rawError === "object" ? (rawError as MyRouteError) : null;

    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error?.message || error?.statusText}</i>
            </p>
        </div>
    );
}
