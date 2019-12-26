import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  
  comments: string[];

  constructor(@Inject(WINDOW) private window: Window, private route: ActivatedRoute,
    private mapService: MapService) { }

  ngOnInit() {
    this.map = null;
    this.route.paramMap.subscribe(params => {
      var temp;
      this.mapService.getMapByName(String(params.get('zoneName')).replace(' ', '-'), String(params.get('mapName')).replace(' ', '-'))
      .subscribe(map => {
        this.map = map["data"];
        this.map.continent = this.map.continent[0].toUpperCase() + this.map.continent.slice(1);
        this.map.zone = this.map.zone[0].toUpperCase() + this.map.zone.slice(1)
      });

      this.window.scrollTo(0, 0);
    });
  }


  ngOnDestroy() {
    delete this.mapService;
  }
}
