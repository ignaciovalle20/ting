import { Seats } from "./seats";
import { Movie } from "./movie";
export interface Funciones {
    id: string;
    movie: Movie;
    theater: string;
    date: string;
    horario: string;
    price: number;
    seats: Seats[];
}