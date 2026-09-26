import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

interface Result {
  id: number;
  title: string;
  original_title?: string;
  overview?: string;
  poster_path?: string;
  backdrop_path?: string;
  release_date?: string;
  vote_average?: number;
  [key: string]: any;
}

interface Movie {
  results: Result[];
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class MovieapiserviceService {
  constructor(private http: HttpClient) {}

  movieSubscribtion: Subscription = new Subscription();

  async movieApidata(type: any): Promise<Result[]> {
    return new Promise(async (resolve, reject) => {
      const response = this.http.get<Movie>(
        `https://api.themoviedb.org/3/movie/${type}?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1`
      );

      this.movieSubscribtion = response.subscribe({
        next: (data: Movie) => {
          resolve(data.results);
          console.log(data, 'result#');
        },

        error: (err: any) => {
          reject(`Error: ${err.message}`);
        },
      });
    });
  }

  searchMovies(query: string): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        query
      )}&api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1`
    );
  }

  async getMovieDetails(type: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const response = this.http.get(
        `https://api.themoviedb.org/3/movie/${type}?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1`
      );

      this.movieSubscribtion = response.subscribe({
        next: (data: any) => {
          resolve(data);
          console.log(data);
        },

        error: (err: any) => {
          reject(`Error: ${err.message}`);
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
          reject(`Error: ${err.message}`);
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
