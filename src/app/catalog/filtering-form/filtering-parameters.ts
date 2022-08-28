import { Ethnicity } from 'src/app/models/ethnicity';
import { HairColor } from 'src/app/models/hair-color';
import { Sex } from 'src/app/models/sex';
import { Location } from 'src/app/models/location';
import { EyeColor } from 'src/app/models/eye-color';

export class FilteringParameters {
  public sexEnabled: boolean = false;
  public sex: Sex = Sex.Female;
  public ageEnabled: boolean = false;
  public minAge: number = 20;
  public maxAge: number = 48;
  public heightEnabled: boolean = false;
  public minHeight: number = 155;
  public maxHeight: number = 195;
  public hairColorEnabled: boolean = false;
  public hairColor: HairColor = HairColor.Dark;
  public eyeColorEnabled: boolean = false;
  public eyeColor: EyeColor = EyeColor.Brown;
  public ethnicityEnabled: boolean = false;
  public ethnicity: Ethnicity = Ethnicity.Caucasian;
  public locationEnabled: boolean = false;
  public location: Location = Location.Masovia;
}
