import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NgbAlertsComponent } from '../app/ngb-Components/ngb-alerts/ngb-alerts.component';
import { ButtonComponent } from './ngb-Components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbAlertsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
