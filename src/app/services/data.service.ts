import { Injectable } from '@angular/core';
import data from '../../assets/data/data.json';
import { Actor } from '../models/actor';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: Actor[] = [];

  public getData(): Actor[] {
    return JSON.parse(JSON.stringify(data)) as Actor[];
  }
}
