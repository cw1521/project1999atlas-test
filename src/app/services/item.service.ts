import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http : HttpClient) { }

  getItemByName(itemName) {
    let url = `${environment.baseUrl}/api/items/${itemName}`;
    return this.http.get(url);
  }

}
