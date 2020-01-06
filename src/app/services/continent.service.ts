import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Continent } from '../shared/continent';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ContinentService {

  constructor(private http: HttpClient) { }



  getContinentByName(name: string) {
    return this.http.get<Continent[]>(`${environment.baseUrl}/p99atlasdb-api/continent/${name}`).toPromise();
  } 

  getContinents() {
    return this.http.get<Continent[]>(`${environment.baseUrl}/p99atlasdb-api/continent`).toPromise();
  }





}
