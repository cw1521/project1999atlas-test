import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContinentComponent } from '../continent/continent.component';
import { ZoneComponent } from '../zone/zone.component';
import { MapComponent } from '../map/map.component';


// export const routes: Routes = [
//     {
//         path: 'home',
//         loadChildren: () =>  import('../home/home.component').then(mod => mod.HomeComponent)
//     },
//     { 
//         path: 'continent/:continentName',
//         loadChildren: () => import('../continent/continent.component').then(mod => mod.ContinentComponent)
//     },
//     { 
//         path: 'zones/:zoneName',
//         loadChildren: () => import('../zone/zone.component').then(mod => mod.ZoneComponent)},
//     {
//         path: 'maps/:zoneName/:mapId',
//         loadChildren: () => import('../map/map.component').then(mod => mod.MapComponent)
//     }
    
// ];


export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    { 
        path: 'continent/:continentName', component: ContinentComponent
    },
    { 
        path: 'zones/:zoneName', component: ZoneComponent
    },
    {
        path: 'maps/:zoneName/:mapId', component: MapComponent
    },
    // {
    //     //path: '', redirectTo: '', pathMatch: 'full'
    // }
    
];
