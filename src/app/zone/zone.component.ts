import { Component, OnInit , Inject} from '@angular/core';

import { WINDOW } from '@ng-toolkit/universal';
import { ActivatedRoute } from '@angular/router';

import { Zone } from '../shared/zone';
import { ZoneService } from '../services/zone.service';
import { Map } from '../shared/map';




@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})

export class ZoneComponent implements OnInit {
  zone: Zone;
  maps: Map[];
  keys: String[];
  routeSub: any;
  zoneSub: any;


  constructor(@Inject(WINDOW) private window: any,
    private zoneService: ZoneService,
    private route: ActivatedRoute) { }



  ngOnInit() {
    
    //this.window.scroll(0, 0);
    this.routeSub = this.route.paramMap.subscribe(
      (params) => {
        this.processZone(params);
      }, (error) => {console.error(error);});
  }


  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.zoneSub.unsubscribe();
  }


  processZone(params) : void {
    this.zoneSub = this.zoneService.getZoneByName(params.get('zoneName'))
    .subscribe(
      (zone) => {
        this.zone = zone['data'];
        this.keys = Object.keys(this.zone);
        this.maps = this.zone.maps;
        this.zone.continent = this.zone.continent[0].toUpperCase()  + this.zone.continent.slice(1);
      }, (error) => {console.error(error);});
    
    


  }
  
  hasProperty(prop) : boolean {
    if (this.keys.includes(prop) && this.zone[prop] !== null && this.zone[prop] !== [] && this.zone[prop] !== undefined) return true;
    else return false;
  }


  
}
