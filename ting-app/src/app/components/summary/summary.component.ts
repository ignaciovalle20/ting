import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private dataSharing: DataSharingService) { }

  movie : string = "";
  theater : String = "";
  date : String = "";
  hora : String = "";
  seats: string = "";

  ngOnInit(): void {
    this.dataSharing.selectedMovie$.subscribe((value) => {
      this.movie = value;
    });
    this.dataSharing.selectedTheater$.subscribe((value) => {
      this.theater = value;
    });
    this.dataSharing.selectedDate$.subscribe((value) => {
      this.date = value.split("-").reverse().join("/");;
    });
    this.dataSharing.selectedFunction$.subscribe((value) => {
      this.hora = value.horario;
    });
    this.dataSharing.selectedSeats$.subscribe((value) => {
      this.seats = value;
    });
  }

}
