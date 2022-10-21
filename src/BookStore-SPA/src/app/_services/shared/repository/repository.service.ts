import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private authChangeSub = new Subject<boolean>();
  public authChanged = this.authChangeSub.asObservable();

  private baseUrl: string = environment.baseUrl + 'api/';
  
  constructor(private http: HttpClient) { }

  public getClaims = () => {
    return this.http.get(this.baseUrl + 'Accounts/privacy');
  }

  
  
}
