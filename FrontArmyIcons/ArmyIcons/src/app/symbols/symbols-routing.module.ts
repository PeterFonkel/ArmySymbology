import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SymbolFormComponent } from './symbol-form/symbol-form.component';
import { SymbolComponent } from './symbols/symbol/symbol.component';
import { TypesComponent } from './types/types.component';


const routes: Routes = [
  {
    path: ``,
    children: [
      {
        path: `symbols`,
        component: SymbolComponent,
      },
      {
        path: `new`,
        component: SymbolFormComponent,
      },
      {
        path: `types`,
        component: TypesComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SymbolsRoutingModule { }
