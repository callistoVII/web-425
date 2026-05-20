import { Component, Input } from '@angular/core';
import { Order, Taco } from '../order/order.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],

  /**
   * Fix Summary:
   * Removed AI-generated "Item n" labels and ::before CSS - legacy tests forbid them.
   * Removed Remove Taco button - legacy tests require NO inline remove actions.
   * Removed nested wrapper <div>s that polluted <li>.textContent - tests assert 'exact' text content.
   * Removed subtotal and customizations blocks as they are not part of legacy contract.
   * Restored simple quantity-first summary text format required by legacy contract tests. ie: "2x Carnitas Taco"
   * Restored simple price label wording required by legacy contract tests. ie: "Price per taco: $X.XX"
   * Removed <h1> heading added by AI - not required and not part of legacy UI contract.
   */
  template: `
    @if (order.tacos.length > 0) {
      <ul>
        @for (taco of order.tacos; track taco) {
          <li>
            <!-- FIX: Restored legacy-required quantity-first summary. AI changed this to a new format, breaking multiple tests -->
            {{ taco.quantity ?? 1 }}x {{ taco.name }}
            <br />

            <!-- FIX: Restored exact price label wording. Tests assert the literal string: "Price per taco:" -->
            Price per taco:
            {{ taco.price | currency: 'USD' : 'symbol' : '1.2-2' }}
          </li>
        }
      </ul>

      <p>
        <strong>Total:</strong>
        {{ getTotal() | currency: 'USD' : 'symbol' : '1.2-2' }}
      </p>
    } @else {
      <!-- FIX: This message is required by legacy contract tests for empty orders. AI changed this to a new message, breaking tests. -->
      <p>No tacos added to the order yet.</p>
    }
  `,
  styles: `
    li {
      margin-bottom: 10px;
      padding: 5px;
    }
  `,
})
export class OrderSummaryComponent {
  @Input() order!: Order;

  /**
   * FIX: Logic unchanged - original implementation was correct.
   * Tests rely on this total calc behavior.
   */

  getTotal() {
    return this.order.tacos.reduce(
      (acc, taco) => acc + taco.price * (taco.quantity ?? 1),
      0,
    );
  }
}
