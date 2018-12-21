import { Component, OnInit } from '@angular/core';
import { speedDialFabAnimations } from './speed-dial-fab.animations';

@Component({
  selector: 'app-speed-dial-fab',
  templateUrl: './speed-dial-fab.component.html',
  styleUrls: ['./speed-dial-fab.component.scss'],
  animations: speedDialFabAnimations
})
export class SpeedDialFabComponent  {

  constructor() { }
  fabButtons = [
    {
      text: 'Developers',
      icon: 'code',
      color: 'color1'
    },
    {
      text: 'Support',
      icon: 'message',
      color: 'color2'
    },
    {
      text:  '',
      icon: 'room',
      color: 'color3'
    }
  ];
  buttons = [];
  fabTogglerState = 'inactive';


  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }
}
