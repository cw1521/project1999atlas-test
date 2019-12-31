import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Zone } from '../shared/zone';
import { ZoneService } from '../services/zone.service';
import { MAT_MENU_SCROLL_STRATEGY } from '@angular/material';
import { Overlay, BlockScrollStrategy } from '@angular/cdk/overlay';





export function scrollFactory(overlay: Overlay): () => BlockScrollStrategy {
  return () => overlay.scrollStrategies.block();
}



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [
    { provide: MAT_MENU_SCROLL_STRATEGY, useFactory: scrollFactory, deps: [Overlay] }
  ]

})



export class HeaderComponent implements OnInit {
  zoneArray: Zone[];
  antonicaZones: Zone[];
  faydwerZones: Zone[];
  odusZones: Zone[];
  kunarkZones: Zone[];
  veliousZones: Zone[];
  planesZones: Zone[];

  
  constructor(private zoneService: ZoneService) {
  }



  ngOnInit() {
    this.zoneService.getZones()
    .then(zones  => {
      this.zoneArray = zones["data"];

      //console.log(this.zoneArray);
      
      this.antonicaZones = this.zoneArray.filter(zone => zone.continent == "antonica");
      this.faydwerZones = this.zoneArray.filter(zone => zone.continent == "faydwer");
      this.odusZones = this.zoneArray.filter(zone => zone.continent == "odus");
      this.kunarkZones = this.zoneArray.filter(zone => zone.continent == "kunark");
      this.veliousZones = this.zoneArray.filter(zone => zone.continent == "velious");
      this.planesZones = this.zoneArray.filter(zone => zone.continent == "planes");

      this.antonicaZones.sort(this.compareNames);
      this.faydwerZones.sort(this.compareNames);
      this.kunarkZones.sort(this.compareNames);      
      this.veliousZones.sort(this.compareNames);
      this.odusZones.sort(this.compareNames);
      this.planesZones.sort(this.compareNames);

    });

      


 
  }


  ngOnDestroy() {
    delete this.zoneService;
  }



  compareNames(a: Zone, b: Zone) : number {
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
  }

}


