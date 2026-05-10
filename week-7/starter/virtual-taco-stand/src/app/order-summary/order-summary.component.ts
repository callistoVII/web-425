import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order, Taco } from '../order/order.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Order Summary</h1>
    @if (order.tacos.length > 0) {
      <ul class="order-summary-list">
        @for (let taco of order.tacos; index as i; track taco) {
          <li class="order-line-item" data-item-label="Item {{ i + 1 }}">
            <div class="order-line-item-heading">
              <div class="item-name">{{ taco.name }}</div>
              <span
                class="remove-taco"
                role="button"
                tabindex="0"
                (click)="removeItem(i)"
                >Remove Taco</span
              >
            </div>

            <div class="order-line-item-details">
              <p class="line-item-summary">
                <strong>{{ taco.quantity }}x {{ taco.name }}</strong>
              </p>
              <p class="line-item-price">
                Price per taco:
                {{ taco.price | currency: 'USD' : 'symbol' : '1.2-2' }}
              </p>
              <p class="line-item-subtotal">
                Subtotal:
                {{
                  getLineSubtotal(taco) | currency: 'USD' : 'symbol' : '1.2-2'
                }}
              </p>
              @if (taco.noOnions || taco.noCilantro) {
                <p class="line-item-customizations">
                  Customizations: {{ taco.noOnions ? 'No onions' : ''
                  }}{{ taco.noOnions && taco.noCilantro ? ', ' : ''
                  }}{{ taco.noCilantro ? 'No cilantro' : '' }}
                </p>
              }
            </div>
          </li>
        }
      </ul>
      <p>
        <strong>Total:</strong>
        {{ getTotal() | currency: 'USD' : 'symbol' : '1.2-2' }}
      </p>
    } @else {
      <p>No tacos added to the order yet.</p>
    }
  `,
  styles: `
    .order-summary-list {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .order-line-item {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 14px;
      margin-bottom: 14px;
      background: #fff;
    }

    .order-line-item::before {
      content: attr(data-item-label);
      font-weight: 700;
      display: block;
      margin-bottom: 8px;
      color: #333;
    }

    .order-line-item-heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-bottom: 10px;
    }

    .item-name {
      font-size: 1rem;
      font-weight: 700;
    }

    .remove-taco {
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 6px 10px;
      border-radius: 4px;
      background-color: #f0f0f0;
      color: #222;
      font-size: 0.9rem;
      user-select: none;
    }

    .remove-taco:hover,
    .remove-taco:focus {
      background-color: #e0e0e0;
    }

    .order-line-item-details p {
      margin: 4px 0;
    }

    .line-item-customizations {
      font-style: italic;
      color: #555;
      margin-top: 6px;
    }
  `,
})
export class OrderSummaryComponent {
  @Input() order!: Order;
  @Output() removeTaco = new EventEmitter<number>();

  getTotal() {
    return this.order.tacos.reduce(
      (acc, taco) => acc + taco.price * (taco.quantity ?? 1),
      0,
    );
  }

  getLineSubtotal(taco: Taco) {
    return taco.price * (taco.quantity ?? 1);
  }

  removeItem(index: number) {
    this.removeTaco.emit(index);
  }
}
