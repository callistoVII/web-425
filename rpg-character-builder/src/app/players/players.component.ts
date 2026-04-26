import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Character {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="main-content">
      <h2 class="rpg-title">Character Roster</h2>

      @if (hasCharacters) {
        <div class="players-grid">
          @for (c of characters; track c.name) {
            <div class="player-card">
              <h3>{{ c.name }}</h3>
              <p><strong>Gender:</strong> {{ c.gender }}</p>
              <p><strong>Class:</strong> {{ c.class }}</p>
              <p><strong>Faction:</strong> {{ c.faction }}</p>
              <p>
                <strong>Starting Location:</strong> {{ c.startingLocation }}
              </p>
              <p class="funfact">
                <em>{{ c.funFact }}</em>
              </p>
            </div>
          }
        </div>
      } @else {
        <p>No Characters Found.</p>
      }
    </div>
  `,
})
export class PlayersComponent {
  characters: Character[] = [
    {
      name: 'Thorn',
      gender: 'Male',
      class: 'Warrior',
      faction: 'The Iron Brotherhood',
      startingLocation: 'Ironhold',
      funFact: 'Thorn once single-handedly defeated a dragon.',
    },
    {
      name: 'Lyra',
      gender: 'Female',
      class: 'Mage',
      faction: 'The Arcane Circle',
      startingLocation: 'Everspell',
      funFact: 'Lyra is a polyglot and can read ancient runes.',
    },
    {
      name: 'Shade',
      gender: 'Other',
      class: 'Rogue',
      faction: 'The Silent Veil',
      startingLocation: 'Nightfall',
      funFact: 'Shade has never been seen in daylight.',
    },
    {
      name: 'Bram',
      gender: 'Male',
      class: 'Warrior',
      faction: 'Stoneguard Clan',
      startingLocation: 'Frostpeak',
      funFact: 'Bram arm-wrestled a troll and won.',
    },
    {
      name: 'Seraphine',
      gender: 'Female',
      class: 'Mage',
      faction: 'Celestial Order',
      startingLocation: 'Starwatch',
      funFact: 'She once summoned a star fragment by accident.',
    },
    {
      name: 'Kestrel',
      gender: 'Female',
      class: 'Rogue',
      faction: 'The Silent Veil',
      startingLocation: 'Nightfall',
      funFact: 'Kestrel can pick any lock in under 7 seconds.',
    },
    {
      name: 'Dorian',
      gender: 'Male',
      class: 'Mage',
      faction: 'The Arcane Circle',
      startingLocation: 'Everspell',
      funFact: 'Dorian once turned himself invisible for a week.',
    },
    {
      name: 'Rook',
      gender: 'Female',
      class: 'Warrior',
      faction: 'The Iron Brotherhood',
      startingLocation: 'Ironhold',
      funFact: 'Rook carries a shield made from wyvern scales.',
    },
    {
      name: 'Nyx',
      gender: 'Other',
      class: 'Rogue',
      faction: 'Shadow Syndicate',
      startingLocation: 'Blackreach',
      funFact: 'Nyx can mimic any voice perfectly.',
    },
    {
      name: 'Elowen',
      gender: 'Female',
      class: 'Mage',
      faction: 'Celestial Order',
      startingLocation: 'Starwatch',
      funFact: 'Elowen communicates with spirits of the forest.',
    },
  ];

  get hasCharacters(): boolean {
    const valid = Array.isArray(this.characters) && this.characters.length > 0;
    if (!valid) {
      console.warn('PlayersComponent: No characters available to display.');
    }

    return valid;
  }
}
