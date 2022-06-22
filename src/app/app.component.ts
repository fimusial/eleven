import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import * as aos from 'aos';
import { DictionaryService } from './services/dictionary.service';

@Component({
  selector: 'eleven-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public title = 'eleven';

  constructor(
    private dataService: DataService,
  ) {
  }

  ngOnInit(): void {
    aos.init();
  }
}
