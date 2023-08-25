import { Component, OnInit} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit {
  auth! : boolean 
  userName! : string 
  itemQuantity! : number

  constructor(private cart : CartService) {
  }

  ngOnInit(): void {
    this.auth = false
    this.userName = "Cedric"
    this.cart._myCart.subscribe(value => this.itemQuantity = value.length)
    
  }
  

}







 

