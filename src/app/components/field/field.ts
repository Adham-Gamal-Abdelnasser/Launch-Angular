import { Component, Input } from '@angular/core';
import { IInput } from '../../interfaces/iinput';

@Component({
  selector: 'app-field',
  imports: [],
  templateUrl: './field.html',
  styleUrl: './field.css',
})
export class Field {
  @Input() inputData!: IInput
  getInputData() {
    return this.inputData;
  }
}
