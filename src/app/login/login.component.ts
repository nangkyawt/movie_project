import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // name: string | undefined;
  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService
  ) {}
  ngOnInit() {
    localStorage.setItem('defaultEmail', 'nangkyawt@gmail.com');
    localStorage.setItem('defaultPassword', '55555');
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  // this.router.navigatebyurl(['']),

  email: string = '';
  password: string = '';
  myname = 'nangkyawt';
  passwordVisible: boolean = false;
  // now = Date.now;

  // login() {
  //   this.http
  //     .post<any>(`http://localhost:4200/api/v1/users/login`, {
  //       email: this.email,
  //       password: this.password,
  //     })
  //     .subscribe({
  //       next: (data) => {
  //         console.log(data);
  //         this.cookieService.set('token', data['token']);
  //         this.router.navigateByUrl('/home'); // Navigate to home page on success
  //       },
  //       error: (err: HttpErrorResponse) => {
  //         console.error(err);
  //         alert('Login failed. Please check your credentials and try again.');
  //       },
  //     });
  // }

  login() {
    console.log('Login method called');
    const storedEmail = localStorage.getItem('defaultEmail');
    const storedPassword = localStorage.getItem('defaultPassword');

    if (this.email === storedEmail && this.password === storedPassword) {
      // Simulate successful login
      localStorage.setItem('token', 'fake-jwt-token'); // Store a fake token
      this.router.navigateByUrl('/home'); // Navigate to home page on success
      alert('Login Successful');
    } else {
      alert('Invalid credentials');
    }
  }
}
