import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public _myCart: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>(
    []
  );
  public _totalPrice: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
    this._myCart.subscribe((cartItems) => {
      let totalPrice = 0;
      for (const cartItem of cartItems) {
        totalPrice += cartItem.product.price * cartItem.quantity;
      }
      this._totalPrice.next(totalPrice);
    });
  }

  // get myCart(): BehaviorSubject<CartItem[]> {
  //   return this._myCart;
  // }

  // set myCart(value: BehaviorSubject<CartItem[]>) {
  //   this._myCart = value;
  // }

  addTocart(cartItem: CartItem) {
    const existingItems = this._myCart.value;

    // Vérifier si le produit existe déjà dans le panier
    const itemIndex = existingItems.findIndex(
      (item) => item.product.id === cartItem.product.id
    );

    if (itemIndex === -1) {
      // Le produit n'existe pas dans le panier, nous pouvons l'ajouter
      this._myCart.next([...existingItems, cartItem]);
    } else {
      // Le produit existe déjà dans le panier
      alert('Article déjà présent dans le panier');
    }

    console.log("Mon panier : ",this._myCart.value);
  }

  changeItemQuantity(productId: number, quantity: number) {
    const existingItems = this._myCart.value;

    const updatedItems = existingItems.map((cartItem) => {
      if (cartItem.product.id === productId) {
        cartItem.quantity = quantity;
      }
      return cartItem;
    });

    this._myCart.next(updatedItems);
    console.log("Mon panier : ",this._myCart.value);

  }

  removeFromCart(productId: number) {
    const existingItems = this._myCart.value
    const updatedItems = existingItems.filter((cartItem) => cartItem.product.id != productId)
    this._myCart.next(updatedItems)
    console.log("Mon panier : ",this._myCart.value);

  }

  validateCart() {
    console.log ("Commande envoyée : ",this._myCart.value)
    this._myCart.next([])
  }
}
