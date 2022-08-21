import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../comunes/home/home.component';
import { SymbolFormComponent } from '../symbols/symbol-form/symbol-form.component';
import { SymbolsComponent } from '../symbols/symbols/symbols.component';


const routes: Routes = [
  {
    path: ``,
    children: [
      {
        path: ``,
        component: HomeComponent,
      },
      {
        path: `symbols`,
        component: SymbolsComponent,
      },
      {
        path: `new`,
        component: SymbolFormComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
