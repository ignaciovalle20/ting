import { SelectedExtras } from './selectedExtras';
import { Seats} from './seats';

export interface Cart {
    username: string,
    movie: string,
    theater: string,
    date: string,
    time: string,
    exhibition: string,
    price: number,
    qrcode: string,
    seats: Seats[],
    selectedExtras: SelectedExtras[],
}