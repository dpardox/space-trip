import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { ScheduleCardComponent } from './schedule-card/schedule-card.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    LogoComponent,
    HeaderComponent,
    ScheduleCardComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    LogoComponent,
    HeaderComponent,
    ScheduleCardComponent
  ]
})
export class ComponentsModule { }
