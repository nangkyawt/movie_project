import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MovieapiserviceService } from '../../core/services/movieapiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(
    private service: MovieapiserviceService,
    private router: Router
  ) {}

  bannerResult: any = [];
  getMovie: any = [];
  movies: any[] = [];
  movieApiData: any = [];

  now_playing_movies: any[] = [];
  upcoming: any[] = [];
  top_rated: any[] = [];

  featuredMovie: any = null;

  async ngOnInit(): Promise<void> {
    try {
      this.movies = await this.service.movieApidata('popular');

      this.now_playing_movies =
        await this.service.movieApidata('now_playing');

      this.upcoming =
        await this.service.movieApidata('upcoming');

      this.top_rated =
        await this.service.movieApidata('top_rated');

      // Use the first popular movie as the featured movie
      if (this.movies.length > 0) {
        this.featuredMovie = this.movies[0];
      }

    } catch (error) {
      console.error('Error fetching movies', error);
    }
  }

  goToMovieDetails(id: number): void {
    this.router.navigate(['/moviedetails', id]);
  }
}
