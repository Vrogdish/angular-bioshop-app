import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;

  constructor(private cart: CartService) {}

  addQuantity() {
    if (this.cartItem.quantity < 10) {
      const newQuantity = this.cartItem.quantity + 1;
      this.cart.changeItemQuantity(this.cartItem.product.id, newQuantity);
    }
  }

  removeQuantity() {
    if (this.cartItem.quantity > 0) {
      const newQuantity = this.cartItem.quantity - 1;
      this.cart.changeItemQuantity(this.cartItem.product.id, newQuantity);
    }
  }
  deleteFromCart() {
    this.cart.removeFromCart(this.cartItem.product.id);
  }
}
