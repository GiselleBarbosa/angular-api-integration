import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app/app.routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([
      BrowserAnimationsModule,
      HttpClientModule,
      BrowserModule,
      AppRoutingModule,
    ]),
  ],
});
