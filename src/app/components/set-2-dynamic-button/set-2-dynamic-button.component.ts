import { Component } from '@angular/core';
import { CREATIVE_BUTTON_SETS } from 'src/app/shared/const';

@Component({
  selector: 'app-set-2-dynamic-button',
  templateUrl: './set-2-dynamic-button.component.html',
  styleUrls: ['./set-2-dynamic-button.component.css']
})
export class SetTwoDynamicButtonComponent {

  creativeButtonArray: Array<any> = CREATIVE_BUTTON_SETS['SET_2'];

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
