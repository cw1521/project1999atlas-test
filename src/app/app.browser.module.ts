import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
       imports: [
              BrowserModule.withServerTransition({ appId: 'app-root' }),
              AppModule
       ],
       bootstrap: [AppComponent]
})
export class AppBrowserModule { }
