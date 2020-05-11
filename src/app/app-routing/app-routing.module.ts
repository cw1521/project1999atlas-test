import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { routes } from './routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
