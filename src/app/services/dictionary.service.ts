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
      caucasian: 'Kaukaskie',
      asian: 'Azjatyckie',
      african: 'Afrykańskie',
      greaterPoland: 'Wielkopolskie',
      kuyaviaPomerania: 'Kujawsko-Pomorskie',
      lesserPoland: 'Małopolskie',
      lodz: 'Łódzkie',
      lowerSilesia: 'Dolnośląskie',
      lublin: 'Lubelskie',
      lubusz: 'Lubuskie',
      masovia: 'Mazowieckie',
      opole: 'Opolskie',
      podlaskie: 'Podlaskie',
      pomerania: 'Pomorskie',
      silesia: 'Śląskie',
      subcarpathia: 'Podkarpackie',
      holyCross: 'Świętokrzyskie',
      warmiaMasuria: 'Warmińsko-Mazurskie',
      westPomerania: 'Zachodniopomorskie',
      brown: 'Brązowe',
      green: 'Zielone',
      blue: 'Niebieskie',
      gray: 'Szare',
    },
    catalog: {
      sectionTitle: 'Katalog',
      overlayHeight: 'Wzrost',
      overlayAge: 'Wiek',
      overlaySex: 'Płeć',
      overlayHairColor: 'Kolor włosów',
      overlayEyeColor: 'Kolor oczu',
      overlayEthnicity: 'Pochodzenie etniczne',
      noData: 'Brak wyników',
    },
    filteringForm: {
      collapsedMessage: 'Szukaj',
      sexLabel: 'Płeć',
      ageLabel: 'Wiek',
      heightLabel: 'Wzrost',
      hairColorLabel: 'Kolor włosów',
      eyeColorLabel: 'Kolor oczu',
      ethnicityLabel: 'Pochodzenie etniczne',
      locationLabel: 'Lokalizacja',
      resetButton: 'Wyczyść filtry',
      submitButton: 'Szukaj',
    },
    contactForm: {
      sectionTitle: 'Kontakt',
      senderNameLabel: 'Twoje imię',
      replyToLabel: 'Adres email',
      subjectLabel: 'Temat',
      messageLabel: 'Wiadomość',
      attachmentLabel: 'Załącznik (tylko PDF)',
      submitButton: 'Wyślij',
      thankYouMessage: 'Dziękujemy za Twoją wiadomość',
      back: 'powrót',
    },
    header: {
      about: 'Zasady',
      catalog: 'Katalog',
      contact: 'Kontakt',
    },
    mainPage: {
      h1: 'Agencja Eleven',
      h2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      button: 'SZUKAJ',
    },
    footer: {
      content: '2022 - made by reyss - #71',
    }
  }

  constructor() { }

  public getDictionary(): any {
    return this.dictionaryPL;
  }
}
