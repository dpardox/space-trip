import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightPage } from 'src/app/pages/flight/flight.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: FlightPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebLayoutRoutingModule { }
