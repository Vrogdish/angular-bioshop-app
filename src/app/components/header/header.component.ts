import { Component, OnInit} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ConnexionService } from 'src/app/services/connexion.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit {
  auth! : boolean 
  userName! : string 
  itemQuantity! : number

  constructor(private cart : CartService, private connexion:ConnexionService, private profile : ProfileService) {
  }

  ngOnInit(): void {
    this.auth = false
    this.cart._myCart.subscribe(value => this.itemQuantity = value.length)
    this.connexion.userAuth.subscribe(value => {
      if (value === true) {
        this.auth=true
        this.profile.userProfil.subscribe((value)=>this.userName=value.firstname)
      } else {
        this.auth=false
      }})
   
    
  }
  
  toggleModal(){
    this.connexion.toggleModal()
  }

}







 

