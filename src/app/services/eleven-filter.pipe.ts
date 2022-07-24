import { Pipe, PipeTransform } from '@angular/core';
import { FilteringParameters } from '../catalog/filtering-form/filteringParameters';
import { Actor } from '../models/actor';

@Pipe({
  name: 'elevenFilter'
})
export class ElevenFilterPipe implements PipeTransform {

  transform(data: Actor[], params: FilteringParameters): Actor[] {
    return data.filter(actor => {
      return (!params.sexEnabled || (params.sex == actor.sex))
        && (!params.ageEnabled || (params.minAge <= actor.age && actor.age <= params.maxAge))
        && (!params.heightEnabled || (params.minHeight <= actor.height && actor.height <= params.maxHeight))
        && (!params.hairColorEnabled || (params.hairColor == actor.hairColor))
        && (!params.eyeColorEnabled || (params.eyeColor == actor.eyeColor))
        && (!params.ethnicityEnabled || (params.ethnicity == actor.ethnicity))
        && (!params.locationEnabled || actor.locations.includes(params.location));
    });
  }
}
