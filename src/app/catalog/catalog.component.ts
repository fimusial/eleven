import { Component, HostListener, OnInit } from '@angular/core';
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
  
  public currentPage: number = 1;
  public pageSize: number = 3;
  public paginationBarSize = 3;

  constructor(public dataService: DataService) {
    this.data = dataService.getData();
  }

  ngOnInit(): void {
    this.windowResize();
  }

  @HostListener("window:resize", []) windowResize() {
    if (window.innerWidth >= 992) { // lg
      this.paginationBarSize = 5;
    } else {
      this.paginationBarSize = 3;
    }
  }
}
