import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FoodmenusComponent } from './foodmenus/foodmenus.component';
import { LoginComponent } from './login/login.component';
import { FooddetailsComponent } from './fooddetails/fooddetails.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FoodmenusComponent,
    LoginComponent,
    FooddetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
