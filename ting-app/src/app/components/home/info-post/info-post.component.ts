import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-info-post',
  templateUrl: './info-post.component.html',
  styleUrls: ['./info-post.component.scss']
})
export class InfoPostComponent implements OnInit {

  @Input() description?: string;
  @Input() movie?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
