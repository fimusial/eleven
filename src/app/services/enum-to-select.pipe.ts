import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'e2s'
})
export class EnumToSelectPipe implements PipeTransform {

  transform(enumeration: { [key: string]: string }, ...args: any[]): string[] {
    return Object.values(enumeration);
  }
}
