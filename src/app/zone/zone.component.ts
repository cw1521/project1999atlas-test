import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Zone } from '../shared/zone';
import { ZoneService } from '../services/zone.service';
import { Map } from '../shared/map';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})

export class ZoneComponent implements OnInit {
  zone: Zone;
  maps: Map[];
  keys: String[]

  constructor(@Inject(WINDOW) private window: any, private zoneService: ZoneService,
      private mapService: MapService,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.processZone(params);
      this.window.scrollTo(0, 0);
    });
  }

  ngOnDestroy() {
    delete this.zoneService;
    delete this.route;
  }

  processZone(params) : void {
    this.zoneService.getZoneByName(params.get('zoneName'))
    .subscribe(zone => {
      this.zone = zone["data"];
      this.keys = Object.keys(this.zone);
      //console.log(this.keys);
      this.maps = this.zone.maps;
      this.zone.continent = this.zone.continent[0].toUpperCase()  + this.zone.continent.slice(1);
      // console.log(this.zone.monster_level);
      // console.log(this.zone.monster_type);
      // console.log(this.hasProperty('monster_level'));
      // console.log(this.hasProperty('monster_type'));
      // console.log(this.keys);
      console.log(`walkthrough: ${this.zone.walkthrough}`);
      console.log(`local color: ${this.zone.local_color}`);
    }); 
  }
  
  hasProperty(prop) : boolean {
    //console.log(this.zone[prop]);
    if (this.keys.includes(prop) && this.zone[prop] !== null && this.zone[prop] !== [] && this.zone[prop] !== undefined) return true;
    else return false;
  }


  
}
