import { Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ethnicity } from 'src/app/models/ethnicity';
import { HairColor } from 'src/app/models/hair-color';
import { Location } from 'src/app/models/location';
import { Sex } from 'src/app/models/sex';
import { FilteringParameters } from './filteringParameters';

@Component({
  selector: 'eleven-filtering-form',
  templateUrl: './filtering-form.component.html',
  styleUrls: ['./filtering-form.component.css'],
})
export class FilteringFormComponent implements OnInit {
  @Output() public parameters = new EventEmitter<FilteringParameters>();

  public collapsed: boolean = true;

  public hairColorEnum = HairColor;
  public ethnicityEnum = Ethnicity;
  public locationEnum = Location;
  public sexEnum = Sex;

  public readonly sliderOptions: Options = {
    floor: 18,
    ceil: 50,
    showTicks: false,
    step: 1,
    minRange: 1,
    pushRange: true,
  };

  public default = new FilteringParameters();

  public ageSliderMinValue: number = this.default.minAge;
  public ageSliderMaxValue: number = this.default.maxAge;

  public form = new FormGroup({
    sexEnabled: new FormControl<boolean>(this.default.sexEnabled),
    sex: new FormControl<Sex>(this.default.sex),
    ageEnabled: new FormControl<boolean>(this.default.ageEnabled),
    hairColorEnabled: new FormControl<boolean>(this.default.hairColorEnabled),
    hairColor: new FormControl<HairColor>(this.default.hairColor),
    ethnicityEnabled: new FormControl<boolean>(this.default.ethnicityEnabled),
    ethnicity: new FormControl<Ethnicity>(this.default.ethnicity),
    locationEnabled: new FormControl<boolean>(this.default.locationEnabled),
    location: new FormControl<Location>(this.default.location),
  });

  constructor() {}

  ngOnInit(): void {}

  public onFormSubmitted(): void {
    this.emitParametersEvent();
  }

  public onFormReset(): void {
    this.resetFormState();
    this.emitParametersEvent();
  }

  private emitParametersEvent(): void {
    this.parameters.emit({
      sexEnabled: this.form.value.sexEnabled,
      sex: this.form.value.sex,
      ageEnabled: this.form.value.ageEnabled,
      minAge: this.ageSliderMinValue,
      maxAge: this.ageSliderMaxValue,
      hairColorEnabled: this.form.value.hairColorEnabled,
      hairColor: this.form.value.hairColor,
      ethnicityEnabled: this.form.value.ethnicityEnabled,
      ethnicity:  this.form.value.ethnicity,
      locationEnabled: this.form.value.locationEnabled,
      location: this.form.value.location,
    } as FilteringParameters);
  }

  private resetFormState(): void {
    this.form.reset(this.default);
    this.ageSliderMinValue = this.default.minAge;
    this.ageSliderMaxValue = this.default.maxAge;
  }
}
