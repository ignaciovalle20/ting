import { Injectable } from '@angular/core';
import { Movie } from './interfaces/movie';
import { Extra } from './interfaces/extras';
import { Funciones } from './interfaces/funciones';
import { Seats } from "./interfaces/seats";
import { Room } from './interfaces/room';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  createDb() {
    const movies: Movie[] = [
      { id: '1', postImg: { id: "imagen1", url: '/assets/images/spider.jpg', urlWide: '/assets/images/spider-wide.jpg',  alt: 'img1' }, name: 'Batman', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed blandit nulla, et iaculis quam. Vivamus vulputate augue vitae cursus dapibus. Aliquam luctus egestas tortor quis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam erat eget risus blandit, sodales aliquet augue eleifend. Quisque eu fauciur eu.", tags: ['tag1', 'tag2', 'tag3']},
      { id: '2', postImg: { id: "imagen2", url: '/assets/images/avatar.jpg', urlWide: '/assets/images/spider-wide.jpg', alt: 'img2' }, name: 'Avatar', description: "In urna enim, fringilla non erat ac, commodo hendrerit elit. Sed egestas auctor ex, vitae ultrices massa lacinia id. Nullam mattis viverra mauris, eget rhoncus dui consectetur nec. Nulla finibus dolor eget convallis bibendum. Etiam semper ante ac orci varius, scelerisque mollis dui faucibus. Vivamus ex risus, suscipit at accuesent justo ex, porttitor a sagittis in", tags: ['tag1', 'tag2', 'tag3']},
      { id: '3', postImg: { id: "imagen3", url: '/assets/images/harry.jpg', urlWide: '/assets/images/spider-wide.jpg', alt: 'img2' }, name: 'HarryPotter', description: "Aenean cursus nisi augue, vel sodales elit faucibus quis. Nulla ultrices vitae ligula ut placerat. Morbi fermentum ante id urna laoreet, id sollicitudin lacus efficitur. Sed tristique laoreet sapien insollicitudin imperdiibh sollicitudid tristique laoreet sapien insollicitudin imperdiibh sollicitudin imperdiefeugiat mauris, eu blandit libero. Nam", tags: ['tag1', 'tag2', 'tag3']},
    ];

    const seats: Seats[] = [ {seat: "A1" , status: true}, {seat:"A2", status : false}, {seat:"A3", status : false}, {seat:"A4", status : false}, {seat:"A5", status : false},      
    {seat:"A6", status : true}, {seat:"B1", status : false}, {seat:"B2", status : false}, {seat:"B3", status : false}, {seat:"B4", status : true}, {seat:"B5", status : false},

    {seat:"B6", status : false}, {seat:"C1", status : true}, {seat:"C2", status : false}, {seat:"C3", status : false}, {seat:"C4", status : false}, {seat:"C5", status : false},
    {seat:"C6", status : false}, {seat:"D1", status : false}, {seat:"D2", status : true}, {seat:"D3", status : false}, {seat:"D4", status : false}, {seat:"D5", status : false},
    {seat:"D6", status : false}];

    const extras: Extra[] = [
      { id: '1', name: "Coca Cola", price: 50},
      { id: '2', name: "Coca Cola Zero", price: 50},
      { id: '3', name: "Coca Cola Ligth", price: 50}
    ];

 const rooms: Room[] = [
       { room_id: "1",
         seats: [ {seat: "A1" , status: true}, {seat:"A2", status : false}, {seat:"A3", status : false}, {seat:"A4", status : false}, {seat:"A5", status : false},
                  {seat:"A6", status : true}, {seat:"B1", status : false}, {seat:"B2", status : false}, {seat:"B3", status : false}, {seat:"B4", status : true}, {seat:"B5", status : false},
                  {seat:"B6", status : false}, {seat:"C1", status : true}, {seat:"C2", status : false}, {seat:"C3", status : false}, {seat:"C4", status : false}, {seat:"C5", status : false},
                  {seat:"C6", status : false}, {seat:"D1", status : false}, {seat:"D2", status : true}, {seat:"D3", status : false}, {seat:"D4", status : false}, {seat:"D5", status : false},
                  {seat:"D6", status : false}
                ] 
      }
 ]
    const funciones: Funciones[] = [
      { id: '1', movie:  movies[0] , theater: "Tres Cruces", date: "2022-10-30", horario: "21:00", price: 100, room: [rooms[0]]},
      { id: '1', movie:  movies[0] , theater: "Mdeo Shop", date: "2022-10-30", horario: "21:10", price: 100, room: [rooms[0]]},
      { id: '1', movie:  movies[0] , theater: "Punta Carretas ", date: "2022-10-30", horario: "21:20", price: 100, room: [rooms[0]]},
      { id: '1', movie:  movies[0] , theater: "Nuevo Centro", date: "2022-10-30", horario: "21:30", price: 100, room: [rooms[0]]},
      { id: '1', movie:  movies[0] , theater: "Interior", date: "2022-10-30", horario: "21:40", price: 100, room: [rooms[0]]},
      { id: '1', movie:  movies[1] , theater: "Tres Cruces", date: "2022-10-30", horario: "22:00", price: 100, room: [rooms[0]]},
      { id: '1', movie:  movies[1] , theater: "Tres Cruces", date: "2022-10-30", horario: "22:10", price: 100, room: [rooms[0]]},
      { id: '1', movie:  movies[1] , theater: "Tres Cruces", date: "2022-10-30", horario: "22:20", price: 100, room: [rooms[0]]},
      { id: '1', movie:  movies[1] , theater: "Tres Cruces", date: "2022-10-30", horario: "22:00", price: 100, room: [rooms[0]]},
      { id: '1', movie:  movies[1] , theater: "Tres Cruces", date: "2022-10-30", horario: "22:10", price: 100, room: [rooms[0]]},
      { id: '1', movie:  movies[1] , theater: "Tres Cruces", date: "2022-10-30", horario: "22:20", price: 100, room: [rooms[0]]},
      { id: '1', movie:  movies[1] , theater: "Tres Cruces", date: "2022-10-30", horario: "22:00", price: 100, room: [rooms[0]]},
      { id: '1', movie:  movies[1] , theater: "Tres Cruces", date: "2022-10-30", horario: "22:10", price: 100, room: [rooms[0]]},
      { id: '1', movie:  movies[1] , theater: "Tres Cruces", date: "2022-10-30", horario: "22:20", price: 100, room: [rooms[0]]},
      { id: '1', movie:  movies[1] , theater: "18 Julio", date: "2022-10-30", horario: "22:10", price: 100, room: [rooms[0]]},
      { id: '2', movie: movies[1], theater: "Costa Urbana", date: "2022-10-30", horario: "22:20", price: 100, room: [rooms[0]]}
    ];


    return { movies, extras, funciones, rooms };
  }
}
