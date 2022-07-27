import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooddetailsComponent } from './fooddetails/fooddetails.component';
import { FoodmenusComponent } from './foodmenus/foodmenus.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'menu', component:FoodmenusComponent},
  {path:'fooddetails/:fid/:fname',component: FooddetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
