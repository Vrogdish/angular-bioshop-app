import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class CartService  {
  public mycart :CartItem[] = []

  constructor() { }

  addTocart(product:Product, quantity:number) {
    const cartItem : CartItem = {product : product , quantity : quantity}
    let ItemAlreadyExist :boolean = false

    for (let i=0 ; i < this.mycart.length; i++) {
      if (this.mycart[i].product.id === cartItem.product.id) {
        ItemAlreadyExist = true
      }
    }

    if (!ItemAlreadyExist) {
      this.mycart.push(cartItem)
    } else {
      console.log("article deja présent")
    }
    
    console.log(this.mycart.length)
  }
}
