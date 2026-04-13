import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="wrapper">
      <header class="banner">
        <img
          src="assets/rpg-banner.jpg"
          alt="RPG banner image"
          class="banner-img"
        />
      </header>

      <main class="main-content">
        <nav class="navbar">
          <ul>
            <li><a routerLink="/"> Home </a></li>
            <li><a routerLink="/players"> Players </a></li>
            <li><a routerLink="/create-character"> Create Character </a></li>
            <li><a routerLink="/create-guild"> Create Guild </a></li>
            <li><a routerLink="/character-faction"> Faction </a></li>
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
          <a routerLink="/character-faction">Faction</a>
        </nav>
        <p>&copy; 2026 RPG Character Builder</p>
      </footer>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'rpg-character-builder';
}
