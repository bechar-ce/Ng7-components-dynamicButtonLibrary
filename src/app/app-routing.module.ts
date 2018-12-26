import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetOneDynamicButtonComponent } from './components/set-1-dynamic-button/set-1-dynamic-button.component';
import { SetTwoDynamicButtonComponent } from './components/set-2-dynamic-button/set-2-dynamic-button.component';
import { SetThreeDynamicButtonComponent } from './components/set-3-dynamic-button/set-3-dynamic-button.component';
import { SetFourDynamicButtonComponent } from './components/set-4-dynamic-button/set-4-dynamic-button.component';
import { SetFiveDynamicButtonComponent } from './components/set-5-dynamic-button/set-5-dynamic-button.component';
import { SetSixDynamicButtonComponent } from './components/set-6-dynamic-button/set-6-dynamic-button.component';
import { SetSevenDynamicButtonComponent } from './components/set-7-dynamic-button/set-7-dynamic-button.component';
import { SetEightDynamicButtonComponent } from './components/set-8-dynamic-button/set-8-dynamic-button.component';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: SetOneDynamicButtonComponent },
    { path: 'dynamic-button-set-2', component: SetTwoDynamicButtonComponent },
    { path: 'dynamic-button-set-3', component: SetThreeDynamicButtonComponent },
    { path: 'dynamic-button-set-4', component: SetFourDynamicButtonComponent },
    { path: 'dynamic-button-set-5', component: SetFiveDynamicButtonComponent },
    { path: 'dynamic-button-set-6', component: SetSixDynamicButtonComponent },
    { path: 'dynamic-button-set-7', component: SetSevenDynamicButtonComponent },
    { path: 'dynamic-button-set-8', component: SetEightDynamicButtonComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
