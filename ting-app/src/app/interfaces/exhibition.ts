import { Seats } from "./seats";
import { Movie } from "./movie";
import { Room } from "./room";

export interface Exhibition {
    id: string;
    movie: Movie;
    theater: string;
    date: string;
    time: string;
    price: number;
    room: Room;
    seatsUnavailable: Seats[];
}