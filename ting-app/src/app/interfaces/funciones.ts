import { Seats } from "./seats";
import { Movie } from "./movie";
import { Room } from "./room";
export interface Funciones {
    id: string;
    movie: Movie;
    theater: string;
    date: string;
    horario: string;
    price: number;
    room: Room[];
}