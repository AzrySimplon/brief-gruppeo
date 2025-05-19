import { Component, Input, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-checkbox-choice',
  imports: [
    FormsModule
  ],
  templateUrl: './checkbox-choice.component.html',
  styleUrl: './checkbox-choice.component.css'
})
export class CheckboxChoiceComponent {
  @Input() text!: string;
  public isChecked = false;

  constructor() {
  }

  getValue(){
    return this.isChecked;
  }

}
