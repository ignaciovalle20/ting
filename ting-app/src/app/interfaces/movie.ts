import { PostImg } from './postImg';

export interface Movie {
    id: string,
    postImg: PostImg,

    name: string,
    description: string,
    tags?: string[]
}