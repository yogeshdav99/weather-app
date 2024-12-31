import { Component } from '@angular/core';
import { WeatherService } from './weather.service'; // Correct path to WeatherService
import { CommonModule } from '@angular/common'; // Required for ngIf
import { FormsModule } from '@angular/forms'; // Required for ngModel

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  standalone: true, // Ensures this is a standalone component
  imports: [CommonModule, FormsModule], // Import necessary modules
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;
  errorMessage: string = '';
  loading: boolean = false;

  constructor(private weatherService: WeatherService) {}

  async fetchWeather() {
    if (this.city.trim()) {
      this.loading = true;
      this.errorMessage = '';
      try {
        this.weatherData = await this.weatherService
          .getWeatherByCity(this.city)
          .toPromise();
        this.errorMessage = '';
      } catch (error) {
        this.errorMessage = 'City not found. Please try again.';
        this.weatherData = null;
      } finally {
        this.loading = false;
      }
    }
  }
}
