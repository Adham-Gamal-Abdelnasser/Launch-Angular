import { Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IInput } from '../../interfaces/iinput';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-field',
  imports: [FormsModule],
  templateUrl: './field.html',
  styleUrl: './field.css',
})
export class Field {
  //todo the data recieved for each input from contact component -parent-
  @Input() inputData!: IInput;
  //todo catch input value
  data: string = '';
  //todo catch label
  @ViewChild('floatingLabel') floatingLabel!: ElementRef;
  onTyping(value: string): void {
    const label = this.floatingLabel.nativeElement;
    if (value && value.length > 0) {
      label.classList.add('moving-up','text-blue-600');
      label.classList.remove('moving-down','text-gray-500');
    } else {
      label.classList.add('moving-down','text-gray-500');
      label.classList.remove('moving-up','text-blue-600');
    }
  }


}
