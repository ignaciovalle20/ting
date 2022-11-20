import { MovieImg } from './movieImg';

export interface Movie {
    id: string,
    movieImg: MovieImg,
    name: string,
    description: string,
    tags?: string[],
}