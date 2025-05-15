import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-list-visualization',
  imports: [CommonModule],
  templateUrl: './list-visualization.component.html',
  styleUrl: './list-visualization.component.css'
})

export class ListVisualizationComponent {
  @Input() listsArray!: List[];

  constructor() {
  }
}
