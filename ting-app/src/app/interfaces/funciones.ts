import { Seats } from "./seats";

export interface Funciones {
    id: string;
    pelicula: string;
    peliculaid: string;
    cine: string;
    horario: string;
    price: number;
    seats: Seats[];
}