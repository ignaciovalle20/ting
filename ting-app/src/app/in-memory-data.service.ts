import { Injectable } from '@angular/core';
import { Movie } from './interfaces/movie';
import { Extra } from './interfaces/extras';
import { Funciones } from './interfaces/funciones';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  createDb() {
    const movies: Movie[] = [
      { id: '1', postImg: { id: "imagen1", url: '/assets/images/img1.jpg', alt: 'img1' }, name: 'Batman', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed blandit nulla, et iaculis quam. Vivamus vulputate augue vitae cursus dapibus. Aliquam luctus egestas tortor quis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam erat eget risus blandit, sodales aliquet augue eleifend. Quisque eu fauciur eu.", tags: ['tag1', 'tag2', 'tag3'],cines: ["Nuevo Centro","Tres Cruces"] },
      { id: '2', postImg: { id: "imagen2", url: '/assets/images/avatar.jpg', alt: 'img2' }, name: 'Pelicula2', description: "In urna enim, fringilla non erat ac, commodo hendrerit elit. Sed egestas auctor ex, vitae ultrices massa lacinia id. Nullam mattis viverra mauris, eget rhoncus dui consectetur nec. Nulla finibus dolor eget convallis bibendum. Etiam semper ante ac orci varius, scelerisque mollis dui faucibus. Vivamus ex risus, suscipit at accuesent justo ex, porttitor a sagittis in", tags: ['tag1', 'tag2', 'tag3'],cines: ["Nuevo Centro","Tres Cruces"]},
      { id: '3', postImg: { id: "imagen3", url: '/assets/images/harry.jpg', alt: 'img2' }, name: 'Pelicula3', description: "Aenean cursus nisi augue, vel sodales elit faucibus quis. Nulla ultrices vitae ligula ut placerat. Morbi fermentum ante id urna laoreet, id sollicitudin lacus efficitur. Sed tristique laoreet sapien insollicitudin imperdiibh sollicitudid tristique laoreet sapien insollicitudin imperdiibh sollicitudin imperdiefeugiat mauris, eu blandit libero. Nam", tags: ['tag1', 'tag2', 'tag3'],cines: ["Nuevo Centro","Tres Cruces"]},
    ];

    const extras: Extra[] = [
      { id: '1', name: "Coca Cola", price: 50},
      { id: '2', name: "Coca Cola Zero", price: 50},
      { id: '3', name: "Coca Cola Ligth", price: 50}
    ];

    const funciones: Funciones[] = [
      { id: '1', pelicula: "Batman", peliculaid: "1", cine: "Tres Cruces", horario: "21:30", price: 100, seats: [{"asiento":"A1", "ocupado" : true},
      {"asiento":"A2", "ocupado" : false},
      {"asiento":"A3", "ocupado" : false},
      {"asiento":"A4", "ocupado" : false},
      {"asiento":"A5", "ocupado" : false},
      {"asiento":"A6", "ocupado" : true},
      {"asiento":"B1", "ocupado" : false},
      {"asiento":"B2", "ocupado" : false},
      {"asiento":"B3", "ocupado" : false},
      {"asiento":"B4", "ocupado" : true},
      {"asiento":"B5", "ocupado" : false},
      {"asiento":"B6", "ocupado" : false},
      {"asiento":"C1", "ocupado" : true},
      {"asiento":"C2", "ocupado" : false},
      {"asiento":"C3", "ocupado" : false},
      {"asiento":"C4", "ocupado" : false},
      {"asiento":"C5", "ocupado" : false},
      {"asiento":"C6", "ocupado" : false},
      {"asiento":"D1", "ocupado" : false},
      {"asiento":"D2", "ocupado" : true},
      {"asiento":"D3", "ocupado" : false},
      {"asiento":"D4", "ocupado" : false},
      {"asiento":"D5", "ocupado" : false},
      {"asiento":"D6", "ocupado" : false},]}
    ];
    return { movies, extras, funciones };
  }
}
