import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login.page';
import { ComponentsModule } from '../components/components.module';
import { FlightPage } from './flight/flight.page';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginPage,
    FlightPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule
  ]
})
export class PagesModule { }
