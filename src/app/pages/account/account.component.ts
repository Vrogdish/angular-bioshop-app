import { Component } from '@angular/core';
import { ConnexionService } from 'src/app/services/connexion.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  constructor(private modal : ConnexionService){}

  toggleModal(){
    this.modal.toggleModal()
  }

}
