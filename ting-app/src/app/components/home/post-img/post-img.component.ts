import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PostImg } from 'src/app/interfaces/postImg';
import { User } from 'src/app/interfaces/user';
import { FullSizedImageComponent } from '../full-sized-image/full-sized-image.component';

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

  //// VER DE SACAR LO DEL FULL IMAGE NO LO VAMOS A USAR
 @ViewChild('hiddenElement') fullSizedImgElement!: FullSizedImageComponent;

   openImage(){
    this.fullSizedImgElement.show();
  } 



}
