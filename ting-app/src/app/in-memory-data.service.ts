import { Injectable } from '@angular/core';
import { Movie } from './interfaces/movie';
import { Extra } from './interfaces/extras';
import { Funcion } from './interfaces/funcion';
import { Seats } from "./interfaces/seats";
import { Room } from './interfaces/room';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  createDb() {
    const movies: Movie[] = [
      { id: '1', postImg: { id: "imagen1", url: '/assets/images/spider.jpg', urlWide: '/assets/images/spider-wide.jpg',  alt: 'img1' }, name: 'Spiderman', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed blandit nulla, et iaculis quam. Vivamus vulputate augue vitae cursus dapibus. Aliquam luctus egestas tortor quis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam erat eget risus blandit, sodales aliquet augue eleifend. Quisque eu fauciur eu.", tags: ['tag1', 'tag2', 'tag3']},
      { id: '2', postImg: { id: "imagen2", url: '/assets/images/avatar.jpg', urlWide: '/assets/images/avatar-wide.jpg', alt: 'img2' }, name: 'Avatar', description: "In urna enim, fringilla non erat ac, commodo hendrerit elit. Sed egestas auctor ex, vitae ultrices massa lacinia id. Nullam mattis viverra mauris, eget rhoncus dui consectetur nec. Nulla finibus dolor eget convallis bibendum. Etiam semper ante ac orci varius, scelerisque mollis dui faucibus. Vivamus ex risus, suscipit at accuesent justo ex, porttitor a sagittis in", tags: ['tag1', 'tag2', 'tag3']},
      { id: '3', postImg: { id: "imagen3", url: '/assets/images/harry.jpg', urlWide: '/assets/images/harry-wide.jpg', alt: 'img2' }, name: 'HarryPotter', description: "Aenean cursus nisi augue, vel sodales elit faucibus quis. Nulla ultrices vitae ligula ut placerat. Morbi fermentum ante id urna laoreet, id sollicitudin lacus efficitur. Sed tristique laoreet sapien insollicitudin imperdiibh sollicitudid tristique laoreet sapien insollicitudin imperdiibh sollicitudin imperdiefeugiat mauris, eu blandit libero. Nam", tags: ['tag1', 'tag2', 'tag3']},
      { id: '4', postImg: { id: "imagen4", url: '/assets/images/batman.jpg', urlWide: '/assets/images/batman-wide.jpeg', alt: 'img2' }, name: 'Batman', description: "Aenean cursus nisi augue, vel sodales elit faucibus quis. Nulla ultrices vitae ligula ut placerat. Morbi fermentum ante id urna laoreet, id sollicitudin lacus efficitur. Sed tristique laoreet sapien insollicitudin imperdiibh sollicitudid tristique laoreet sapien insollicitudin imperdiibh sollicitudin imperdiefeugiat mauris, eu blandit libero. Nam", tags: ['tag1', 'tag2', 'tag3']},
    ];

    const extras: Extra[] = [
      { id: '1', name: "Coca Cola", price: 50, img: "/assets/extras/cocacola.png" },
      { id: '2', name: "Coca Cola Zero", price: 50, img: "/assets/extras/cocacola.png"},
      { id: '3', name: "Pop", price: 50, img: "/assets/extras/popcorn.png"},
      { id: '4', name: "Pop Dulce", price: 50, img: "/assets/extras/popcorn.png"},
      { id: '5', name: "Pop Salado", price: 50, img: "/assets/extras/popcorn.png"}
    ];

    const rooms: Room[] = [
          { room_id: "1",
            seats: [ {row: 1 , seat: 1 , empty: false,  available: false}, {row: 1 , seat: 2 , empty: false,  available: true}, {row: 1 , seat: 3 , empty: false,  available: true},{row: 1 , seat: 4 , empty: false,  available: true} , {row: 1 , seat: 5 , empty: false,  available: true}, {row: 1 , seat: 6 , empty: false,  available: true}, {row: 1 , seat: 7 , empty: false,  available: true}, {row: 1 , seat: 8 , empty: false,  available: true}, {row: 1 , seat: 9 , empty: false,  available: true}, {row: 1 , seat: 10 , empty: false,  available: true}, {row: 1 , seat: 11 , empty: false,  available: true},

              {row: 2 , seat: 1 , empty: true,  available: false}, {row: 2 , seat: 2 , empty: false,  available: true}, {row: 2 , seat: 3 , empty: false,  available: true},{row: 2 , seat: 4 , empty: false,  available: true} , {row:2 , seat: 5 , empty: false,  available: true}, {row: 2 , seat: 6 , empty: false,  available: true}, {row: 2 , seat: 7 , empty: true,  available: false}, {row: 2 , seat: 8 , empty: false,  available: true}, {row: 2 , seat: 9 , empty: false,  available: true}, {row: 2 , seat: 10 , empty: false,  available: true}, {row: 2 , seat: 11 , empty: false,  available: true}, {row: 2 , seat: 12, empty: false,  available: true},

              {row: 3 , seat: 1 , empty: true,  available: false}, {row: 3 , seat: 2 , empty: true,  available: false}, {row: 3 , seat: 3 , empty: false,  available: true},{row: 3 , seat: 4 , empty: false,  available: true} , {row: 3 , seat: 5 , empty: false,  available: true}, {row: 3 , seat: 6 , empty: false,  available: true}, {row: 3  , seat: 7 , empty: false,  available: true}, {row: 3, seat: 8 , empty: false,  available: true}, {row: 3 , seat: 9 , empty: false,  available: true}, {row: 3 , seat: 10 , empty: false,  available: false}, {row: 3 , seat: 11 , empty: false,  available: true}, {row: 3 , seat: 12, empty: false,  available: true},

              {row: 4 , seat: 1 , empty: false,  available: true}, {row: 4 , seat: 2 , empty: false,  available: true}, {row: 4 , seat: 3 , empty: false,  available: true},{row: 4 , seat: 4 , empty: false,  available: true} , {row: 4 , seat: 5 , empty: false,  available: true}, {row: 4 , seat: 6 , empty: false,  available: true}, {row: 4  , seat: 7 , empty: false,  available: true}, {row: 4, seat: 8 , empty: false,  available: true}, {row: 4, seat: 9 , empty: false,  available: true}, {row: 4 , seat: 10 , empty: false,  available: true},

              {row: 5 , seat: 1 , empty: false,  available: true}, {row: 5 , seat: 2 , empty: false,  available: true}, {row: 5 , seat: 3 , empty: false,  available: true},{row: 5 , seat: 4 , empty: false,  available: true} , {row: 5 , seat: 5 , empty: false,  available: true}, {row: 5 , seat: 6 , empty: false,  available: true}, {row: 5  , seat: 7 , empty: false,  available: true}, {row: 5, seat: 8 , empty: false,  available: true}, {row: 5, seat: 9 , empty: false,  available: true}, {row: 5 , seat: 10 , empty: false,  available: true},

              {row: 6 , seat: 1 , empty: false,  available: true}, {row: 6 , seat: 2 , empty: false,  available: true}, {row: 6 , seat: 3 , empty: false,  available: true},{row: 6 , seat: 4 , empty: false,  available: true} , {row: 6 , seat: 5 , empty: false,  available: true}, {row: 6 , seat: 6 , empty: false,  available: true}, {row: 6  , seat: 7 , empty: false,  available: true}, {row: 6, seat: 8 , empty: false,  available: true}, {row: 6, seat: 9 , empty: false,  available: true}, {row: 6 , seat: 10 , empty: false,  available: true},

              {row: 7 , seat: 1 , empty: false,  available: true}, {row: 7 , seat: 2 , empty: false,  available: true}, {row: 7 , seat: 3 , empty: false,  available: true},{row: 7 , seat: 4 , empty: false,  available: true} , {row: 7 , seat: 5 , empty: false,  available: true}, {row: 7 , seat: 6 , empty: false,  available: true}, {row: 7  , seat: 7 , empty: false,  available: true}, {row: 7, seat: 8 , empty: false,  available: true}, {row: 7, seat: 9 , empty: false,  available: true}, {row: 7 , seat: 10 , empty: false,  available: true},

              {row: 8 , seat: 1 , empty: false,  available: true}, {row: 8 , seat: 2 , empty: false,  available: true}, {row: 8 , seat: 3 , empty: false,  available: true},{row: 8 , seat: 4 , empty: false,  available: true} , {row: 8 , seat: 5 , empty: false,  available: true}, {row: 8 , seat: 6 , empty: false,  available: true}, {row: 8  , seat: 7 , empty: false,  available: true}, {row: 8, seat: 8 , empty: false,  available: true}, {row: 8, seat: 9 , empty: false,  available: true}, {row: 8 , seat: 10 , empty: false,  available: true},

                    ] 
          }
    ];
 
    const funciones: Funcion[] = [
      { id: '1', movie:  movies[0] , theater: "Tres Cruces", date: "2022-11-01", horario: "21:00", price: 100, room: rooms[0] ,
       seatsUnavailable: [{row: 1 , seat: 1 , empty: false,  available: false}, {row: 1 , seat: 2 , empty: false,  available: false}, {row: 1 , seat: 3 ,
         empty: false,  available: false},{row: 1 , seat: 4 , empty: false,  available: false} 
        , {row: 1 , seat: 5 , empty: false,  available: false}, {row: 1 , seat: 6 , empty: false,  available: false},
         {row: 1 , seat: 7 , empty: false,  available: false}, {row: 1 , seat: 8 , empty: false,  available: false},
          {row: 1 , seat: 9 , empty: false,  available: false}, {row: 1 , seat: 10 , empty: false,  available: false},
           {row: 1 , seat: 11 , empty: false,  available: false}]},
      { id: '2', movie:  movies[0] , theater: "Mdeo Shop", date: "2022-11-30", horario: "21:10", price: 100, room: rooms[0], seatsUnavailable: []},
      { id: '3', movie:  movies[0] , theater: "Punta Carretas ", date: "2022-11-30", horario: "21:20", price: 100, room: rooms[0], seatsUnavailable: []},
      { id: '4', movie:  movies[0] , theater: "Nuevo Centro", date: "2022-11-30", horario: "21:30", price: 100, room: rooms[0], seatsUnavailable: []},
      { id: '5', movie:  movies[0] , theater: "Interior", date: "2022-11-30", horario: "21:40", price: 100, room: rooms[0], seatsUnavailable: []},
      { id: '6', movie:  movies[1] , theater: "Tres Cruces", date: "2022-11-30", horario: "22:00", price: 100, room: rooms[0], seatsUnavailable: [] },
      { id: '7', movie:  movies[1] , theater: "Tres Cruces", date: "2022-11-30", horario: "22:10", price: 100, room: rooms[0], seatsUnavailable: []},
      { id: '8', movie:  movies[1] , theater: "Tres Cruces", date: "2022-11-30", horario: "22:20", price: 100, room: rooms[0], seatsUnavailable: []},
      { id: '9', movie:  movies[1] , theater: "Tres Cruces", date: "2022-11-30", horario: "22:00", price: 100, room: rooms[0], seatsUnavailable: []},
      { id: '10', movie:  movies[1] , theater: "Tres Cruces", date: "2022-11-30", horario: "22:10", price: 100, room: rooms[0], seatsUnavailable: []},
      { id: '11', movie:  movies[1] , theater: "Tres Cruces", date: "2022-11-30", horario: "22:20", price: 100, room: rooms[0], seatsUnavailable: []},
      { id: '12', movie:  movies[1] , theater: "Tres Cruces", date: "2022-11-30", horario: "22:00", price: 100, room: rooms[0], seatsUnavailable: []},
      { id: '13', movie:  movies[1] , theater: "Tres Cruces", date: "2022-11-30", horario: "22:10", price: 100, room: rooms[0], seatsUnavailable: []},
      { id: '14', movie:  movies[1] , theater: "Tres Cruces", date: "2022-11-30", horario: "22:20", price: 100, room: rooms[0], seatsUnavailable: []},
      { id: '15', movie:  movies[1] , theater: "18 Julio", date: "2022-11-30", horario: "22:10", price: 100, room: rooms[0], seatsUnavailable: []},
      { id: '16', movie: movies[1], theater: "Costa Urbana", date: "2022-11-30", horario: "22:20", price: 100, room: rooms[0], seatsUnavailable: []},
      { id: '17', movie:  movies[3] , theater: "Tres Cruces", date: "2022-11-30", horario: "21:00", price: 100, room: rooms[0], seatsUnavailable: []},
      { id: '18', movie:  movies[3] , theater: "Mdeo Shop", date: "2022-11-30", horario: "21:10", price: 100, room: rooms[0], seatsUnavailable: []},
      { id: '19', movie:  movies[3] , theater: "Punta Carretas ", date: "2022-11-30", horario: "21:20", price: 100, room: rooms[0], seatsUnavailable: []},
      { id: '20', movie:  movies[3] , theater: "Nuevo Centro", date: "2022-11-30", horario: "21:30", price: 100, room: rooms[0], seatsUnavailable: []},
      { id: '21', movie:  movies[3] , theater: "Interior", date: "2022-11-30", horario: "21:40", price: 100, room: rooms[0], seatsUnavailable: []}
    ];

    return { movies, extras, funciones, rooms };
  }
}
