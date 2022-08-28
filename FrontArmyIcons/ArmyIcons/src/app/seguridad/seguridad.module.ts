import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { SeguridadRoutingModule } from "./seguridad-routing.module";
import { LoginComponent } from "./login/login.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { UsuarioComponent } from "./usuarios/usuario/usuario.component";

@NgModule({
  declarations: [
    LoginComponent,
    UsuariosComponent,
    UsuarioComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    HttpClientModule,
    FormsModule
  ],
})
export class SeguridadModule {}
