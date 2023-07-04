import { AuthService } from 'src/app/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  returnUrl = '';
  registerForm: FormGroup;
  mathAnswer = false;

  constructor(private accountService: AuthService, private toastService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)],),
      confirmPassword: new FormControl('', [Validators.required, this.matchPassword('password')]),
    });
  }

  onSubmit(){
    console.log(this.registerForm.value);
    this.accountService.register(this.registerForm.value).subscribe(() => {
      this.toastService.success("Registered Successfully");
      this.router.navigateByUrl(this.returnUrl);
    }, error => {
      console.log(error);
        if (error?.status === 401 || error?.status === 400)  {
          this.toastService.error(error?.error);
        }
    });
  }

  

  matchPassword(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value
        ? null
        : { isMatching: true };
    };
  }

}
