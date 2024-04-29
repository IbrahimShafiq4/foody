import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/Auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  forgetForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  })

  constructor(
    private _AuthService: AuthService, 
    private _ToastrService: ToastrService,
    private _Router: Router 
  ) { }

  onForget(data: FormGroup) {
    this._AuthService.forget(data.value).subscribe({
      error: (error: HttpErrorResponse) => this._ToastrService.error(error.error.message, 'Error'),
      complete: () => {
        this._ToastrService.success('Check Your E-Mail for OTP', 'Success');
        setTimeout(() => {
          this._Router.navigate(['/auth/reset'])
        }, 1000)
      }
    })
  }
}
