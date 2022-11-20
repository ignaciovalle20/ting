import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MovieImg } from 'src/app/interfaces/movieImg';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-post-img',
  templateUrl: './post-img.component.html',
  styleUrls: ['./post-img.component.scss']
})
export class MovieImgComponent implements OnInit {

  @Input() image!: MovieImg;
  @Input() movie!: string;;

  constructor() { }

  ngOnInit(): void {

  }


}
