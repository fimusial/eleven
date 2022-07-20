import { Pipe, PipeTransform } from '@angular/core';
import { DictionaryService } from './dictionary.service';

@Pipe({
  name: 'trs'
})
export class TranslatePipe implements PipeTransform {

  constructor(private dictionaryService: DictionaryService) {
  }

  transform(value: string, ...args: any[]): string {
    let dictionary = this.dictionaryService.getDictionary();
    let keys = value.split('.');

    if (keys.length === 1) {
      keys = ['enums', keys[0]];
    }

    if (keys.length !== 2) {
      return value;
    }

    for (let i = 0; i < 2; i++) {
      dictionary = dictionary[keys[i].replace(/\s/g, '')];
      if (!dictionary) {
        return value;
      }
    }

    return dictionary as string;
  }
}
