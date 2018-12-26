import { Component } from '@angular/core';
import { CREATIVE_BUTTON_SETS } from 'src/app/shared/const';

@Component({
  selector: 'app-set-8-dynamic-button',
  templateUrl: './set-8-dynamic-button.component.html',
  styleUrls: ['./set-8-dynamic-button.component.css']
})
export class SetEightDynamicButtonComponent {

  creativeButtonArray: Array<any> = CREATIVE_BUTTON_SETS['SET_8'];

  selectButton(index: number) {
    for (let i = 0; i < this.creativeButtonArray.length; i++) {
      if (i === index) {
        if (i === 6) {
          this.creativeButtonArray[i].isActive = 'btn-success3d';
        } else if (i === 7) {
          this.creativeButtonArray[i].isActive = 'btn-error3d';
        }
      } else {
        this.creativeButtonArray[i].isActive = '';
      }
    }
  }
}
