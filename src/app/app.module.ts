import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContinentComponent } from './continent/continent.component';
import { HomeComponent } from './home/home.component';
import { ZoneComponent } from './zone/zone.component';
import { MapComponent } from './map/map.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContinentComponent,
    HomeComponent,
    ZoneComponent,
    MapComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
