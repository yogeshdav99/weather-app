import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // If you need HTTP services

// Bootstrap the standalone AppComponent
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // If you need HTTP services in your app
  ],
}).catch((err) => console.error(err));
