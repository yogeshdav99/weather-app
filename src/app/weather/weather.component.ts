import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  standalone: true, // Make this component standalone
  imports: [CommonModule, FormsModule], // Import necessary modules
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;
  errorMessage: string = '';
  animationState: any;
  weatherGif: string | null = null;

  constructor(private weatherService: WeatherService) {}

  async fetchWeather() {
    if (this.city.trim()) {
      try {
        this.weatherData = await this.weatherService.getWeatherByCity(
          this.city
        );
        this.errorMessage = '';
        this.updateWeatherGif(); // Update the weather GIF
      } catch (error) {
        this.errorMessage = 'City not found. Please try again.';
        this.weatherGif = null; // Clear the GIF if an error occurs
      }
    }
  }
  updateWeatherGif() {
    if (this.weatherData) {
      const condition = this.weatherData.weather[0].main.toLowerCase();
      this.weatherGif = this.getWeatherGif(condition);
    }
  }

  getWeatherGif(condition: string): string {
    const gifs: { [key: string]: string } = {
      clear:
        'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXYzbGRuMmdwcWI0eWRnbmE0c2FkYWpteTEwcGM5bHA2d3hqMWNzZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jNyRowsA00iO3b4TuC/giphy.webp',
      clouds:
        'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2Y2b2VhbGYwa3lodXBoNnl6dWVuYXMwNHpzdWpnOXZuOWwzbmFyMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BGDQxDCZDFHW5Ne/giphy.webp',
      rain: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExczZudnVzcmhyOXV4dmVvYXN0enFxdnk2M216aWQ1YmV6cTA5cWpydCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9UhZtQ3hl2TEuCGeC1/giphy.webp',
      snow: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmNzMWU5dm10bXZhdXMxcTI5dmxlZTVxaW9seGVpY2pkMDFieWo5OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f8oWo7pBXzW4U4IdeW/giphy.webp',
      thunderstorm:
        'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExODNsanJpNjJwZDNhNXZ2Mno1NW5kZWZoemFoNHM3N3BqMTExcWFtdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26uf5HjasTtxtNCqQ/giphy.webp',
      drizzle:
        'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExenIzeWJyM21nazJxcjhtcmpyOGg4MzZ5bG1hejhmNnllamdxeHU1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8OMSzA321pAVmKj6C0/giphy.webp',
      smoke:
        'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXZyYXdheTMwMzg2MTV0eTR5em9vanJwYnA4cnZpeGF0dXR5czNnNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4Jz9LOWbPwTDctfW/giphy.webp',
    };
    return gifs[condition] || 'https://example.com/default-weather.gif';
  }
}
