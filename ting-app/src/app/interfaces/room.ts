import { Seats } from "./seats";

export interface Room {
    room_id: string;
    seats: Seats[];
}
