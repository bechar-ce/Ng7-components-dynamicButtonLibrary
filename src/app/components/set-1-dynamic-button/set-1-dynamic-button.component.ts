import { Component } from '@angular/core';
import { CREATIVE_BUTTON_SETS } from 'src/app/shared/const';

@Component({
  selector: 'app-set-1-dynamic-button',
  templateUrl: './set-1-dynamic-button.component.html',
  styleUrls: ['./set-1-dynamic-button.component.css']
})
export class SetOneDynamicButtonComponent {

  creativeButtonArray: Array<any> = CREATIVE_BUTTON_SETS['SET_1'];

  selectButton(index: number) {
    for (let i = 0; i < this.creativeButtonArray.length; i++) {
      if (i === index) {
        this.creativeButtonArray[i].isActive = 'active';
      } else {
        this.creativeButtonArray[i].isActive = '';
      }
    }
  }
}
