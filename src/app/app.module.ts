import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { WebLayoutComponent } from './layouts/web-layout/web-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    WebLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
