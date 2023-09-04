import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/models/user';
import { ConnexionService } from 'src/app/services/connexion.service';

import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  profile!:UserProfile

  constructor(private userProfile:ProfileService, private connexion : ConnexionService){}

  ngOnInit(): void {
    this.userProfile.userProfil.subscribe((value)=>this.profile = value)
  }

  logout(){
    this.connexion.logout()
  }

}
