import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegistrationResponseDto } from '../_interfaces/response/registrationResponseDto';
import { UserForRegistrationDto } from '../_interfaces/user/userForRegistrationDto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl: string = environment.baseUrl + 'api/';

  constructor(private http: HttpClient) { }

  public registerUser = (route: string, body: UserForRegistrationDto) => {
    return this.http.post<RegistrationResponseDto>(this.baseUrl + 'Accounts/Registration', body)
  }

  // public addRegisterUser(userForRegistrationDto: UserForRegistrationDto) {
  //   return this.http.post(this.baseUrl + 'Accounts/Registration', userForRegistrationDto);
  // }

  // public updateRegisterUser(id: number, userForRegistrationDto: UserForRegistrationDto) {
  //   return this.http.put(this.baseUrl + 'Accounts/Registration/' + id, userForRegistrationDto);
  // }

}
