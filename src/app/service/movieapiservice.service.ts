import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Movie, Result } from '../movie/movie';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieapiserviceService {
  constructor(private http: HttpClient) {}
  response: any;
  Movie: any;
  id: any;
  movieSubscribtion: Subscription = new Subscription();
  // bannerApiData() {
  //   var response = this.http.get(
  //     'https://api.themoviedb.org/3/movie/api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1'
  //   );
  //   return response;
  // }

  // getMovie() {
  //   var response = this.http.get(
  //     'https://api.themoviedb.org/3/movie/api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1'
  //   );
  //   return response;
  // }

  // nowPlayingMovie() {
  //   var response = this.http.get(
  //     'https://api.themoviedb.org/3/movie/now_playing?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1'
  //   );
  //   return response;
  // }
  // popularMovie() {
  //   var response = this.http.get(
  //     'https://api.themoviedb.org/3/movie/popular?api_key=050c28541f900007285c3020069bf62&language=en-US&page=1'
  //   );
  //   return response;
  // }
  // upcomingMovie() {
  //   var response = this.http.get(
  //     'https://api.themoviedb.org/3/movie/565770/videos?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1'
  //   );
  //   return response;
  // }
  // async getMovie(type: string): Promise<Result[]> {
  //   return new Promise(async (resolve, reject) => {
  //     this.response = await this.http.get(
  //       `https://api.themoviedb.org/3/movie/${type}?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1`
  //     );
  //     console.log(this.response); // Observable
  //     this.movieSubscribtion = this.response.subscribe({
  //       next: (data: Movie) => {
  //         // return data['results']!;
  //         return resolve(data['results']!);
  //         console.log(data, 'result#');
  //       },
  //       error: (err: any) => {
  //         reject(alert(err.message));
  //       },
  //     });
  //   });
  // }
  async movieApidata(type: any): Promise<Result[]> {
    return new Promise(async (resolve, reject) => {
      var response = await this.http.get(
        `https://api.themoviedb.org/3/movie/${type}?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1`
      );
      this.movieSubscribtion = response.subscribe({
        next: (data: Movie) => {
          resolve(data['results']!);
          console.log(data, 'result#');
        },
        error: (err: any) => {
          reject(`Error${err.message}`);
        },
      });
    });
  }
  // searchmovie
  // getSerchMovie(type: any): Observable<any> {
  //   return this.http.get(
  //     `https://api.themoviedb.org/3/search/movie?query=${type}&api_key=050c28541f900007285c3020069bfd62`
  //   );
  // }
  // moviedetail
  //   getMovieDetails(type: any): Observable<any> {
  //     return this.http.get(
  //       `https://api.themoviedb.org/3/movie/${type}&api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1`
  //     );
  //   }
  // }
  async getMovieDetails(type: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      var response = await this.http.get(
        `https://api.themoviedb.org/3/movie/${type}?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1`
      );
      this.movieSubscribtion = response.subscribe({
        next: (data: any) => {
          resolve(data);
          console.log(data);
        },
        error: (err: any) => {
          reject(`Error${err.message}`);
        },
      });
    });
  }

  async getMovieCast(id: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const response = this.http.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1`
      );
      this.movieSubscribtion = response.subscribe({
        next: (data: any) => {
          resolve(data.cast);
          console.log(data.cast);
        },
        error: (err: any) => {
          reject(`Error${err.message}`);
        },
      });
    });
  }
  async getMovieVideos(id: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const response = this.http.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1`
      );
      this.movieSubscribtion = response.subscribe({
        next: (data: any) => {
          resolve(data.results);
        },
        error: (err: any) => {
          reject(`Error: ${err.message}`);
        },
      });
    });
  }
}
