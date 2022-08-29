import { Ethnicity } from 'src/app/models/ethnicity';
import { HairColor } from 'src/app/models/hair-color';
import { Sex } from 'src/app/models/sex';
import { Location } from 'src/app/models/location';
import { EyeColor } from 'src/app/models/eye-color';

export class FilteringParameters {
  public sex: Sex | null = null;
  public minAge: number = 20;
  public maxAge: number = 48;
  public minHeight: number = 155;
  public maxHeight: number = 195;
  public hairColor: HairColor | null = null;
  public eyeColor: EyeColor | null = null;
  public ethnicity: Ethnicity | null = null;
  public location: Location | null = null;
}
