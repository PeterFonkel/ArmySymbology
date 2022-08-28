import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SymbolsModule } from './symbols/symbols.module';
import { HttpClientModule } from "@angular/common/http";
import { ComunesModule } from './comunes/comunes.module';
import { CoreModule } from './core/core.module';
import { fichaInterceptor } from './seguridad/interceptors/ficha.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SymbolsModule,
    ComunesModule,
    CoreModule
  ],
  providers: [fichaInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
