import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  myCart!: CartItem[];
  totalPrice!: number;

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.cart._myCart.subscribe((value) => {
      this.myCart = value;
    });

    this.cart._totalPrice.subscribe((value) => {this.totalPrice = value})
  }

  validateCart(){
    this.cart.validateCart()
  }
}
