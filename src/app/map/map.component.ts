import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZoneService } from '../services/zone.service';
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
    private zoneService: ZoneService) { }

  ngOnInit() {
    this.map = null;
    this.route.paramMap.subscribe(params => {
      var temp;
      //console.log("here");
      //console.log(params);
      this.zoneService.getZoneByName(params.get("zoneName"))
      .then(zone => {
        //console.log(map);
        this.zone = zone["data"];
        //console.log(this.zone);
        this.map = this.zone.maps.filter(map => map.name.toLowerCase() == params.get("mapName").toLowerCase())[0];
        this.map.continent = this.map.continent[0].toUpperCase() + this.map.continent.slice(1);
        this.map.zone = this.map.zone[0].toUpperCase() + this.map.zone.slice(1)
      });

      this.window.scrollTo(0, 0);
    });
  }


  ngOnDestroy() {
    delete this.zoneService;
  }
}
