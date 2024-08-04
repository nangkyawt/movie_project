import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService
  ) {}

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  // this.router.navigatebyurl([''])

  email?: String = ' ';
  password?: String = ' ';
  myname = 'nangkyawt';
  passwordVisible: boolean = false;
  // now = Date.now;
  async login() {
    console.log(this.email);
    console.log(this.password);
    var response = await this.http.post(
      `http://localhost:3000/api/v1/users/login`,
      // 'http://localhost:3000/api/v1/users/signin',
      {
        email: this.email,
        password: this.password,
      } //body
    );
    console.log(response);
    response.subscribe({
      next: (data: any) => {
        console.log(data);
        this.cookieService.set('token', data['token']);
        // sessionStorage.setItem('token', data['token']);
        this.router.navigateByUrl('navbar');
        console.log(this.email);
      },
      // error: (error: HttpErrorResponse) => {
      //   alert(error.status + error.statusText);
      // }, //error message
      error: (err: any) => {
        console.log(err.message);
        alert(err.message);
      },
    });

    //Api Call.success
    // console.log('<<<<nnnn');
    // if (this.name == 'nangkyawt' && this.password == '5555') {
    //   this.router.navigateByUrl('movie');
    // }
  }
}
