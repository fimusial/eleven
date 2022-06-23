import { Injectable } from '@angular/core';
import data from '../../assets/data/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any;

  constructor() {
    this.data = data;
  }

  public getData(): any {
    return JSON.parse(JSON.stringify(this.data));
  }
}
