import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../Services/Auth.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private _AuthService: AuthService, 
    private _ToastrService: ToastrService,
    private _Router: Router
  ) { }

  hide: boolean = true;

  loginForm = new FormGroup({
    email: new FormControl(null,
      [
        Validators.required,
        Validators.email
      ]),
    password: new FormControl(null,
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        ),
        Validators.minLength(8)
      ])
  })

  onLogin(data: FormGroup) {
    this._AuthService.login(data.value)
      .subscribe({
        // next: (response: HttpResponse<any>) => {
        //   if (response.body.token && response.body) {
        //     console.log(response.body.token)
        //   }
        // }, 
        next: (response) => {
          if (response.token) {
            localStorage.setItem('userToken', response.token);
            this._AuthService.getProfile();
          }
        },
        error: (error: HttpErrorResponse) => this._ToastrService.error(error.error.message, 'Error'),
        complete: () => {
          this._ToastrService.success(`Welcome Back ${data.value.email}`, 'Success')
          this._Router.navigate(['/dashboard']);
        }
      });
  }
}
