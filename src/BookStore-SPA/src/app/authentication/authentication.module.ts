import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { LoginUserComponent } from './login-user/login-user.component';
import { BookListComponent } from '../books/book-list/book-list.component';



@NgModule({
  declarations: [
    RegisterUserComponent,
    LoginUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'register',component:RegisterUserComponent},
      {path:'login',component:LoginUserComponent}
    ])
  ]
})
export class AuthenticationModule { }
