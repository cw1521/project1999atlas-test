import { Component, OnInit } from '@angular/core';
import { Continent } from '../shared/continent';
import { Zone } from '../shared/zone';
import { ContinentService } from '../services/continent.service';
import { ZoneService } from '../services/zone.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {
  continents: Continent[];
  zones: Zone[];


  constructor(private continentService: ContinentService,
    private zoneService: ZoneService) { }

  ngOnInit() {
    this.continentService.getContinents().subscribe((continents) => {
      this.continents = continents;
    });
    this.zoneService.getZones().subscribe((zones) => { this.zones = zones; });
    //this.processContinents();

  }


  // processContinents() {
  //   for(let continent of this.continents) {
  //     let cities = this.getCitiesByContinentName(continent.name);
  //     let indoorZones = this.getIndoorByContinentName(continent.name);
  //     let outdoorZones = this.getOutdoorByContinentName(continent.name);
  //     let planes = this.getPlanes();

  //     continent.setCities(cities);
  //     continent.setIndoorZones(indoorZones);
  //     continent.setOutdoorZones(outdoorZones);
  //     if (continent.name.toLowerCase() == 'planes') continent.setPlanes(planes);
  //   }
  // }


  // getCitiesByContinentName(continentName: string) {
  //   return this.zones.filter(zone => {
  //     zone.zone_type.toLowerCase() == 'city' && zone.continent.toLowerCase() == continentName.toLowerCase()
  //   });
  // }

  // getIndoorByContinentName(continentName: string) {
  //   return this.zones.filter( zone => {
  //     zone.zone_type.toLowerCase() == 'indoor' && zone.continent.toLowerCase() == continentName.toLowerCase()
  //   });
  // }

  // getOutdoorByContinentName(continentName: string) {
  //   return this.zones.filter( zone => {
  //     zone.zone_type.toLowerCase() == 'outdoor' && zone.continent.toLowerCase() == continentName.toLowerCase()
  //   });
  // }

  // getPlanes() {
  //   return this.zones.filter( zone => {
  //     zone.zone_type.toLowerCase() == 'planes'
  //   });
  // }

}
