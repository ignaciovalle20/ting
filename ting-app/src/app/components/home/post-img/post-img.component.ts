import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PostImg } from 'src/app/interfaces/postImg';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-post-img',
  templateUrl: './post-img.component.html',
  styleUrls: ['./post-img.component.scss']
})
export class PostImgComponent implements OnInit {

  @Input() image!: PostImg;
  @Input() movie!: string;;

  constructor() { }

  ngOnInit(): void {

  }


}
