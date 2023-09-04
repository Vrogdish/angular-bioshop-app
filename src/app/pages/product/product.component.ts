import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product! : Product |undefined

  constructor(private route : ActivatedRoute,private products: ProductsService) {}
  
  ngOnInit(): void {
    const productId : string |null = this.route.snapshot.paramMap.get("id")

    if (productId) {
      const id=+productId
      this.products.getProducts()
      this.products.products.subscribe(value => this.product = value.find(product => product.id === id))
    }

  }
}
