import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';
import { User } from '../models/user.interface';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  error: string = null;

  constructor(private authService: AuthenticationService,
              private router: Router) {
    this.loginForm = new FormGroup({
        username: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
        this.loginForm.markAllAsTouched();
        return;
    }
    const user = this.loginForm.value;

    this.authService.login(user)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['/temp']);
        },
        error => {
            console.log('Error: ', error);
            this.error = error;
        });
  }

  isControlInvalid(controlName: string): boolean {
     const control = this.loginForm.get(controlName);
     return control.touched && control.invalid;
  }

}
