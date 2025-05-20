import { Component, ViewChild, Input, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxChoiceComponent } from '../checkbox-choice/checkbox-choice.component';
import {TextInputComponent} from '../text-input/text-input.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-group-creation',
  standalone: true, // Add this
  imports: [
    CheckboxChoiceComponent,
    CommonModule,
    TextInputComponent,
    FormsModule
  ],
  templateUrl: './group-creation.component.html',
  styleUrl: './group-creation.component.css'
})
export class GroupCreationComponent implements AfterViewInit {
  @ViewChild('checkbox_dwwm') checkboxDWWM!: CheckboxChoiceComponent;
  @ViewChild('checkbox_age') checkboxAge!: CheckboxChoiceComponent;
  @ViewChild('checkbox_level') checkboxLevel!: CheckboxChoiceComponent;
  @ViewChild('input_person_nbr') textInputPersonNbr!: TextInputComponent;
  @Input() list!: List;

  checkboxComponents: CheckboxChoiceComponent[] = [];

  ngAfterViewInit() {
    this.checkboxComponents = [this.checkboxDWWM, this.checkboxAge, this.checkboxLevel];
  }



  validate() {
    this.checkboxComponents.forEach((checkbox: CheckboxChoiceComponent) => {
      console.log('Checkbox:', checkbox.text, checkbox.getValue());
    });

    console.log('Text input:', this.textInputPersonNbr.getValue());
  }
}
