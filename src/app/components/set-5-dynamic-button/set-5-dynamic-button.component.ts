import { Component } from '@angular/core';
import { CREATIVE_BUTTON_SETS } from 'src/app/shared/const';

@Component({
  selector: 'app-set-5-dynamic-button',
  templateUrl: './set-5-dynamic-button.component.html',
  styleUrls: ['./set-5-dynamic-button.component.css']
})
export class SetFiveDynamicButtonComponent {

  creativeButtonArray: Array<any> = CREATIVE_BUTTON_SETS['SET_5'];

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
