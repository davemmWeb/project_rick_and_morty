/// <reference types="vite/client" />


export interface AtributesCharacter {
    id: number;
    name: string;
    species: string;
    type: string;
    gender: string;
    image: string;
}

export interface AtributesUser {
    id?: number;
    email: string;
    password: string;
}