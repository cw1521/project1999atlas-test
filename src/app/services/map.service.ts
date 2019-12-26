import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Map } from '../shared/map';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }


  getMapByName(zoneName: string, mapName: string) {
    return this.http.get(`p99atlasdb-api/zones/${zoneName}/${mapName}`);
  }

}
