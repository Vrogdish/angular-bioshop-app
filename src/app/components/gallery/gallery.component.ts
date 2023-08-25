import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  productsList! : Product[]

constructor(private products : ProductsService){}

ngOnInit(): void {
  this.products.getAllProducts().subscribe((value) => {this.productsList = value})
}

}
