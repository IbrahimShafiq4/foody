import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../Services/Auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(
    private _AuthService: AuthService,
    private _ToastrService: ToastrService
  ) { }

  userName: string = '';

  ngOnInit(): void {
    document.addEventListener('click', (e) => {
      if (e.target && (e.target as HTMLElement).classList.contains('pop-up')) {
        this.openPopup = false;
      }
    })

    this.registerForm.get('email')?.valueChanges.subscribe(email => {
      this.verifyForm.get('email')?.setValue(email || null)
    })

    this.registerForm.get('userName')?.valueChanges.subscribe(userName => {
      this.userName = userName || '';
    })
  }
  

  files: File[] = [];
  imgSrc: any;
  
  hide: { [id: number]: boolean } = {};
  
  openPopup: boolean = false;

  registerForm = new FormGroup({
    userName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15)
    ]),

    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),

    country: new FormControl(null, [
      Validators.required
    ]),

    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
      Validators.maxLength(12)
    ]),

    password: new FormControl(null, [
      Validators.required,
      Validators.pattern
        (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ]),

    confirmPassword: new FormControl(null, [
      Validators.required,
      this.passwordMatchValidator.bind(this)
    ]),
  });

  verifyForm = new FormGroup({
    email: new FormControl(null,
      [
        Validators.required,
        Validators.email
      ]),
    otp: new FormControl(null,
      [
        Validators.required,
        Validators.maxLength(4),
        Validators.minLength(4)
      ])
  })

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = this.registerForm?.get('password')?.value;
    const confirmPassword = control.value;

    if (password !== confirmPassword) {
      return { 'passwordMismatch': true };
    }

    return null;
  }

  onRegister(data: FormGroup) {
    const formData = new FormData();
    Object.entries<string>(data.value)
      .forEach(([key, value]) => {
        formData.append(key, value);
      });
    formData.append('profileImage', this.imgSrc);

    this._AuthService.register(formData).subscribe({
      error: (error: HttpErrorResponse) => {
        this._ToastrService.error(error.error.message, 'Error')
        this.openPopup = false
      },
      complete: () => {
        this._ToastrService.success('Account Registered Successfully', 'Success');
        setTimeout(() => {
          this.openPopup = !this.openPopup
        }, 1000)
      }
    })
  }

  onVerify(data: FormGroup) {
    this._AuthService.verify(data.value).subscribe({
      error: (error: HttpErrorResponse) => this._ToastrService.error(error.error.message, 'Error'),
      complete: () => {
        this._ToastrService.success('Account Verified Successfully', 'Success')
        setTimeout(() => {
          this.openPopup = false
        }, 1000)
      }
    })
  }

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
    this.imgSrc = this.files[0];
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
