import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-buy-it',
  templateUrl: './buy-it.component.html',
  styleUrls: ['./buy-it.component.scss'],
})
export class BuyItComponent implements OnInit {
  quantity!: number;
  @Input() product!: Product;

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.quantity = 1;
  }

  increaseQuantity() {
    this.quantity < 10 && this.quantity++;
  }

  decreaseQuantity() {
    this.quantity > 1 && this.quantity--;
  }

  addToCart() {
    this.cart.addTocart(this.product,this.quantity)
  }
}
