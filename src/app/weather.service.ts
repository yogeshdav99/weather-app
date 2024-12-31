import { Component, Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '451bd65c2b8061149355393bd9994711'; // Replace with your OpenWeather API Key
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor() {}

  // Method to get the weather by city name
  async getWeatherByCity(city: string) {
    try {
      const response = await axios.get(this.apiUrl, {
        params: {
          q: city,
          appid: this.apiKey,
          units: 'metric', // Temperature in Celsius
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data', error);
      throw error;
    }
  }
}
