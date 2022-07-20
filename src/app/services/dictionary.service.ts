import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private readonly dictionaryPL: any = {
    enums: {
      dark: 'Ciemne',
      light: 'Jasne',
      red: 'Rude',
      other: 'Inne',
      female: 'Kobieta',
      male: 'Mężczyzna',
    },
    filteringForm: {
      collapsedMessage: 'Szukaj'
    },
    header: {
      about: 'Zasady',
      catalog: 'Katalog',
      contact: 'Kontakt'
    },
    mainPage: {
      h1: 'Agencja Eleven',
      h2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      button: 'SZUKAJ'
    },
  }

  constructor() { }

  public getDictionary(): any {
    return this.dictionaryPL;
  }
}
