import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // For ngModel support

import { AppComponent } from './app.component'; // Import AppComponent
import { WeatherComponent } from './weather/weather.component'; // Import WeatherComponent

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // Import FormsModule for ngModel
    AppComponent, // Import AppComponent directly as it's a standalone component
    WeatherComponent, // Import WeatherComponent directly as it's a standalone component
  ],
  providers: [],
  bootstrap: [], // No need for bootstrap here, we will do it in a separate step
})
export class AppModule {}
