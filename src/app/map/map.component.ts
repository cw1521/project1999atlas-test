import { Component, OnInit , Inject, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZoneService } from '../services/zone.service';
import { MapService } from '../services/map.service';
import { Map } from '../shared/map';
import { Zone } from '../shared/zone';

import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  map: Map;
  zone: Zone;
  comments: string[];
  routeSub: any;
  mapSub: any;



  constructor(@Inject(WINDOW) private window: any,
    private route: ActivatedRoute,
    private mapService: MapService) { }


    
  ngOnInit() {
    this.map = null;
    // this.window.scroll(0, 0);
    this.routeSub = this.route.paramMap.subscribe(params => {

      this.mapSub = this.mapService.getMapById(params.get('zoneName'), params.get('mapId'))
      .subscribe(
        (map) => {

          //console.log(map);

          this.map = map['data'];
          this.map.continent = this.map.continent[0].toUpperCase() + this.map.continent.slice(1);
          let zoneTemp = params.get('zoneName').split(' ');
          zoneTemp.forEach(elem => elem[0].toUpperCase() + elem.slice(1));
          this.map.zone = zoneTemp.join(' ');
        },
        (error) => {console.error(error)});



      },
      (error) => {console.error(error)});




  }


  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.mapSub.unsubscribe();
  }
}
