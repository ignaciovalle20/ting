import { Seats } from "./seats";

export interface Funciones {
    id: string;
    pelicula: string;
    peliculaid: string;
    cine: string;
    date: string;
    horario: string;
    price: number;
    seats: Seats[];
}