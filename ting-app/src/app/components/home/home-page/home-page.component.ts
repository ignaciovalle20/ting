import { Component, OnInit } from '@angular/core';
import { DiscoverImgsService } from '../../../services/discover-imgs.service';
import { Movie } from '../../../interfaces/movie';

@Component({
  selector: 'app-discover-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private discoverImgsService: DiscoverImgsService) { }

  ngOnInit(): void {
    this.discoverImgsService.getArrayOfImgs()
      .subscribe(imgs => {
        this.movies = imgs;
      }); 
 
  
    }

}
