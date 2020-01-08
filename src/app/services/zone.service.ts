import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Zone } from '../shared/zone';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ZoneService {

  constructor(private http: HttpClient) {}



  getZoneByName(name: string) {
    let url = `${environment.baseUrl}/p99atlasdb-api/zones/${name}`;
    return this.http.get<Zone>(url);
  }

  getZones() {
    let url = `${environment.baseUrl}/p99atlasdb-api/zones`;
    return this.http.get(url, {responseType: 'json'});
  }

  getZonesByContinentName(continentName: String) {
    let url = `${environment.baseUrl}/p99atlasdb-api/zones/continent/${continentName}`
    return this.http.get<Zone[]>(url);
  }

}


