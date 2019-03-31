import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'reactiveApp';
  }

}
