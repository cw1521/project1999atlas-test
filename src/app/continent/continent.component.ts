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
  continentName: String;
  continent: Continent;
  indoorZones: Zone[];
  outdoorZones: Zone[];
  planes: Zone[];
  cities: Zone[];
  zones: Zone[];
  img_link: String;

  constructor(@Inject(WINDOW) private window: any,
    private continentService: ContinentService,
    private zoneService: ZoneService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.window.scrollTo(0, 0);     
      this.continentName = params.get('continentName');
      this.continentService
      .getContinentByName(this.continentName.toLowerCase())
      .then(continent => {
        this.continent = continent["data"];
        this.img_link = this.continent.img_link;
      });

      this.zoneService.getZonesByContinentName(this.continentName)
      .then(zones => {
        this.zones = zones['data'];
        console.log(this.zones);
        this.parseZones(this.continentName);
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

  compareNames(a: Zone, b: Zone) : number {
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
  }


  parseZones(continentName) : void {
    //console.log(`parseZones: ${this.continentName}`);
    //this.zones = this.continentService.getZonesByContinent(this.continentName);

    if (continentName.toLowerCase() == 'planes') {
      this.planes = this.zones.sort(this.compareNames);
    }
    else {
      this.cities = this.getCities();
      this.indoorZones = this.getIndoorZones();
      this.outdoorZones = this.getOutdoorZones();
      this.cities.sort(this.compareNames);
  
      this.indoorZones.sort(this.compareNames);
  
      this.outdoorZones.sort(this.compareNames);
    }
  
  }



}


