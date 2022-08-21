import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SymbolsRoutingModule } from './symbols-routing.module';
import { SymbolsComponent } from './symbols/symbols.component';
import { SymbolComponent } from './symbols/symbol/symbol.component';
import { FormsModule } from '@angular/forms';
import { SymbolFormComponent } from './symbol-form/symbol-form.component';
import { TypesComponent } from './types/types.component';


@NgModule({
  declarations: [SymbolsComponent, SymbolComponent, SymbolFormComponent, TypesComponent],
  imports: [
    CommonModule,
    SymbolsRoutingModule,
    FormsModule
  ],
  exports: [SymbolsComponent, SymbolComponent, SymbolFormComponent]
})
export class SymbolsModule { }
