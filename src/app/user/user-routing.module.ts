import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';

const routes: Routes = [
  { 
    path: 'user-info', 
    component: UserInfoComponent 
  },
  {
    path: 'weather-detail',
    component: WeatherDetailComponent
  },
  {
    path: '', 
    redirectTo: 'user-info', 
    pathMatch: 'full' 
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
