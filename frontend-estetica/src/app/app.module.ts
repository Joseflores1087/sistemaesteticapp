import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NoPagesComponent } from './pages/no-pages/no-pages.component';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NoPagesComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
