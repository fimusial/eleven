import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private readonly dictionary: any = {
    header: {
      about: "Zasady",
      catalog: "Katalog",
      contact: "Kontakt"
    },
    mainPage: {
      h1: "Agencja Eleven",
      h2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      button: "SZUKAJ"
    }
  }

  constructor() { }

  public getDictionary(): any {
    return this.dictionary;
  }
}
