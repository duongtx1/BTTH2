import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {Router, RouterLink} from "@angular/router";
@Component({
  selector: 'main-nav-bar',
  standalone: true,
  imports: [
  CommonModule,
  MatIcon,
    RouterLink
  ],
  templateUrl: './main-nav-bar.component.html',
  styleUrl: './main-nav-bar.component.css'
})
export class MainNavBarComponent {
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
  selectedTab: string = 'dashboard';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
