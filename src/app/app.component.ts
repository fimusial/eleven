import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import * as aos from 'aos';
import { DictionaryService } from './services/dictionary.service';

@Component({
  selector: 'eleven-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'eleven';
  public dict: any;

  constructor(
    private dataService: DataService,
    private dictionaryService: DictionaryService,
  ) {
  }

  ngOnInit(): void {
    aos.init();
    this.dict = this.dictionaryService.getDictionary();
  }
}
