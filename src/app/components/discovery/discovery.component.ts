import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {PresentationImgComponent} from "../presentation-img/presentation-img.component";

@Component({
  selector: 'app-discovery',
    imports: [
        NgIf,
        PresentationImgComponent
    ],
  templateUrl: './discovery.component.html',
  styleUrl: './discovery.component.css'
})
export class DiscoveryComponent {

}
