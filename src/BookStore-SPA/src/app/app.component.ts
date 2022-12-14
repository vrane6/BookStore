import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BookStore-SPA';

  constructor(private authService:AuthenticationService){}

  ngOnInit(): void {
    if(this.authService.isAuthenticated())
    this.authService.sendAuthStateChangeNotification(true);
  }

  
}
