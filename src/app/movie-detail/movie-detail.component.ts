import { Component, OnInit } from '@angular/core';
import { MovieapiserviceService } from '../service/movieapiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  [x: string]: any;
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private service: MovieapiserviceService
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movie = await this.service.getMovieDetails(id);
    // this.cast = await this.service.getMovieCast(id);
  }
}
