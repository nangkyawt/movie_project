import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { authGuard } from './service/auth.guard';
// import { MovieComponent } from './movie/movie.component';
// import { authGuard } from './service/auth.guard';

const routes: Routes = [
  // {
  //   path: 'movie',
  //   component: MovieComponent,
  // },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
    canActivate: [authGuard],
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  // {
  //   path: 'navbar/:id',
  //   component: MovieDetailsComponent,
  // },
  {
    path: 'moviedetails/:id',
    component: MovieDetailsComponent,
  },
  // {
  //   path: 'movie',
  //   component: MovieComponent,
  //   canActivate: [authGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
