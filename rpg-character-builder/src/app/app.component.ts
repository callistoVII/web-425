import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="wrapper">
      <header class="banner">
        <img
          src="assets/rpg-banner.png"
          alt="RPG banner image"
          class="banner-img"
        />
      </header>

      <div class="sign-in-container">
        @if (email) {
          <p>Welcome, {{ email }}!</p>
          <button (click)="signout()">Sign Out</button>
        } @else {
          <a routerLink="/signin" class="sign-in-link">Sign In</a>
        }
      </div>

      <main class="main-content">
        <nav class="navbar">
          <ul>
            <li><a routerLink="/"> Home </a></li>
            <li><a routerLink="/players"> Players </a></li>
            <li><a routerLink="/create-character"> Create Character </a></li>
            <li><a routerLink="/create-guild"> Create Guild </a></li>
            <li><a routerLink="/character-faction"> Faction </a></li>
            <li><a routerLink="/signin">Sign In</a></li>
          </ul>
        </nav>

        <section class="content">
          <router-outlet></router-outlet>
        </section>
      </main>

      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/">Home</a> | <a routerLink="/players">Players</a> |
          <a routerLink="/create-character">Create Character</a> |
          <a routerLink="/create-guild">Create Guild</a> |
          <a routerLink="/character-faction">Faction</a> |
          <a routerLink="/signin">Sign In</a>
        </nav>
        <p>&copy; 2026 RPG Character Builder</p>
      </footer>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'rpg-character-builder';
  email?: string;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
  ) {}

  ngOnInit() {
    this.authService.getAuthState().subscribe((isAuth) => {
      if (isAuth) {
        this.email = this.cookieService.get('session_user');
      } else {
        this.email = undefined;
      }
    });
  }

  signout() {
    this.authService.signout();
  }
}
