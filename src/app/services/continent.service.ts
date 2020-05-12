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
    let url = `${environment.baseUrl}/api/continent/${name}`;
    return this.http.get<Continent>(url);
  } 

  getContinents(){
    let url = `${environment.baseUrl}/api/continent`;
    return this.http.get<Continent[]>(url);
  }





}
