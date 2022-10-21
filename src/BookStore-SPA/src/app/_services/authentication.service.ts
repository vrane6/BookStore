import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponseDto } from '../_interfaces/response/AuthResponseDto';
import { RegistrationResponseDto } from '../_interfaces/response/registrationResponseDto';
import { userForAuthenticationDto } from '../_interfaces/user/userForAuthenticationDto';
import { UserForRegistrationDto } from '../_interfaces/user/userForRegistrationDto';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authChangeSub = new Subject<boolean>();
  public authChanged = this.authChangeSub.asObservable();

  private baseUrl: string = environment.baseUrl + 'api/';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  public registerUser = (route: string, body: UserForRegistrationDto) => {
    return this.http.post<RegistrationResponseDto>(this.baseUrl + 'Accounts/Registration', body)
  }

  public loginUser = (route: string, body: userForAuthenticationDto) => {
    return this.http.post<AuthResponseDto>(this.baseUrl + 'Accounts/Login', body);
  }

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this.authChangeSub.next(isAuthenticated);
  }

  public logout = () => {
    localStorage.removeItem("token");
    this.sendAuthStateChangeNotification(false);
  }

  public isAuthenticated = (): boolean | any => {
    const token = localStorage.getItem("token");
    return token && !this.jwtHelper.isTokenExpired(token);
  }

  public isUserAdmin = (): boolean | any => {
    const token = localStorage.getItem("token");
    const decodedToken = this.jwtHelper.decodeToken(token || '{}');
    const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    return role === "Administrator";

  }

  // public addRegisterUser(userForRegistrationDto: UserForRegistrationDto) {
  //   return this.http.post(this.baseUrl + 'Accounts/Registration', userForRegistrationDto);
  // }

  // public updateRegisterUser(id: number, userForRegistrationDto: UserForRegistrationDto) {
  //   return this.http.put(this.baseUrl + 'Accounts/Registration/' + id, userForRegistrationDto);
  // }

}
