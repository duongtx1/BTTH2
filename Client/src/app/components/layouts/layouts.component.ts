import {Component, Input} from '@angular/core';
import {MainNavBarComponent} from "../../main-nav-bar/main-nav-bar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'layouts',
  standalone: true,
  imports: [
    MainNavBarComponent,
    RouterOutlet
  ],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent {
}
