// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { Movie, Result } from './movie';
// import { MovieapiserviceService } from '../service/movieapiservice.service';

// @Component({
//   selector: 'app-movie',
//   templateUrl: './movie.component.html',
//   styleUrls: ['./movie.component.css'],
// })
// export class MovieComponent {
//   router: any;
//   cookieservice: any;
//   constructor(
//     private http: HttpClient,
//     private service: MovieapiserviceService
//   ) {}
//   movies = [];
//   loading = true;
//   now_playing_movies: Result[] = [];
//   popular_movies: Result[] = [];
//   upcoming_movies: Result[] = [];

// async getMovies() {
//   var response = await this.service.getMovie();
//   console.log(response);
//   response.subscribe({
//     next: (data: Movie) => {
//       this.popular_movies = data['results']!;
// this.now_playing_movies = data['results']!;
// this.upcoming_movies = data['results']!;
// console.log(this.now_playing_movies);
// console.log(this.popular_movies);
//     },
//     error: (error: any) => {
//       alert(`Error ${error.message}`);
//     },
//   });
// }

//   async ngOnInit() {
//     this.now_playing_movies = await this.service.movieApidata('now_playing');
//   }
//   logout() {
//     this.cookieservice.deleteall.navigateByUrl('login');
//   }
// }
