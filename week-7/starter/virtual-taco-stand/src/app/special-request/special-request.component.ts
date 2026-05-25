import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-special-request',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="special-request-card">
      <h2>Special Request</h2>

      <form
        #specialForm="ngForm"
        (ngSubmit)="submitRequest()"
        class="request-form"
      >
        <div class="form-group">
          <label for="customerName">Customer Name</label>
          <input
            id="customerName"
            name="customerName"
            type="text"
            [(ngModel)]="customerName"
            required
            class="form-control"
          />
        </div>

        <div class="form-group">
          <label for="specialRequest">Special request</label>
          <textarea
            id="specialRequest"
            name="specialRequest"
            rows="3"
            [(ngModel)]="specialRequest"
            required
            class="form-control"
          ></textarea>
        </div>

        <div class="form-group spice-level">
          <span>Spice level</span>
          <label>
            <input
              type="radio"
              name="spiceLevel"
              value="Mild"
              [(ngModel)]="spiceLevel"
            />
            Mild
          </label>
          <label>
            <input
              type="radio"
              name="spiceLevel"
              value="Medium"
              [(ngModel)]="spiceLevel"
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              name="spiceLevel"
              value="Hot"
              [(ngModel)]="spiceLevel"
            />
            Hot
          </label>
        </div>

        <button
          type="submit"
          class="submit-button"
          [disabled]="!customerName || !specialRequest || !spiceLevel"
        >
          Submit request
        </button>
      </form>

      <section class="summary">
        @if (!submitted) {
          <p class="empty-state">No special request submitted yet</p>
        }

        @if (submitted) {
          <h3>Request summary</h3>
          <p><strong>Name:</strong> {{ customerName }}</p>
          <p><strong>Request:</strong> {{ specialRequest }}</p>
          <p><strong>Spice Level:</strong> {{ spiceLevel }}</p>
        }
      </section>
    </section>
  `,
  styles: [
    `
      .special-request-card {
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 18px;
        max-width: 460px;
        font-family: Arial, sans-serif;
        background: #fff;
      }

      .special-request-card h2 {
        margin-top: 0;
        margin-bottom: 16px;
        font-size: 1.3rem;
      }

      .form-group {
        margin-bottom: 14px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .form-control {
        min-height: 36px;
        padding: 8px 10px;
        border: 1px solid #bbb;
        border-radius: 5px;
        font: inherit;
      }

      textarea.form-control {
        resize: vertical;
      }

      .spice-level {
        gap: 10px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }

      .spice-level label {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.95rem;
      }

      .submit-button {
        padding: 10px 18px;
        background: #1f7a00;
        color: #fff;
        border: none;
        border-radius: 6px;
        font: inherit;
        cursor: pointer;
      }

      .submit-button:disabled {
        background: #999;
        cursor: not-allowed;
      }

      .summary {
        margin-top: 22px;
        padding-top: 16px;
        border-top: 1px solid #eee;
      }

      .empty-state {
        color: #555;
      }
    `,
  ],
})
export class SpecialRequestComponent {
  customerName = '';
  specialRequest = '';
  spiceLevel = '';
  submitted = false;

  submitRequest(): void {
    if (!this.customerName || !this.specialRequest || !this.spiceLevel) {
      return;
    }

    this.submitted = true;
  }
}
