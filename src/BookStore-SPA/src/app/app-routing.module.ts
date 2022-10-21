import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookComponent } from './books/book/book.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryComponent } from './categories/category/category.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { MasterparameterListComponent } from './masterparameters/masterparameter-list/masterparameter-list.component';
import { MasterparameterComponent } from './masterparameters/masterparameter/masterparameter.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { Masterparameter } from './_models/Masterparameter';
import { AdminGuard } from './_services/shared/guard/admin.guard';
import { AuthGuard } from './_services/shared/guard/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'books', component: BookListComponent },
  { path: 'books', component: BookListComponent, canActivate: [AuthGuard] },
  { path: 'book', component: BookComponent, canActivate: [AuthGuard] },
  { path: 'book/:id', component: BookComponent, canActivate: [AuthGuard] },
  { path: 'categories', component: CategoryListComponent, canActivate: [AuthGuard] },
  { path: 'category', component: CategoryComponent, canActivate: [AuthGuard] },
  { path: 'category/:id', component: CategoryComponent, canActivate: [AuthGuard] },
  { path: 'masterparameters', component: MasterparameterListComponent, canActivate: [AuthGuard] },
  { path: 'masterparameter', component: MasterparameterComponent, canActivate: [AuthGuard] },
  { path: 'masterparameter/:id', component: MasterparameterComponent, canActivate: [AuthGuard] },
  { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'privacy', component: PrivacyComponent,canActivate:[AuthGuard,AdminGuard] },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
