import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
modalIsOpen : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
profil! : any  // a modifier
authToken! : string

  constructor() { }

toggleModal(){
  this.modalIsOpen.value? this.modalIsOpen.next(false) : this.modalIsOpen.next(true)
}


}
