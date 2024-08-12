import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieapiserviceService } from 'src/app/service/movieapiservice.service';

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
  // getMovieDetailResult: any;
  movie: any;
  cast: any;
  details: any;
  getParamid: any;
  videos: any[] = [];
  selectedVideo: SafeResourceUrl | null = null;
  stars: number[] = [1, 2, 3, 4, 5];
  // ngOnInit(): void {
  //   let getParamid = this.router.snapshot.paramMap.get('id');
  //   console.log(getParamid, 'getparamid#');
  //   this.getMovieDetailResult = this.getMovie(getParamid);
  // }
  // getMovie(id: any) {
  //   this.service.getMovieDetails(id).subscribe((result) => {
  //     console.log(result, 'getmoviedetails#');
  //   });
  // }
  ngOnInit() {
    this.getMovieDetailResult();
  }
  // async getMovieDetailResult() {
  //   const getParamid = this.router.snapshot.paramMap.get('id') || 'default-id';

  //   this.movie = await this.service.getMovieDetails(getParamid);
  //   this.cast = await this.service.getMovieCast(getParamid);
  //   this.videos = await this.service.getMovieVideos(getParamid);
  //   this.details = await this.service.getMovieDetails(`${getParamid}`);
  //   console.log(this.details);
  //   console.log(this.movie);
  //   console.log(this.cast);
  //   console.log('Video', this.videos);
  //   console.log('Selected Video:', this.selectedVideo);
  // }
  // // Select the first YouTube video or a specific video
  // trailer = this.videos.find((video) => video.site === 'YouTube');
  // if(trailer: { key: any }) {
  //   this.selectedVideo = this.sanitizer.bypassSecurityTrustResourceUrl(
  //     `https://www.youtube.com/embed/${trailer.key}`
  //   );
  // }

  async getMovieDetailResult() {
    const getParamid = this.router.snapshot.paramMap.get('id') || 'default-id';

    try {
      this.movie = await this.service.getMovieDetails(getParamid);
      this.cast = await this.service.getMovieCast(getParamid);
      this.videos = await this.service.getMovieVideos(getParamid);

      // Find the first YouTube trailer
      const trailer = this.videos.find((video) => video.site === 'YouTube');
      if (trailer) {
        this.selectedVideo = this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${trailer.key}`
        );
      } else {
        console.log('No YouTube trailer found');
        this.selectedVideo = null;
      }
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }

    console.log('Movie:', this.movie);
    console.log('Cast:', this.cast);
    console.log('Videos:', this.videos);
    console.log('Selected Video:', this.selectedVideo);
  }
}
