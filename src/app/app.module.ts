import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { SetOneDynamicButtonComponent } from './components/set-1-dynamic-button/set-1-dynamic-button.component';
import { SetTwoDynamicButtonComponent } from './components/set-2-dynamic-button/set-2-dynamic-button.component';
import { AppRoutingModule } from './app-routing.module';
import { SetThreeDynamicButtonComponent } from './components/set-3-dynamic-button/set-3-dynamic-button.component';
import { SetFourDynamicButtonComponent } from './components/set-4-dynamic-button/set-4-dynamic-button.component';
import { SetFiveDynamicButtonComponent } from './components/set-5-dynamic-button/set-5-dynamic-button.component';
import { SetSixDynamicButtonComponent } from './components/set-6-dynamic-button/set-6-dynamic-button.component';
import { SetSevenDynamicButtonComponent } from './components/set-7-dynamic-button/set-7-dynamic-button.component';
import { SetEightDynamicButtonComponent } from './components/set-8-dynamic-button/set-8-dynamic-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SetOneDynamicButtonComponent,
    SetTwoDynamicButtonComponent,
    SetThreeDynamicButtonComponent,
    SetFourDynamicButtonComponent,
    SetFiveDynamicButtonComponent,
    SetSixDynamicButtonComponent,
    SetSevenDynamicButtonComponent,
    SetEightDynamicButtonComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
