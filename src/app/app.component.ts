import {Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderConnectedComponent} from './components/header-connected/header-connected.component';
import {HeaderConnectionComponent} from './components/header-connection/header-connection.component';
import {NgIf} from '@angular/common';
import {GlobalVariables} from "../globalVariables";
import {FooterComponent} from "./components/footer/footer.component";
import {PresentationImgComponent} from "./components/presentation-img/presentation-img.component";
import {CheckboxChoiceComponent} from "./components/checkbox-choice/checkbox-choice.component";
import {DropdownSelectionComponent} from './components/dropdown-selection/dropdown-selection.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderConnectedComponent, HeaderConnectionComponent, NgIf, FooterComponent, PresentationImgComponent, CheckboxChoiceComponent, DropdownSelectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements GlobalVariables{
  connected = GlobalVariables.user.isConnected;
}
