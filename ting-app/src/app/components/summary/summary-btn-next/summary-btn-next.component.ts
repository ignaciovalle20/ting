import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-btn-next',
  templateUrl: './summary-btn-next.component.html',
  styleUrls: ['./summary-btn-next.component.scss']
})
export class SummaryBtnNextComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goNext() {
    console.log("goNext");
     this.route.navigate(['/processing']);
  }
}
