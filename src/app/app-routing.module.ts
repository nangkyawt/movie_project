import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { SearchComponent } from './features/movies/search/search.component';
import { MovieDetailsComponent } from './features/movies/movie-details/movie-details.component';
import { MyListComponent } from './features/my-list/my-list.component';

import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },

  {
    path: 'search',
    component: SearchComponent,
  },

  {
    path: 'my-list',
    component: MyListComponent,
    canActivate: [authGuard],
  },

  {
    path: 'moviedetails/:id',
    component: MovieDetailsComponent,
  },

  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
