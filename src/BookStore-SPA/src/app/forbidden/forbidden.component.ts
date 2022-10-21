import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent implements OnInit {

  private retunUrl:string | undefined;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.retunUrl=this.route.snapshot.queryParams['returnUrl']||'/';
  }

  public navigateToLogin=()=>{
    this.router.navigate(['/authentication/login'],{queryParams:{returnUrl:this.retunUrl}});
  }

}
