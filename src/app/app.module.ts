
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Auth
import { LoginComponent } from './features/auth/login/login.component';
import { LogoutComponent } from './features/auth/logout/logout.component';

// Home
import { HomeComponent } from './features/home/home.component';

// Movies
import { MovieDetailsComponent } from './features/movies/movie-details/movie-details.component';
import { SearchComponent } from './features/movies/search/search.component';

// Shared
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { SquarePipe } from './shared/pipes/square.pipe';
import { PowerPipe } from './shared/pipes/power.pipe';

// Services
import { CookieService } from 'ngx-cookie-service';
import { MyListComponent } from './features/my-list/my-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    NavbarComponent,
    HomeComponent,
    MovieDetailsComponent,
    SearchComponent,
    SquarePipe,
    PowerPipe,
    HighlightDirective,
    MyListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    CookieService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

