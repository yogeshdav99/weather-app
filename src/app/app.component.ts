import { Component } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, WeatherComponent], // Add CommonModule here
  animations: [
    trigger('weatherAnimation', [
      state('hidden', style({ opacity: 0, transform: 'scale(0.8)' })),
      state('visible', style({ opacity: 1, transform: 'scale(1)' })),
      transition('hidden => visible', [animate('400ms ease-in-out')]),
      transition('visible => hidden', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class AppComponent {
  weatherVisible = true;

  toggleWeather() {
    this.weatherVisible = !this.weatherVisible;
  }
}
