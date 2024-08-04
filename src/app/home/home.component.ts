import { Component, OnInit } from '@angular/core';
import { MovieapiserviceService } from 'src/app/service/movieapiservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private service: MovieapiserviceService
  ) {}
  bannerResult: any = [];
  getMovie: any = [];
  movies: any = [];
  movieApiData: any = [];
  now_playing_movies: any = [];
  upcoming: any = [];
  top_rated: any = [];
  async ngOnInit() {
    try {
      this.movies = await this.service.movieApidata('popular');
      this.now_playing_movies = await this.service.movieApidata('now_playing');
      this.upcoming = await this.service.movieApidata('upcoming');
      this.top_rated = await this.service.movieApidata('top_rated');
      // this.popular_movies = await this.service.movieApidata('popular');
    } catch (error) {
      console.error('Error fetching movies', error);
    }
  }
}
// this.movies = await this.service.movieApidata('popular');
// this.now_playing_movies = await this.service.movieApidata('now_playing');
// this.top_rated = await this.service.movieApidata('toprated');
// this.upcoming = await this.service.movieApidata('upcoming');

// bannerData(): void {
//   this.service.bannerApiData().subscribe((data: any) => {
//     console.log(data, 'bannerresult#');
//     this.bannerResult = data.results;
//   });
// }
// getMovie(): void {
//   this.service.getMovie().subscribe((data: any) => {
//     console.log(data, 'bannerresult#');
//     this.bannerResult = data.results;
//   });
// }
// nowPlayingMovie(): void {
//   this.service.nowPlayingMovie().subscribe((data: any) => {
//     console.log(data, 'bannerresult#');
//     this.bannerResult = data.results;
//   });
// }
// popularMovie(): void {
//   this.service.popularMovie().subscribe((data: any) => {
//     console.log(data, 'bannerresult#');
//     this.bannerResult = data.results;
//   });
// }
// upcomingMovie(): void {
//   this.service.upcomingMovie().subscribe((data: any) => {
//     console.log(data, 'bannerresult#');
//     this.bannerResult = data.results;
//   });
// }
