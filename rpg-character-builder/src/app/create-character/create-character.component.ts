import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
}

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="main-content">
      <h2 class="rpg-title">Create a New Character</h2>

      <form (ngSubmit)="addCharacter()" class="create-form">
        <div class="form-row">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            [(ngModel)]="formModel.name"
            required
          />
        </div>

        <div class="form-row">
          <label>Gender:</label>
          <select name="gender" [(ngModel)]="formModel.gender">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div class="form-row">
          <label>Class:</label>
          <select name="class" [(ngModel)]="formModel.class">
            <option>Warrior</option>
            <option>Mage</option>
            <option>Rogue</option>
          </select>
        </div>

        <button type="submit" class="submit-btn">Create Character</button>
      </form>

      <h3 class="rpg-title" style="margin-top: 40px;">Created Characters</h3>

      <div class="players-grid">
        @for (c of characters; track c.id) {
          <div class="player-card">
            <h3>{{ c.name }}</h3>
            <p><strong>ID:</strong> {{ c.id }}</p>
            <p><strong>Gender:</strong> {{ c.gender }}</p>
            <p><strong>Class:</strong> {{ c.class }}</p>
          </div>
        }
      </div>
    </div>
  `,
})
export class CreateCharacterComponent {
  characters: Character[] = [];

  formModel = {
    name: '',
    gender: 'Male',
    class: 'Warrior',
  };

  generateId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  addCharacter() {
    const newCharacter: Character = {
      id: this.generateId(),
      name: this.formModel.name,
      gender: this.formModel.gender,
      class: this.formModel.class,
    };

    this.characters.push(newCharacter);
    this.resetForm();
  }

  resetForm() {
    this.formModel = {
      name: '',
      gender: 'Male',
      class: 'Warrior',
    };
  }
}
