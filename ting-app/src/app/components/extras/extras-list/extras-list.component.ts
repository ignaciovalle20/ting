import { Component, OnInit } from '@angular/core';
import { Extra } from '../../../interfaces/extras';
import { ExtrasService } from '../../../services/extras.service';

@Component({
  selector: 'app-extras-list',
  templateUrl: './extras-list.component.html',
  styleUrls: ['./extras-list.component.scss']
})
export class ExtrasListComponent implements OnInit {
String(arg0: string) {
  throw new Error('Method not implemented.');
  }
  extras: Extra[] = [];

  constructor(private extrasService: ExtrasService) { }

  ngOnInit(): void {
    this.extrasService.getExtras()
      .subscribe(extras => {
        this.extras = extras;
      });
  }
}
