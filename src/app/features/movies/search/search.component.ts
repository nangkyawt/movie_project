import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MovieapiserviceService } from '../../../core/services/movieapiservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  movies: any[] = [];
  searched = false;

  constructor(
    private service: MovieapiserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  searchMovie(): void {
    const query = this.searchTerm.trim();

    if (!query) {
      this.movies = [];
      this.searched = false;
      return;
    }

    this.service.searchMovies(query).subscribe({
      next: (result: any) => {
        console.log('Search results:', result);

        this.movies = result.results || [];
        this.searched = true;
      },
      error: (error) => {
        console.error('Error searching movies:', error);

        this.movies = [];
        this.searched = true;
      },
    });
  }

  searchByGenre(genre: string): void {
    this.searchTerm = genre;
    this.searchMovie();
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.movies = [];
    this.searched = false;
  }

  goToMovieDetails(id: number): void {
    this.router.navigate(['/moviedetails', id]);
  }
}
