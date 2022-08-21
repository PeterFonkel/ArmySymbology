import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunesRoutingModule } from './comunes-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComunesRoutingModule
  ]
})
export class ComunesModule { }
