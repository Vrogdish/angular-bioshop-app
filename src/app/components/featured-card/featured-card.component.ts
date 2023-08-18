import { Component, Input} from '@angular/core';
import { Product } from '../../models/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.scss'],
})
export class FeaturedCardComponent  {
  @Input() product!: Product;

  constructor(  private router : Router) {}

  goToProductPage() {
    this.router.navigate(["/product/"+ this.product.id])
  }

}

