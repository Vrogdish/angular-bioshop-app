import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-buy-it',
  templateUrl: './buy-it.component.html',
  styleUrls: ['./buy-it.component.scss'],
})
export class BuyItComponent implements OnInit {
  quantity!: number;
  productIsAdd! : boolean
  @Input() product!: Product;
  @Input() size! : "large" | "small"

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.quantity = 1;
    // this.productIsAdd = false
    this.cart._myCart.subscribe((value)=> { 
      const searchResult =  value.find(item=>item.product.id === this.product.id)
      if (searchResult) {this.productIsAdd = true} else {this.productIsAdd=false}
    })

  }

  increaseQuantity() {
    this.quantity < 10 && this.quantity++;
  }

  decreaseQuantity() {
    this.quantity > 1 && this.quantity--;
  }

  addToCart() {
    const cartItem : CartItem = {product:this.product, quantity:this.quantity}
    this.cart.addTocart(cartItem)
    // this.productIsAdd = true
  }
}
