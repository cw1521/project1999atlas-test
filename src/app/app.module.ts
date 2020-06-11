import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { NgtUniversalModule, WINDOW } from '@ng-toolkit/universal';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContinentComponent } from './continent/continent.component';
import { HomeComponent } from './home/home.component';
import { ZoneComponent } from './zone/zone.component';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContinentComponent,
    HomeComponent,
    ZoneComponent,
    MapComponent,
    ItemComponent
  ],
  
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),    
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    NgtUniversalModule,
    BrowserAnimationsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
