import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SymbolsRoutingModule } from './symbols-routing.module';
import { SymbolsComponent } from './symbols/symbols.component';
import { SymbolComponent } from './symbols/symbol/symbol.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SymbolsComponent, SymbolComponent],
  imports: [
    CommonModule,
    SymbolsRoutingModule,
    FormsModule
  ],
  exports: [SymbolsComponent, SymbolComponent]
})
export class SymbolsModule { }
