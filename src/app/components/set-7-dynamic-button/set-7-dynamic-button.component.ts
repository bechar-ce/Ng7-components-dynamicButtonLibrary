import { Component } from '@angular/core';
import { CREATIVE_BUTTON_SETS } from 'src/app/shared/const';

@Component({
  selector: 'app-set-7-dynamic-button',
  templateUrl: './set-7-dynamic-button.component.html',
  styleUrls: ['./set-7-dynamic-button.component.css']
})
export class SetSevenDynamicButtonComponent {

  creativeButtonArray: Array<any> = CREATIVE_BUTTON_SETS['SET_7'];

  selectButton(index: number) {
    for (let i = 0; i < this.creativeButtonArray.length; i++) {
      if (i === index) {
        this.creativeButtonArray[i].isActive = 'btn-activated';
        if (i === 7) {
          this.creativeButtonArray[i].isActive = 'btn-success';
        } else if (i === 8) {
          this.creativeButtonArray[i].isActive = 'btn-error';
        }
      } else {
        this.creativeButtonArray[i].isActive = '';
      }
    }
  }
}
