import { Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ethnicity } from 'src/app/models/ethnicity';
import { EyeColor } from 'src/app/models/eye-color';
import { HairColor } from 'src/app/models/hair-color';
import { Location } from 'src/app/models/location';
import { Sex } from 'src/app/models/sex';
import { FilteringParameters } from './filtering-parameters';

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
    onlyBindHandles: true,
  };

  public readonly heightSliderOptions: Options = {
    floor: 150,
    ceil: 200,
    showTicks: false,
    step: 1,
    minRange: 1,
    pushRange: true,
    onlyBindHandles: true,
  };

  public default = new FilteringParameters();

  public ageSliderMinValue: number = this.default.minAge;
  public ageSliderMaxValue: number = this.default.maxAge;
  public heightSliderMinValue: number = this.default.minHeight;
  public heightSliderMaxValue: number = this.default.maxHeight;

  public form = new FormGroup({
    sex: new FormControl<string | null>(this.toFormSelectValue(this.default.sex)),
    hairColor: new FormControl<string | null>(this.toFormSelectValue(this.default.hairColor)),
    eyeColor: new FormControl<string | null>(this.toFormSelectValue(this.default.eyeColor)),
    ethnicity: new FormControl<string | null>(this.toFormSelectValue(this.default.ethnicity)),
    location: new FormControl<string | null>(this.toFormSelectValue(this.default.location)),
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
      sex: this.fromFormSelectValue(this.form.value.sex),
      minAge: this.ageSliderMinValue,
      maxAge: this.ageSliderMaxValue,
      minHeight: this.heightSliderMinValue,
      maxHeight: this.heightSliderMaxValue,
      hairColor: this.fromFormSelectValue(this.form.value.hairColor),
      eyeColor: this.fromFormSelectValue(this.form.value.eyeColor),
      ethnicity:  this.fromFormSelectValue(this.form.value.ethnicity),
      location: this.fromFormSelectValue(this.form.value.location),
    } as FilteringParameters);
  }

  private resetFormState(): void {
    this.form.reset({
      sex: this.toFormSelectValue(this.default.sex),
      hairColor: this.toFormSelectValue(this.default.hairColor),
      eyeColor: this.toFormSelectValue(this.default.eyeColor),
      ethnicity: this.toFormSelectValue(this.default.ethnicity),
      location: this.toFormSelectValue(this.default.location),
    });
    
    this.ageSliderMinValue = this.default.minAge;
    this.ageSliderMaxValue = this.default.maxAge;
    this.heightSliderMinValue = this.default.minHeight;
    this.heightSliderMaxValue = this.default.maxHeight;
  }

  private fromFormSelectValue(formValue: string | null | undefined) {
    return !formValue || formValue === 'anySelection' ? null : formValue;
  }

  private toFormSelectValue(value: string | null | undefined) {
    return !value ? 'anySelection' : value;
  }
}
