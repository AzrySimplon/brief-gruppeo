import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderConnectedComponent} from './components/header-connected/header-connected.component';
import {HeaderConnectionComponent} from './components/header-connection/header-connection.component';
import {NgIf} from '@angular/common';
import {GlobalVariables} from "../globalVariables"


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderConnectedComponent, HeaderConnectionComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements GlobalVariables{
  title = 'Gruppeo';
  connected = GlobalVariables.user.isConnected;

}
