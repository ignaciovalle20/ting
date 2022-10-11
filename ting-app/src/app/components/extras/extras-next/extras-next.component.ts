import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-extras-next',
  templateUrl: './extras-next.component.html',
  styleUrls: ['./extras-next.component.scss']
})
export class ExtrasNextComponent implements OnInit {

  @Output() ExtrasNext = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  extrasNext(event: MouseEvent) {
    this.ExtrasNext.emit(event);
  }
}
