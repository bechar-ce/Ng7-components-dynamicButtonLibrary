import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BUTTON_SET_NAME } from './shared/const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamic Navigation Bar | Button | Components';
  constructor(
    private router: Router,
  ) { }

  btnArry: Array<any> = BUTTON_SET_NAME;

  btnClick($event) {
    if ($event === 'SET-1') {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['/dynamic-button-' + $event.toLowerCase()]);
    }
  }
}
