import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  passwordVisible = false;

  private readonly defaultEmail = 'nangkyawt@gmail.com';
  private readonly defaultPassword = '55555';

  constructor(private router: Router) {}

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  login(): void {
    if (
      this.email === this.defaultEmail &&
      this.password === this.defaultPassword
    ) {
      localStorage.setItem('token', 'fake-jwt-token');
      this.router.navigateByUrl('/home');
    } else {
      alert('Invalid email or password.');
    }
  }
}
