import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContinentComponent } from '../continent/continent.component';
import { ZoneComponent } from '../zone/zone.component';
import { MapComponent } from '../map/map.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'continent/:continentName', component: ContinentComponent},
    { path: 'zones/:zoneName', component: ZoneComponent },
    { path: 'maps/:zoneName/:mapName', component: MapComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
    
];

