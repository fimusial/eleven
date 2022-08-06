import { Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ethnicity } from 'src/app/models/ethnicity';
import { EyeColor } from 'src/app/models/eye-color';
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
  public eyeColorEnum = EyeColor;
  public ethnicityEnum = Ethnicity;
  public locationEnum = Location;
  public sexEnum = Sex;

  public readonly ageSliderOptions: Options = {
    floor: 18,
    ceil: 50,
    showTicks: false,
    step: 1,
    minRange: 1,
    pushRange: true,
  };

  public readonly heightSliderOptions: Options = {
    floor: 150,
    ceil: 200,
    showTicks: false,
    step: 1,
    minRange: 1,
    pushRange: true,
  };

  public default = new FilteringParameters();

  public ageSliderMinValue: number = this.default.minAge;
  public ageSliderMaxValue: number = this.default.maxAge;
  public heightSliderMinValue: number = this.default.minHeight;
  public heightSliderMaxValue: number = this.default.maxHeight;

  public form = new FormGroup({
    sexEnabled: new FormControl<boolean>(this.default.sexEnabled),
    sex: new FormControl<Sex>(this.default.sex),
    ageEnabled: new FormControl<boolean>(this.default.ageEnabled),
    heightEnabled: new FormControl<boolean>(this.default.heightEnabled),
    hairColorEnabled: new FormControl<boolean>(this.default.hairColorEnabled),
    hairColor: new FormControl<HairColor>(this.default.hairColor),
    eyeColorEnabled: new FormControl<boolean>(this.default.eyeColorEnabled),
    eyeColor: new FormControl<EyeColor>(this.default.eyeColor),
    ethnicityEnabled: new FormControl<boolean>(this.default.ethnicityEnabled),
    ethnicity: new FormControl<Ethnicity>(this.default.ethnicity),
    locationEnabled: new FormControl<boolean>(this.default.locationEnabled),
    location: new FormControl<Location>(this.default.location),
  });

  constructor() { }

  ngOnInit(): void { }

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
      heightEnabled: this.form.value.heightEnabled,
      minHeight: this.heightSliderMinValue,
      maxHeight: this.heightSliderMaxValue,
      hairColorEnabled: this.form.value.hairColorEnabled,
      hairColor: this.form.value.hairColor,
      eyeColorEnabled: this.form.value.eyeColorEnabled,
      eyeColor: this.form.value.eyeColor,
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

    this.heightSliderMinValue = this.default.minHeight;
    this.heightSliderMaxValue = this.default.maxHeight;
  }
}
