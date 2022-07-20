import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { Ethnicity } from 'src/app/models/ethnicity';
import { HairColor } from 'src/app/models/hair-color';
import { Location } from 'src/app/models/location';
import { Sex } from 'src/app/models/sex';

@Component({
  selector: 'eleven-filtering-form',
  templateUrl: './filtering-form.component.html',
  styleUrls: ['./filtering-form.component.css'],
})
export class FilteringFormComponent implements OnInit {
  public collapsed: boolean = true;
  public hairColorEnum = HairColor;
  public ethnicityEnum = Ethnicity;
  public locationEnum = Location;
  public sexEnum = Sex;

  public readonly sliderOptions: Options = {
    floor: 18,
    ceil: 100,
    showTicks: false,
    step: 1,
    minRange: 1,
    pushRange: true,
  };

  public sliderMinValue = 24;
  public sliderMaxValue = 34;

  constructor() {}

  ngOnInit(): void {}
}
