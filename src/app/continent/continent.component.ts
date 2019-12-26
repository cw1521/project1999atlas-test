import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Continent } from '../shared/continent';
import { ContinentService } from '../services/continent.service';
import { Zone } from '../shared/zone';
import { ZoneService } from '../services/zone.service';


@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.scss']
})
export class ContinentComponent implements OnInit {
  continentName: string;
  continent: Continent;
  indoorZones: Zone[];
  outdoorZones: Zone[];
  planes: Zone[];
  cities: Zone[];
  zones: Zone[];
  img_link: string;

  constructor(@Inject(WINDOW) private window: any,  private continentService: ContinentService,
    private zoneService: ZoneService,
    private route: ActivatedRoute) { }

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.window.scrollTo(0, 0);
    this.continentName = params.get('continentName')
    this.continentService.getContinentByName(this.continentName.toLowerCase())
    .subscribe((continent) => { 
      this.continent = continent["data"];
      
      this.img_link = this.continent.img_link;
      // console.log(this.img_link)
     });
    this.zoneService.getZones().subscribe(zones => {
      this.zones = zones["data"].filter(zone => zone.continent.toLowerCase() == this.continentName);
      
    // this.zones = this.continentService.getZonesByContinent(this.continentName);
    if (this.continentName.toLowerCase() == 'planes') {
      this.planes = this.zones.sort(function  compare(a: Zone, b: Zone) : number {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
      });
    }
    else {
      this.cities = this.getCities();
      this.indoorZones = this.getIndoorZones();
      this.outdoorZones = this.getOutdoorZones();
      this.cities.sort(function  compare(a: Zone, b: Zone) : number {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
      });
  
      this.indoorZones.sort(function compare(a: Zone, b: Zone) : number {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
      });
  
      this.outdoorZones.sort(function compare(a: Zone, b: Zone) : number {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
      });
    }
  });


    });
  }

  ngOnDestroy() {
    delete this.zoneService;
    delete this.continentService;
  }


  getIndoorZones() : Zone[] {
    return this.zones.filter(zone =>  zone.zone_type.toLowerCase() == 'indoor');
  }

  getOutdoorZones() : Zone[] {
    return this.zones.filter(zone => zone.zone_type.toLowerCase() == 'outdoor');
  }

  getCities() : Zone[] {
    return this.zones.filter(zone => zone.zone_type.toLowerCase() == 'city');
  }

}
