import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import { MainComponent } from './shell/main/main.component';
import { SymbolsComponent } from '../symbols/symbols/symbols.component';
import { SymbolsModule } from '../symbols/symbols.module';
import { ComunesModule } from '../comunes/comunes.module';


@NgModule({
  declarations: [ShellComponent, HeaderComponent, FooterComponent, MainComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SymbolsModule,
    ComunesModule
  ],
  exports: [
    ShellComponent, 
    HeaderComponent, 
    FooterComponent, 
    MainComponent
  ]
})
export class CoreModule { }
