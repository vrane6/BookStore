import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BookService } from './_services/book.service';
import { Category } from './_models/Category';
import { ConfirmationDialogService } from './_services/confirmation-dialog.service';
import { CategoryComponent } from './categories/category/category.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { BookComponent } from './books/book/book.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { NgbdDatepickerPopup } from './datepicker/datepicker-popup';
import { ErrorHandlerService } from './_services/shared/error-handler/error-handler.service';

import {JwtModule} from "@auth0/angular-jwt";
import { PrivacyComponent } from './privacy/privacy.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MasterparameterComponent } from './masterparameters/masterparameter/masterparameter.component';
import { MasterparameterListComponent } from './masterparameters/masterparameter-list/masterparameter-list.component'

export function tokenGetter(){
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryListComponent,
    BookComponent,
    BookListComponent,
    HomeComponent,
    NavComponent,
    ConfirmationDialogComponent,
    NgbdDatepickerPopup,
    PrivacyComponent,
    ForbiddenComponent,
    MasterparameterComponent,
    MasterparameterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:["localhost:5001"],
        disallowedRoutes:[]
      }
    })

  ],
  providers: [BookService,Category,ConfirmationDialogService,{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlerService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
