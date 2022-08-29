import { Pipe, PipeTransform } from '@angular/core';
import { FilteringParameters } from '../catalog/filtering-form/filtering-parameters';
import { Actor } from '../models/actor';

@Pipe({
  name: 'elevenFilter'
})
export class ElevenFilterPipe implements PipeTransform {

  transform(data: Actor[], params: FilteringParameters): Actor[] {
    return data.filter(actor => {
      return (!params.sex || params.sex === actor.sex)
        && (params.minAge <= actor.age && actor.age <= params.maxAge)
        && (params.minHeight <= actor.height && actor.height <= params.maxHeight)
        && (!params.hairColor || params.hairColor === actor.hairColor)
        && (!params.eyeColor || params.eyeColor === actor.eyeColor)
        && (!params.ethnicity || params.ethnicity === actor.ethnicity)
        && (!params.location || actor.locations.includes(params.location));
    });
  }
}
