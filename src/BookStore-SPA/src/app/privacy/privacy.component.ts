import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../_services/shared/repository/repository.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  claims: any;

  constructor(private _repository: RepositoryService) { }

  ngOnInit(): void {
    this.getClaims();
  }

  public getClaims = () => {
    this._repository.getClaims()
      .subscribe(res => {
        this.claims = res as [];
      })
  }

}



