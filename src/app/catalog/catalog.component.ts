import { Component, HostListener, OnInit } from '@angular/core';
import { Actor } from '../models/actor';
import { DataService } from '../services/data.service';
import { FilteringParameters } from './filtering-form/filteringParameters';
import { ElevenFilterPipe } from '../services/eleven-filter.pipe';

@Component({
  selector: 'eleven-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public readonly dataLocation = '../../assets/data/';
  public readonly data: Actor[];
  
  public currentPage: number = 1;
  public pageSize: number = 9;
  public paginationBarSize = 3;
  public filteringParameters = new FilteringParameters();
  public filteredData: Actor[] = [];

  constructor(
    dataService: DataService,
    private filter: ElevenFilterPipe) {
    this.data = dataService.getData();
    this.updateFilteredData();
  }

  ngOnInit(): void {
    this.windowResize();
  }

  @HostListener('window:resize', []) public windowResize(): void {
    if (window.innerWidth >= 992) { // lg
      this.paginationBarSize = 5;
    } else {
      this.paginationBarSize = 3;
    }
  }

  public onFilteringParametersChanged(newParameters: FilteringParameters) {
    this.filteringParameters = newParameters;
    this.currentPage = 1;
    this.updateFilteredData();
  }

  private updateFilteredData(): void {
    this.filteredData = this.filter.transform(this.data, this.filteringParameters);
  }
}
