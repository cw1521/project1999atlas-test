import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { WINDOW } from '@ng-toolkit/universal';

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
export class ContinentComponent implements OnInit, OnDestroy {
  continentName: String;
  continent: Continent;
  indoorZones: Zone[];
  outdoorZones: Zone[];
  planes: Zone[];
  cities: Zone[];
  zones: Zone[];
  img_link: String;
  routeSub: any;
  continentSub: any;
  zoneSub: any;



  constructor(@Inject(WINDOW) private window: any,
    private continentService: ContinentService,
    private zoneService: ZoneService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.window.scroll(0, 0);
    
    this.routeSub = this.route.paramMap.subscribe(
      (params) => {

        this.continentName = params.get('continentName');

        this.continentSub = this.continentService.getContinentByName(this.continentName.toLowerCase())
        .subscribe(
          (continent) => {
            this.continent = continent['data'];
            this.img_link = this.continent.img_link;       
          }, (error) => {console.error(error)});

        this.zoneSub = this.zoneService.getZonesByContinentName(this.continentName)
        .subscribe(
          (zones) => {
            this.zones = zones['data'];
            //console.log(this.zones);
            this.parseZones(this.continentName);
          }, (error) => {console.error(error);});



        }, (error) => {console.error(error);}); 
    
    
  
    
  }

  


  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.zoneSub.unsubscribe();
    this.continentSub.unsubscribe();
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


