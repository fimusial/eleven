import { Component, OnInit } from '@angular/core';
import * as aos from 'aos';

@Component({
  selector: 'eleven-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public title = 'eleven';

  constructor() { }

  ngOnInit(): void {
    aos.init();
  }
}
