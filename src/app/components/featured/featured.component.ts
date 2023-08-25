import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent implements OnInit {
  featuredList!: Product[] ;

  constructor(private products: ProductsService) {}

  ngOnInit(): void {
    this.products
      .getAllProducts()
      .subscribe((res) => ( this.featuredList = res.filter(product => product.featured === true)));
  }
}
