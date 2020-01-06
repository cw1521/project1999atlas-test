import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZoneService } from '../services/zone.service';
import { MapService } from '../services/map.service';
import { Map } from '../shared/map';
import { Zone } from '../shared/zone';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: Map;
  zone: Zone;
  
  comments: string[];

  constructor(@Inject(WINDOW) private window: any, private route: ActivatedRoute,
    private zoneService: ZoneService, private mapService: MapService) { }

  ngOnInit() {
    this.map = null;
    this.route.paramMap.subscribe(params => {
      //console.log("here");
      //console.log(params);


      // this.zoneService.getZoneByName(params.get("zoneName"))
      // .subscribe(zone => {
      //   //console.log(`map id: ${params.get("mapId")}`);
      //   this.zone = zone["data"];
      //   //console.log(`Zone: ${this.zone}`);
      //   this.map = this.zone.maps.filter(map => map.id == params.get("mapId"))[0];
      //   //console.log(`Map: ${this.map}`);
      //   this.map.continent = this.zone.continent[0].toUpperCase() + this.zone.continent.slice(1);
      //   let zoneTemp = this.zone.name.split(' ');
      //   zoneTemp.forEach(elem => elem = elem[0].toUpperCase() + elem.slice(1));
      //   this.map.zone = zoneTemp.join(' ');
      // });

      this.mapService.getMapById(params.get('zoneName'), params.get('mapId'))
      .subscribe(map => {
        this.map = map['data'];
        this.map.continent = this.map.continent[0].toUpperCase() + this.map.continent.slice(1);
        let zoneTemp = params.get('zoneName').split(' ');
        zoneTemp.forEach(elem => elem[0].toUpperCase() + elem.slice(1));
        this.map.zone = zoneTemp.join(' ');
      });

      this.window.scrollTo(0, 0);
    });
  }


  ngOnDestroy() {
    delete this.zoneService;
    delete this.mapService;
  }
}
