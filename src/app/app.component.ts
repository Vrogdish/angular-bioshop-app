import { Component, OnInit } from '@angular/core';
import { ConnexionService } from './services/connexion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  modalIsOpen! : boolean

  constructor(private modal : ConnexionService){}

ngOnInit(): void {
  this.modal.modalIsOpen.subscribe((value)=>{this.modalIsOpen = value})
}

}
