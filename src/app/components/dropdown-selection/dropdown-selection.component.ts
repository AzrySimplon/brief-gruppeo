import { Component, Input, HostListener } from '@angular/core';
import { NgForOf, NgClass } from '@angular/common';

@Component({
  selector: 'app-dropdown-selection',
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './dropdown-selection.component.html',
  styleUrl: './dropdown-selection.component.css'
})
export class DropdownSelectionComponent {
  @Input() title_text!: string;
  @Input() optionTextsArray!: string[];

  isOpen: boolean = false;
  selectedOption: string = '';
  focusedOptionIndex: number = -1;

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string, index: number): void {
    this.selectedOption = option;
    this.isOpen = false;
    this.focusedOptionIndex = index;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (!this.isOpen) {
      if (event.key === 'Enter') {
        this.isOpen = true;
      }
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        this.focusedOptionIndex = Math.min(this.focusedOptionIndex + 1, this.optionTextsArray.length - 1);
        if (this.focusedOptionIndex === -1 && this.optionTextsArray.length > 0) {
          this.focusedOptionIndex = 0;
        }
        break;
      case 'ArrowUp':
        this.focusedOptionIndex = Math.max(this.focusedOptionIndex - 1, 0);
        break;
      case 'Enter':
        if (this.focusedOptionIndex >= 0 && this.focusedOptionIndex < this.optionTextsArray.length) {
          this.selectOption(this.optionTextsArray[this.focusedOptionIndex], this.focusedOptionIndex);
        }
        break;
      case 'Escape':
        this.isOpen = false;
        break;
    }
  }
}
