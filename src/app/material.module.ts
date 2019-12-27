import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatExpansionModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatExpansionModule,
        MatCardModule, 
        MatGridListModule,
        MatListModule,
        MatTabsModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatExpansionModule,
        MatCardModule,
        MatGridListModule,
        MatListModule,
        MatTabsModule
    ]
})
export class MaterialModule {}