import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatIconModule } from '@angular/material/icon'
import { MatTabsModule } from '@angular/material/tabs'
import { MatBadgeModule } from '@angular/material/badge'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatTabsModule,
  MatBadgeModule,
  MatProgressSpinnerModule
]

@NgModule({
  declarations: [],
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }
