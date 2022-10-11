import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.scss']
})
export class ExtrasComponent implements OnInit {

  constructor(private route: Router, private dataSharing: DataSharingService) { }

  @ViewChild('extrasList') extrasList!: any;

  ngOnInit(): void {
  }

  extrasNext(){
    this.dataSharing.setExtras(this.extrasList.compras);
    this.route.navigate(['/summary']);
  }

}
