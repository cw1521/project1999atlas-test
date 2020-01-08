import { Component, OnInit, OnDestroy } from '@angular/core';
import { Zone } from '../shared/zone';
import { ContinentService } from '../services/continent.service';
import { ZoneService } from '../services/zone.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit, OnDestroy {
  zones: Zone[];
  antonicZones: Zone[];
  veliousZones: Zone[];
  faydwerZones: Zone[];
  kunarkZones: Zone[];
  odusZones: Zone[];
  zoneSub: any;



  constructor(private continentService: ContinentService,
    private zoneService: ZoneService) { }

  ngOnInit() {

    this.zoneSub = this.zoneService.getZones()
    .subscribe(
      (zones) => { 
        this.zones = zones['data'];
        this.processContinents();
      }, (error) => {console.error(error);});

  }

  ngOnDestroy() {
    this.zoneSub.unsubscribe();
  }

  processContinents() {
    this.antonicZones = this.zones.filter(zone => zone.continent == 'antonica');
    this.faydwerZones = this.zones.filter(zone => zone.continent == 'faydwer');
    this.odusZones = this.zones.filter(zone => zone.continent == 'odus');
    this.kunarkZones = this.zones.filter(zone => zone.continent == 'kunark');
    this.veliousZones = this.zones.filter(zone => zone.continent == 'velious');
    
    this.antonicZones.sort(this.compareNames);
    this.faydwerZones.sort(this.compareNames);
    this.odusZones.sort(this.compareNames);
    this.kunarkZones.sort(this.compareNames);
    this.veliousZones.sort(this.compareNames);

  }


  compareNames(a: Zone, b: Zone) : number {
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
  }


}
