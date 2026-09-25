import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css'],
})
export class MyListComponent implements OnInit {

  myList: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadMyList();
  }

  loadMyList(): void {
    const savedMovies = localStorage.getItem('myList');

    if (savedMovies) {
      this.myList = JSON.parse(savedMovies);
    } else {
      this.myList = [];
    }
  }

  removeFromMyList(movieId: number): void {
    this.myList = this.myList.filter(
      (movie) => movie.id !== movieId
    );

    localStorage.setItem('myList', JSON.stringify(this.myList));
  }

  goToMovieDetails(id: number): void {
    this.router.navigate(['/moviedetails', id]);
  }
}
