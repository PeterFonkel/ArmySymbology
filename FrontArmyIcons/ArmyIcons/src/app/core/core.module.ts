import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import { MainComponent } from './shell/main/main.component';
import { SymbolsModule } from '../symbols/symbols.module';
import { ComunesModule } from '../comunes/comunes.module';
import { SeguridadModule } from '../seguridad/seguridad.module';


@NgModule({
  declarations: [ShellComponent, HeaderComponent, FooterComponent, MainComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SymbolsModule,
    ComunesModule,
    SeguridadModule
  ],
  exports: [
    ShellComponent, 
    HeaderComponent, 
    FooterComponent, 
    MainComponent
  ]
})
export class CoreModule { }
