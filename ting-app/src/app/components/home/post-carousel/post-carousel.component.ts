import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-post-carousel',
  templateUrl: './post-carousel.component.html',
  styleUrls: ['./post-carousel.component.scss']
})
export class PostCarouselComponent implements OnInit {
  @Input() movies!: Movie[];

  userloged: boolean = false;

  swipeStartXPos?: number = undefined;

  // NGB Carousel reference and config
  @ViewChild('ngcarousel', { static: false }) ngCarousel!: NgbCarousel;
  showNavigationArrows = true;
  showNavigationIndicators = false;

  constructor(config: NgbCarouselConfig, ) {
    config.interval = 0;
    config.wrap = false;
  }

  ngOnInit(): void {
  }

  captureSwipeStart($event: TouchEvent) {
    this.swipeStartXPos = $event.changedTouches[0].clientX;
  }

  swipePost($event: TouchEvent) {
    if (this.swipeStartXPos === undefined) {
      return;
    }

    const swipeFinalXPos = $event.changedTouches[0].clientX;
    const xDifference = swipeFinalXPos - this.swipeStartXPos;
    if (Math.abs(xDifference) > 70) {
      if (xDifference < 0) {
        this.ngCarousel.next();
      } else {
        this.ngCarousel.prev();
      }
    }

    this.swipeStartXPos = undefined;
  }

 /*  ngAfterviewInit() {
    this.userloged = this.loginService.isUserLoged("admin");
  } */
  

}
