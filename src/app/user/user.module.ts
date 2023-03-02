import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserInfoComponent } from './user-info/user-info.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { WeatherService } from './weather.service';
import { UserRoutingModule } from './user-routing.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [
    UserInfoComponent,
    WeatherDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxSkeletonLoaderModule.forRoot(),
    ReactiveFormsModule,
    UserRoutingModule,

  ],
  providers: [
    WeatherService
  ],
})
export class UserModule { }
