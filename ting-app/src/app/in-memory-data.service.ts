import { Injectable } from '@angular/core';
import { Movie } from './interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  createDb() {
    const movies: Movie[] = [
      { id: '1', postImg: { id: "imagen1", url: '/assets/images/img1.jpg', alt: 'img1' }, name: 'Pelicula1', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed blandit nulla, et iaculis quam. Vivamus vulputate augue vitae cursus dapibus. Aliquam luctus egestas tortor quis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam erat eget risus blandit, sodales aliquet augue eleifend. Quisque eu fauciur eu.", tags: ['tag1', 'tag2', 'tag3'] },
      { id: '2', postImg: { id: "imagen2", url: '/assets/images/avatar.jpg', alt: 'img2' }, name: 'Pelicula2', description: "In urna enim, fringilla non erat ac, commodo hendrerit elit. Sed egestas auctor ex, vitae ultrices massa lacinia id. Nullam mattis viverra mauris, eget rhoncus dui consectetur nec. Nulla finibus dolor eget convallis bibendum. Etiam semper ante ac orci varius, scelerisque mollis dui faucibus. Vivamus ex risus, suscipit at accuesent justo ex, porttitor a sagittis in", tags: ['tag1', 'tag2', 'tag3'] },
      { id: '3', postImg: { id: "imagen3", url: '/assets/images/harry.jpg', alt: 'img2' }, name: 'Pelicula3', description: "Aenean cursus nisi augue, vel sodales elit faucibus quis. Nulla ultrices vitae ligula ut placerat. Morbi fermentum ante id urna laoreet, id sollicitudin lacus efficitur. Sed tristique laoreet sapien insollicitudin imperdiibh sollicitudid tristique laoreet sapien insollicitudin imperdiibh sollicitudin imperdiefeugiat mauris, eu blandit libero. Nam", tags: ['tag1', 'tag2', 'tag3'] },
    ];
    return { movies };
  }

}
