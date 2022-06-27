import { Component, OnInit } from '@angular/core';
import { Actor } from '../models/actor';
import { DataService } from '../services/data.service';

@Component({
  selector: 'eleven-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public readonly dataLocation = '../../assets/data/';
  public readonly data: Actor[];

  constructor(public dataService: DataService) {
    this.data = dataService.getData();
  }

  ngOnInit(): void {
  }
}
