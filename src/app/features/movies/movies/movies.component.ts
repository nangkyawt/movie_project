import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieapiserviceService } from '../../../core/services/movieapiservice.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {

  movies: any[] = [];
  now_playing_movies: any[] = [];
  upcoming: any[] = [];
  top_rated: any[] = [];

  constructor(
    private service: MovieapiserviceService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      this.movies = await this.service.movieApidata('popular');
      this.now_playing_movies =
        await this.service.movieApidata('now_playing');
      this.upcoming =
        await this.service.movieApidata('upcoming');
      this.top_rated =
        await this.service.movieApidata('top_rated');

    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  goToMovieDetails(id: number): void {
    this.router.navigate(['/moviedetails', id]);
  }
}
