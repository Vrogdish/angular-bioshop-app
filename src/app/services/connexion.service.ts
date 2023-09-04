import { Injectable } from '@angular/core';
import {
  Auth,
  User,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

import { BehaviorSubject } from 'rxjs';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root',
})
export class ConnexionService {
  public modalIsOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private userData: BehaviorSubject<User> = new BehaviorSubject<any>({});
  public userAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private auth: Auth, private profile: ProfileService) {}

  toggleModal() {
    this.modalIsOpen.value
      ? this.modalIsOpen.next(false)
      : this.modalIsOpen.next(true);
  }

  async login(email: string, password: string) {
    this.loading.next(true);
    await signInWithEmailAndPassword(this.auth, email, password)
      .then((result: any) => {
        this.userData.next(result.user);
      })
      .then(async () => {
        await this.profile.getProfile(this.userData.value.uid);
        this.userAuth.next(true);
        this.modalIsOpen.next(false);
        
      })
      .catch((error) => {
        window.alert("Adresse email ou mot de passe invalide");
        console.log(error)
      });
      this.loading.next(false)
  }

  logout() {
    signOut(this.auth);
    this.userAuth.next(false);
  }
}
