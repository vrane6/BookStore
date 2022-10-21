import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthResponseDto } from 'src/app/_interfaces/response/AuthResponseDto';
import { userForAuthenticationDto } from 'src/app/_interfaces/user/userForAuthenticationDto';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  private returnUrl:string | undefined;

  loginForm:FormGroup|any;
  errorMessage:string='';
  showError:boolean | undefined;

  constructor(private authService: AuthenticationService, 
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      username:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required])
    })
    this.returnUrl=this.route.snapshot.queryParams['returnUrl']||'/';
  }

  validateControl=(controlName:string)=>{
    return this.loginForm.get(controlName).invalid&&this.loginForm.get(controlName).touched
  }

  hasError = (controlName: string, errorName: string) => {
    return this.loginForm.get(controlName).hasError(errorName)
  }
  
  loginUser = (loginFormValue:any) => {
    this.showError = false;
    const login = {... loginFormValue };
    const userForAuth: userForAuthenticationDto = {
      email: login.username,
      password: login.password
    }
    this.authService.loginUser('api/accounts/login', userForAuth)
    .subscribe({
      next: (res:AuthResponseDto) => {
       localStorage.setItem("token", res.token);
       this.authService.sendAuthStateChangeNotification(res.isAuthSuccessful);
       this.router.navigate([this.returnUrl]);
    },
    error: (err: HttpErrorResponse) => {
      this.errorMessage = err.message;
      this.showError = true;
    }})
  }

  public cancel() {
    this.router.navigate(['[authentication/login]']);
  }

}
