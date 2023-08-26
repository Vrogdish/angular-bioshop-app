import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent {
  @Input() product! : Product

  constructor(  private router : Router) {}


  goToProductPage() {
    this.router.navigate(["/product/"+ this.product.id])
  }

}
