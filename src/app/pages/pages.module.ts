import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login.page';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
