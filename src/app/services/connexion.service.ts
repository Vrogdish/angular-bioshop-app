import { Injectable } from '@angular/core';
import {
  Auth,
  User,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

import { BehaviorSubject } from 'rxjs';
import { UserProfile } from '../models/user';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root',
})
export class ConnexionService {
  public modalIsOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private userData: BehaviorSubject<User> = new BehaviorSubject<any>({});
  public userProfil: BehaviorSubject<UserProfile> = new BehaviorSubject<any>(
    {}
  );

  public userAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private auth: Auth,  private profile : ProfileService) {}

  toggleModal() {
    this.modalIsOpen.value
      ? this.modalIsOpen.next(false)
      : this.modalIsOpen.next(true);
  }

  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password)
      .then((result: any) => {
        this.userData.next(result.user);
      })
      .then(async () => {
        await this.profile.getProfile(this.userData.value.uid);
        this.userAuth.next(true);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  logout() {
    signOut(this.auth);
    this.userAuth.next(false);
  }
}
