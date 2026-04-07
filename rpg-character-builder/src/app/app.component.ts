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
            <li><a routerLink="/home"> Home </a></li>
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
          <a routerLink="/home">Home</a> |
          <a routerLink="/players">Players</a> |
          <a routerLink="/create-character">Create Character</a> |
          <a routerLink="/create-guild">Create Guild</a> |
          <a routerLink="/character-faction">Faction</a>
        </nav>
        <p>&copy; 2026 RPG Character Builder</p>
      </footer>
    </div>
  `,
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Roboto&family=Great+Vibes&display=swap');

      .wrapper {
        background: #fdf0e6;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        font-family: 'Roboto', sans-serif;
        color: #2b2b2b;
      }

      .banner {
        width: 100%;
        text-align: center;
        background: #3b2f2f;
        border-bottom: 4px solid #c9a86a;
        padding: 10px 0;
      }

      .banner-img {
        width: 100%;
        max-height: 260px;
        object-fit: cover;
        border-radius: 6px;
        filter: brightness(0.9);
        transition: filter 0.4s ease;
      }

      .banner-img:hover {
        filter: brightness(1.1);
      }

      .main-content {
        flex: 1;
        max-width: 1100px;
        margin: 0 auto;
        padding: 20px;
      }

      .navbar ul {
        list-style: none;
        padding: 0;
        margin: 0 0 40px 0;
        display: flex;
        justify-content: space-around;
        background: #3b2f2f;
        border: 3px solid #c9a86a;
        border-radius: 8px;
        padding: 12px;
      }

      .navbar a {
        color: #f8e9c4;
        text-decoration: none;
        font-family: 'Cinzel', serif;
        font-size: 1.1rem;
        transition:
          color 0.3s ease,
          transform 0.3s ease;
      }

      .navbar a:hover {
        color: #d4b46a;
        transform: scale(1.1);
      }

      .content {
        background: #ffffff;
        border: 2px solid #c9a86a;
        border-radius: 10px;
        padding: 25px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
      }

      .footer {
        background: #3b2f2f;
        color: #f8e9c4;
        text-align: center;
        padding: 20px;
        border-top: 4px solid #c9a86a;
      }

      .footer-nav a {
        color: #f8e9c4;
        text-decoration: none;
        font-family: 'Cinzel', serif;
        transition: color 0.3s ease;
      }

      .footer-nav a:hover {
        color: #d4b46a;
      }

      .footer p {
        margin-top: 10px;
        font-family: 'Great Vibes', cursive;
        font-size: 1.4rem;
      }
    `,
  ],
})
export class AppComponent {}
