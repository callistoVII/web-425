import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-wrapper">
      <section class="hero">
        <img src="assets/rpg-hero.png" alt="RPG hero" class="hero-img" />
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
          <img src="assets/rpg-rogue.jpg" alt="Create hero" />
          <h3>Create Your Hero</h3>
          <p>Craft unique characters with custom stats, lore, and abilities.</p>
        </div>

        <div class="feature-card">
          <img src="assets/rpg-party.png" alt="Build party" />
          <h3>Build Your Party</h3>
          <p>Assemble a team of heroes ready to take on any quest.</p>
        </div>

        <div class="feature-card">
          <img src="assets/rpg-sword.png" alt="Forge story" />
          <h3>Forge Your Story</h3>
          <p>Shape the destiny of your characters through narrative choices.</p>
        </div>
      </section>
    </div>
  `,
  styles: [],
})
export class HomeComponent {}
