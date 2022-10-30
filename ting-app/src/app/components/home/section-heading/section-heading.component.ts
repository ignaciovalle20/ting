import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.scss']
})
export class SectionHeadingComponent implements OnInit {
  @Input() text: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
