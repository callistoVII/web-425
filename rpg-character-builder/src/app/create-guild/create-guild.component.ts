import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="guild-form-container">
      <form
        [formGroup]="guildForm"
        class="guild-form"
        (ngSubmit)="createGuild(); guildForm.reset()"
      >
        <h1>Create a New Guild</h1>

        <fieldset>
          <legend>Guild Form</legend>

          <!-- Guild Name -->
          <label>Guild Name</label>
          <input type="text" formControlName="guildName" />

          <!-- Description -->
          <label>Description</label>
          <textarea rows="10" formControlName="description"></textarea>

          <!-- Guild Type -->
          <label>Guild Type</label>
          <select formControlName="type">
            @for (option of guildTypes; track option) {
              <option [value]="option">
                {{ option }}
              </option>
            }
          </select>

          <!-- Notification Preference -->
          <label>Notification Preference</label>
          @for (pref of notificationOptions; track pref) {
            <input
              type="radio"
              [value]="pref"
              formControlName="notificationPreference"
            />
            {{ pref }}
            <br />
          }

          <!-- Accept Terms -->
          <label>
            <input type="checkbox" formControlName="acceptTerms" />
            I accept the guild charter and terms.
          </label>

          <input
            type="submit"
            [disabled]="!guildForm.valid"
            value="Create Guild"
          />
        </fieldset>
      </form>

      <!-- Existing Guilds -->
      <div class="guilds">
        <h1>Created Guilds</h1>

        <div class="guilds-container">
          @for (guild of guilds; track guild) {
            <div class="guild-card">
              <h2>{{ guild.guildName }}</h2>

              <h3>Type:</h3>
              <p>{{ guild.type }}</p>

              <h3>Notification Preference:</h3>
              <p>{{ guild.notificationPreference }}</p>

              <h3>Description:</h3>
              <p>{{ guild.description }}</p>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [], // CSS moved to global stylesheet
})
export class CreateGuildComponent {
  guildTypes: string[] = ['Competitive', 'Casual', 'Social', 'Educational'];
  notificationOptions: string[] = ['Email', 'SMS', 'In-App'];

  guilds: any[] = [];

  guildForm: FormGroup = this.fb.group({
    guildName: [null, Validators.required],
    description: [null, Validators.required],
    type: [null, Validators.required],
    notificationPreference: [null, Validators.required],
    acceptTerms: [false, Validators.requiredTrue],
  });

  constructor(private fb: FormBuilder) {}

  createGuild() {
    if (this.guildForm.invalid) {
      return;
    }

    this.guilds.push(this.guildForm.value);

    alert('Guild created successfully!');
  }
}
