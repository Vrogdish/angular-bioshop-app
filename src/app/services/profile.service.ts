import { Injectable } from '@angular/core';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { UserProfile } from '../models/user';
import { BehaviorSubject } from 'rxjs';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public userProfil: BehaviorSubject<UserProfile> = new BehaviorSubject<any>(
    {}
  );

  constructor(private firestore : Firestore) { }

  async getProfile(uid: string) {
    try {
      const userCollection = collection(this.firestore, 'usersProfiles');
      const q = query(userCollection, where('uid', '==', uid));
      const userDocSnap = await getDocs(q);

      let result: any[] = [];
      userDocSnap.forEach((doc) => {
        result.push(doc.data());
      });

      const profil: UserProfile = new UserProfile(
        result[0].firstname,
        result[0].lastname,
        result[0].email,
        result[0].adress,
        result[0].postalCode,
        result[0].city,
        result[0].country
      );
      this.userProfil.next(profil);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération du profil de l'utilisateur :",
        error
      );
    }
  }
}
