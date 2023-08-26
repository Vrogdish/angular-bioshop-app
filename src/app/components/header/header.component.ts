import { Component, OnInit} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Subscription } from 'rxjs';
import { ConnexionService } from 'src/app/services/connexion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit {
  auth! : boolean 
  userName! : string 
  itemQuantity! : number

  constructor(private cart : CartService, private modal:ConnexionService) {
  }

  ngOnInit(): void {
    this.auth = false
    this.userName = "Cedric"
    this.cart._myCart.subscribe(value => this.itemQuantity = value.length)
    
  }
  
  toggleModal(){
    this.modal.toggleModal()
  }

}







 

