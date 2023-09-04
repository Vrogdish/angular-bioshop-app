import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  productsList!: Product[];
  ProductsFiltered!: Product[];
  activeFilter!: 'all' | 'food' | 'beauty' | 'other';

  constructor(private products: ProductsService) {}

  ngOnInit(): void {
    this.products.getProducts()
    this.products.products.subscribe((value) => {
      this.productsList = value;
    });
  }

  activateFilter(filter: 'all' | 'food' | 'beauty' | 'other') {
    this.activeFilter = filter;

    if (filter === 'all') {
      this.products.products.subscribe((value) => {
        this.productsList = value;
      });
    } else {
      this.products.products.subscribe((value) => {
        const searchResult: Product[] = value.filter(
          (item) => item.category === filter
        );
        searchResult ? (this.productsList = searchResult) : null;
      });
    }
  }
}
