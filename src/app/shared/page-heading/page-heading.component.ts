import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.scss']
})
export class PageHeadingComponent implements OnInit {
  @Input() heading: string;
  // @Input() tooltip = 'Add New Item';

  @Output() added: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add(): void {
    this.added.emit(true);
  }

}
