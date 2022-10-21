import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Masterparameter } from '../_models/Masterparameter';

@Injectable({
  providedIn: 'root'
})
export class MasterparameterService {

  private baseUrl: string = environment.baseUrl + 'api/';

  constructor(private http: HttpClient) { }

  public addMasterparameter(masterparameter: Masterparameter) {
    return this.http.post(this.baseUrl + 'Masterparameter', masterparameter);
  }

  public updateMasterparameter(id: number, masterparameter: Masterparameter) {
    return this.http.put(this.baseUrl + 'Masterparameter/' + id, masterparameter);
  }

  public getMasterparameters(): Observable<Masterparameter[]> {
    return this.http.get<Masterparameter[]>(this.baseUrl + 'Masterparameter');
  }

  public deleteMasterparameter(id: number) {
    return this.http.delete(this.baseUrl + 'Masterparameter/' + id);
  }

  public getMasterparameterById(id: number):Observable<Masterparameter>{
    return this.http.get<Masterparameter>(this.baseUrl+'Masterparameter/'+id);
  }

  public search(name:string):Observable<Masterparameter[]>{
    return this.http.get<Masterparameter[]>('${this.baseUrl}Masterparameter/search/${name}');
  }

}
