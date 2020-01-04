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


      this.zoneService.getZoneByName(params.get("zoneName"))
      .subscribe(zone => {
        //console.log(map);
        this.zone = zone["data"];
        //console.log(this.zone);
        this.map = this.zone.maps.filter(map => map.name.toLowerCase() == params.get("mapName").toLowerCase())[0];
        this.map.continent = this.map.continent[0].toUpperCase() + this.map.continent.slice(1);
        let zoneTemp = this.map.zone.split(' ');
        zoneTemp.forEach(elem => elem = elem[0].toUpperCase() + elem.slice(1));
        this.map.zone = zoneTemp.join(' ');
      });

      // this.mapService.getMapByName(params.get('zoneName'), params.get('mapName'))
      // .subscribe(map => {
      //   this.map = map['data'];
      //   this.map.continent = this.map.continent[0].toUpperCase() + this.map.continent.slice(1);
      //   let zoneTemp = this.map.zone.split(' ');
      //   zoneTemp.forEach(elem => elem[0].toUpperCase());
      //   this.map.zone = zoneTemp.join(' ');
      // });

      this.window.scrollTo(0, 0);
    });
  }


  ngOnDestroy() {
    delete this.zoneService;
  }
}
