import { Component, OnInit, ViewChild } from '@angular/core';
import { SeatsGridComponent } from './seats-grid/seats-grid.component';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { Seats } from 'src/app/interfaces/seats';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {

  seats?: Seats ;

  constructor(private datasharing: DataSharingService, private route: Router) { }

  ngOnInit(): void {
  }

  @ViewChild (SeatsGridComponent) seatsGridComponent!: SeatsGridComponent ; 
  gotoNextPage(){
    console.log("getseats",this.seatsGridComponent.getSeats());
    this.datasharing.setSeats(this.seatsGridComponent.getSeats());
    this.route.navigate(['/snacks']);
  }

}
