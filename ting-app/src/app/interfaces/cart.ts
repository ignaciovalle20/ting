import { SelectedExtras } from './selectedExtras';
import { Seats} from './seats';
import { Exhibition } from './exhibition';

export interface Cart {
    username: string,
    movie: string,
    theater: string,
    date: string,
    time: string,
    exhibition: Exhibition,
    seats: Seats[],
    selectedExtras: SelectedExtras,
}