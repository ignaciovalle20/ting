import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seats-btn-next',
  templateUrl: './seats-btn-next.component.html',
  styleUrls: ['./seats-btn-next.component.scss']
})
export class SeatsBtnNextComponent implements OnInit {

  @Output () goNextEvent = new EventEmitter<MouseEvent>();
  constructor() { }

  ngOnInit(): void {
  }

  goNext() {
    console.log("goNext");
    this.goNextEvent.emit();
    // this.route.navigate(['/snacks']);
  }
}
