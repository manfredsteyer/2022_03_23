import { Component } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private authService: AuthService) {
  }

  get userName() {
    return this.authService.userName;
  }

  login(): void {
    this.authService.login('Max', 'wladkfjaksdjf==');
  }

  logout(): void {
    this.authService.logout();
  }

}
