import { Component, OnInit } from '@angular/core';
import { ConnexionService } from 'src/app/services/connexion.service';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  loading! : boolean

  constructor(private connexion: ConnexionService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.connexion.loading.subscribe((value)=>{this.loading = value})
  }

  getEmail() {
    return this.signInForm.get('email');
  }
  getPassword() {
    return this.signInForm.get('password');
  }

  login() {
    const email = this.getEmail();
    const password = this.getPassword();

    if (email?.value && password?.value) {
      this.connexion.login(email.value, password.value);
    }
    }
}
