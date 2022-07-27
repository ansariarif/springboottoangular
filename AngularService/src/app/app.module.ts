import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyDateService } from './my-date.service';
import { TrainerComponent } from './trainer/trainer.component';
import { DeveloperComponent } from './developer/developer.component';
import { TesterComponent } from './tester/tester.component';
import { HRComponent } from './hr/hr.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HttpComponent } from './http/http.component'

@NgModule({
  declarations: [
    AppComponent,
    TrainerComponent,
    DeveloperComponent,
    TesterComponent,
    HRComponent,
    HttpComponent,
    
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [MyDateService ,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
