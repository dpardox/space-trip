import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionPipe } from './mission/mission.pipe';



@NgModule({
  declarations: [
    MissionPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MissionPipe
  ]
})
export class PipesModule { }
