import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  protected title = 'host';

  constructor(private authService: AuthService) {
    console.log('environment.apiUrl:', environment.apiUrl);
    console.log('Environment:', environment);
  }

  ngOnInit() {
    console.log('App initialized');

    // Method 1 - Set service in app-module.ts provider
    this.authService.setToken(
      Math.floor(Math.random() * 1000000000).toString()
    );
  }
}
