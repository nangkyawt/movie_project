import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieapiserviceService } from '../../../core/services/movieapiservice.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {

  constructor(
    private service: MovieapiserviceService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  movie: any;
  cast: any;
  details: any;

  videos: any[] = [];
  selectedVideo: SafeResourceUrl | null = null;

  stars: number[] = [1, 2, 3, 4, 5];

  // My List
  isInMyList = false;

  ngOnInit(): void {
    this.getMovieDetailResult();
  }

  async getMovieDetailResult(): Promise<void> {

    const movieId =
      this.router.snapshot.paramMap.get('id') || 'default-id';

    try {

      this.movie = await this.service.getMovieDetails(movieId);

      this.cast = await this.service.getMovieCast(movieId);

      this.videos = await this.service.getMovieVideos(movieId);

      // Check whether movie is already in My List
      this.checkMyList();

      let trailer = this.videos.find(
        (video) =>
          video.site === 'YouTube' &&
          video.type === 'Trailer'
      );

      if (!trailer) {
        trailer = this.videos.find(
          (video) =>
            video.site === 'YouTube' &&
            video.type === 'Teaser'
        );
      }

      if (trailer) {

        this.selectedVideo =
          this.sanitizer.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${trailer.key}`
          );

      } else {

        console.log('No YouTube trailer found');
        this.selectedVideo = null;

      }

    } catch (error) {

      console.error(
        'Error fetching movie details:',
        error
      );

    }

    console.log('Movie:', this.movie);
    console.log('Cast:', this.cast);
    console.log('Videos:', this.videos);
    console.log('Selected Video:', this.selectedVideo);
  }


  // =========================
  // MY LIST
  // =========================

  checkMyList(): void {

    const savedMovies =
      JSON.parse(
        localStorage.getItem('myList') || '[]'
      );

    this.isInMyList = savedMovies.some(
      (movie: any) => movie.id === this.movie.id
    );
  }


  toggleMyList(): void {

    const savedMovies =
      JSON.parse(
        localStorage.getItem('myList') || '[]'
      );

    if (this.isInMyList) {

      // Remove movie
      const updatedMovies =
        savedMovies.filter(
          (movie: any) => movie.id !== this.movie.id
        );

      localStorage.setItem(
        'myList',
        JSON.stringify(updatedMovies)
      );

      this.isInMyList = false;

    } else {

      // Add movie
      savedMovies.push(this.movie);

      localStorage.setItem(
        'myList',
        JSON.stringify(savedMovies)
      );

      this.isInMyList = true;
    }
  }


  scrollToTrailer(): void {

    document.getElementById('trailer')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  }

}
