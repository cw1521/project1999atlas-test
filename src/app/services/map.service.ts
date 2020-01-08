import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Map } from '../shared/map';

import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  
  getMapById(zoneName, mapId){
    let url = `${environment.baseUrl}/p99atlasdb-api/maps/${zoneName}/${mapId}`;
    return this.http.get(url, {responseType: 'json'});
  }


}
