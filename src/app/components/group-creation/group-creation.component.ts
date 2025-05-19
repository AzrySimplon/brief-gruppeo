import { Component, QueryList, ViewChild, ViewChildren, Input, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxChoiceComponent } from '../checkbox-choice/checkbox-choice.component';

@Component({
  selector: 'app-group-creation',
  standalone: true, // Add this
  imports: [
    CheckboxChoiceComponent,
    CommonModule
  ],
  templateUrl: './group-creation.component.html',
  styleUrl: './group-creation.component.css'
})
export class GroupCreationComponent implements AfterViewInit {
  @ViewChild('checkbox_dwwm') checkboxDWWM!: CheckboxChoiceComponent;
  @ViewChild('checkbox_age') checkboxAge!: CheckboxChoiceComponent;
  @ViewChild('checkbox_level') checkboxLevel!: CheckboxChoiceComponent;

  checkboxComponents: CheckboxChoiceComponent[] = [];

  ngAfterViewInit() {
    this.checkboxComponents = [this.checkboxDWWM, this.checkboxAge, this.checkboxLevel];
  }

  @Input() list!: List;

  validate() {
    this.checkboxComponents.forEach((checkbox: CheckboxChoiceComponent) => {
      console.log('Checkbox:', checkbox.text, checkbox.getValue());
    });
  }
}
