import { Component, OnInit } from '@angular/core';
import { ConnexionService } from 'src/app/services/connexion.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  auth!: boolean;

  constructor(private connexion: ConnexionService) {}

  ngOnInit(): void {
    this.auth = false;
    this.connexion.userAuth.subscribe((value) => {
      if (value === true) {
        this.auth = true;
      } else {
        this.auth = false;
      }
    });
  }

  toggleModal() {
    this.connexion.toggleModal();
  }
}
