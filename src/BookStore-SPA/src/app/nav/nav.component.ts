import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public isUserAuthenticated: boolean | any;

  constructor(private authService: AuthenticationService,private router:Router) {
    this.authService.authChanged
    .subscribe(res=>{
      this.isUserAuthenticated=res;
    })
   }

  ngOnInit(): void {
    this.authService.authChanged
      .subscribe(res => {
        this.isUserAuthenticated = res;
      })
  }

  public logout = () => {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

}
