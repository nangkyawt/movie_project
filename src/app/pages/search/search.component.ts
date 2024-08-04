import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieapiserviceService } from 'src/app/service/movieapiservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private service: MovieapiserviceService) {}
  searchResults: any = [];
  ngOnInit(): void {}
  // searchMovies = new FormGroup({
  //   MovieName: new FormControl(null),
  // });
  // searchMovies = new FormControl('');
  // submitForm() {
  //   console.log(this.searchMovies.value, 'searchForm');
  //   this.service
  //     .getSerchMovie(this.searchMovies.value)
  //     .subscribe((result: any) => {
  //       console.log(result, '##searchMovies');
  //       this.searchResults = result.results;
  //     });
  // }
}
//   ngOnInit(): void {}
//   searchForm = new FormGroup({
//     movieName: new FormControl(null),
//   });
//   submitForm() {
//     console.log(this.searchForm.value, 'searchForm#');
//     this.service.getSerchMovie(this.searchForm.value).subscribe((result) => {
//       console.log(result, 'searchmovie##');
//     });
//   }
// }
