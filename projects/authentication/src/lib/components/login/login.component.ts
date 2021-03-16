import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginForm: FormGroup;

  error: string = null;

  constructor(
      private authService: AuthenticationService,
      private router: Router,
      @Inject('config') private config: string) {
    
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
          this.router.navigate([this.config]);
      },
      error => {
          this.error = error;
      });
    }
  isControlInvalid(controlName: string): boolean {
     const control = this.loginForm.get(controlName);
     return control.touched && control.invalid;
  }
}
