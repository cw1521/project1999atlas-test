import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Zone } from '../shared/zone';

import {map, toArray, flatMap} from "rxjs/operators";


import db from '../../assets/db/zones_db.json';


@Injectable({
  providedIn: 'root'
})

export class ZoneService {

  constructor(private http: HttpClient) {}



  getZoneByName(name: string)  {
    return this.http.get<Zone>(`p99atlasdb-api/zones/${name}`);
  }


  getZones() {
    return this.http.get<Zone[]>("p99atlasdb-api/zones").toPromise();
  }

  getZonesByContinentName(continentName: String) {
    return this.http.get<Zone[]>(`p99atlasdb-api/zones/continent/${continentName}`).toPromise();
  }

}
