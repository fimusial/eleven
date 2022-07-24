import { Ethnicity } from "./ethnicity";
import { HairColor } from "./hair-color";
import { Sex } from "./sex";
import { Location } from "./location";
import { Experience } from "./experience";
import { Language } from "./language";
import { Performance } from "./performance";
import { EyeColor } from "./eye-color";

export class Actor {
  public id: string;
  public name: string;
  public birthYear: number;
  public height: number;
  public sex: Sex;
  public hairColor: HairColor;
  public ethnicity: Ethnicity;
  public eyeColor: EyeColor;
  public locations: Location[];
  public languages: Language[];
  public experience: Experience;
  public performances: Performance[];
  public skillsDescription: string;
  public avoids: string;
  public profilePicturePath: string;
  public otherPicturesPaths: string[];
  public youtubeVideosUrls: string[];

  constructor(obj?: any) {
    this.id = '';
    this.name = '';
    this.birthYear = 0;
    this.height = 0;
    this.sex = Sex.Female;
    this.hairColor = HairColor.Dark;
    this.ethnicity = Ethnicity.Caucasian;
    this.eyeColor = EyeColor.Brown;
    this.locations = [];
    this.languages = [];
    this.experience = Experience.Low;
    this.performances = [];
    this.skillsDescription = '';
    this.avoids = '';
    this.profilePicturePath = '';
    this.otherPicturesPaths = [];
    this.youtubeVideosUrls = [];

    if (obj) {
      for (let key in this) {
        if (obj[key]) {
          this[key] = obj[key];
        }
      }
    }
  }

  public get age(): number {
    return new Date().getFullYear() - this.birthYear;
  }
}
