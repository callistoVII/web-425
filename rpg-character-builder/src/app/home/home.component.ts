import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-wrapper">
      <section class="hero">
        <img src="assets/rpg-banner.jpg" alt="RPG banner" class="hero-img" />
        <h2 class="hero-title">Forge Your Legend</h2>
      </section>

      <section class="intro">
        <p>
          Welcome to <strong>RPG Character Builder</strong>, a place where
          imagination takes center stage and every hero begins with a spark of
          inspiration. Whether you’re a long‑time adventurer or someone stepping
          into the world of role‑playing for the first time, this application
          gives you the tools to shape characters with depth, personality, and
          purpose. Every great story begins with a name, a trait, or a whispered
          legend waiting to unfold and this is where yours begins. This project
          was created for players who love crafting unique identities,
          experimenting with abilities, and exploring the endless “what ifs” of
          fantasy worlds. Here, you can design characters with rich backstories,
          customize their attributes, and visualize the heroes who will one day
          conquer dungeons, negotiate with dragons, or maybe just accidentally
          set a tavern on fire. No judgment here, because we understand even the
          greatest heroes have their chaotic moments. The goal of RPG Character
          Builder is simple: make character creation fun, intuitive, and
          endlessly creative, in a style that harkens back to the early days of
          gaming. Instead of flipping through rulebooks or scribbling stats on
          scrap paper, you’ll have a clean, interactive space to shape your
          ideas. From brave warriors to mysterious spell-casters, every
          archetype has a place here. As you explore the app, you’ll find
          inspiration woven into every corner. The interface blends ancient
          parchment with modern design, inviting you to dream boldly and build
          fearlessly. Your next great adventure starts here and the hero (or
          otherwise) at the center of it is entirely up to you.
        </p>
      </section>

      <section class="features">
        <div class="feature-card">
          <img src="assets/rpg-cleric.jpg" alt="Cleric character" />
          <h3>Create Your Hero</h3>
          <p>Craft unique characters with custom stats, lore, and abilities.</p>
        </div>

        <div class="feature-card">
          <img src="assets/rpg-mage.jpg" alt="Mage character" />
          <h3>Build Your Party</h3>
          <p>Assemble a team of heroes ready to take on any quest.</p>
        </div>

        <div class="feature-card">
          <img src="assets/rpg-rogue.jpg" alt="Rogue character" />
          <h3>Forge Your Story</h3>
          <p>Shape the destiny of your characters through narrative choices.</p>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Roboto&family=Great+Vibes&display=swap');

      .home-wrapper {
        display: flex;
        flex-direction: column;
        gap: 40px;
      }

      .hero {
        position: relative;
        text-align: center;
      }

      .hero-img {
        width: 100%;
        border-radius: 10px;
        filter: brightness(0.9);
        transition: filter 0.4s ease;
      }

      .hero-img:hover {
        filter: brightness(1.1);
      }

      .hero-title {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        font-family: 'Cinzel', serif;
        font-size: 3rem;
        color: #f8e9c4;
        text-shadow: 2px 2px 6px #000;
      }

      .intro p {
        font-size: 1.2rem;
        line-height: 1.7;
        background: #ffffff;
        border: 2px solid #c9a86a;
        border-radius: 10px;
        padding: 20px;
      }

      .features {
        display: flex;
        justify-content: space-between;
        gap: 20px;
      }

      .feature-card {
        background: #fff;
        border: 2px solid #c9a86a;
        border-radius: 10px;
        padding: 15px;
        text-align: center;
        flex: 1;
        transition:
          transform 0.3s ease,
          box-shadow 0.3s ease;
      }

      .feature-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      }

      .feature-card img {
        width: 100%;
        border-radius: 8px;
        transition: transform 0.3s ease;
      }

      .feature-card:hover img {
        transform: scale(1.05);
      }

      .feature-card h3 {
        font-family: 'Cinzel', serif;
        margin-top: 10px;
      }
    `,
  ],
})
export class HomeComponent {}
