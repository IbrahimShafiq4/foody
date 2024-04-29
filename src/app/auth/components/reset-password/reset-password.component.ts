import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/Auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private _ToastrService: ToastrService
  ) { }

  resetForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    seed: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern
        (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ]),

    confirmPassword: new FormControl(null, [
      Validators.required,
      this.passwordMatchValidator.bind(this)
    ]),
  })

  hide: { [id: number]: boolean } = {};

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = this.resetForm?.get('password')?.value;
    const confirmPassword = control.value;

    if (password !== confirmPassword) {
      return { 'passwordMismatch': true };
    }

    return null;
  }

  onReset(data: FormGroup) {
    this._AuthService.reset(data.value).subscribe({
      error: (error: HttpErrorResponse) => this._ToastrService.error(error.error.message, 'Error'),
      complete: () => {
        this._ToastrService.success('Password Changed Successfully', 'Success');
        setTimeout(() => {
          this._Router.navigate(['/auth/login']);
        }, 1000)
      }
    })
  }
}
