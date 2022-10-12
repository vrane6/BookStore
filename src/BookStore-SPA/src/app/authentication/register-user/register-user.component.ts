import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserForRegistrationDto } from 'src/app/_interfaces/user/userForRegistrationDto';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { PasswordConfirmationValidatorService } from 'src/app/_services/shared/custom-validators/password-confirmation-validator.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public registerForm: FormGroup | any;
  public errorMessage: string = '';
  public showError: boolean | undefined;


  constructor(private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService,
    private passConfValidator: PasswordConfirmationValidatorService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('')
    });
   
    this.registerForm.get('confirm').setValidators([Validators.required,
    this.passConfValidator.validateConfirmPassword(this.registerForm.get('password'))])

  }

  public cancel() {
    this.router.navigate(['[authentication/register]']);
  }

  public validateControl = (controlName: string) => {
    return this.registerForm?.get(controlName)?.invalid && this.registerForm.get(controlName)?.touched
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm?.get(controlName)?.hasError(errorName)
  }

  public registerUser = (registerFormValue: any) => {
    this.showError=false;
    const formValues = { ...registerFormValue };
    const user: UserForRegistrationDto = {
      firstname: formValues.firstName,
      lastname: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.confirm
    };
    this.authService.registerUser("api/accounts/registration", user)
      .subscribe({
        next: (_) => {
          this.toastr.success('Registration successful');
            this.router.navigate(['authentication/register'])
        },
        error: (err: HttpErrorResponse) => {
          this.errorMessage = err.message;
          this.showError = true;
        }
      })
  }

 


}
