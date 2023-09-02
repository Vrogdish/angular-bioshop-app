import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';
import { ConnexionService } from 'src/app/services/connexion.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  myCart!: CartItem[];
  totalPrice!: number;
  auth!: boolean;

  constructor(private cart: CartService, private connexion: ConnexionService) {}

  ngOnInit(): void {
    this.auth = false;
    this.cart._myCart.subscribe((value) => {
      this.myCart = value;
    });

    this.cart._totalPrice.subscribe((value) => {
      this.totalPrice = value;
    });
    this.connexion.userAuth.subscribe((value) => {
      if (value === true) {
        this.auth = true;
      } else {
        this.auth = false;
      }
    });
  }

  validateCart() {
    if (this.auth === true) {
      this.cart.validateCart();
    } else {
      this.connexion.toggleModal();
    }
  }
}
