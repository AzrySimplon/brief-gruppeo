import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderConnectedComponent } from './components/header-connected/header-connected.component';
import { HeaderConnectionComponent } from './components/header-connection/header-connection.component';
import { NgIf } from '@angular/common';
import { GlobalVariables } from "../globalVariables";
import { FooterComponent } from "./components/footer/footer.component";
import { PresentationImgComponent } from "./components/presentation-img/presentation-img.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderConnectedComponent, HeaderConnectionComponent, NgIf, FooterComponent, PresentationImgComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements GlobalVariables {
  connected = GlobalVariables.user.isConnected;

}
