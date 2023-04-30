import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepuestosComponent } from './Components/repuestos/repuestos.component';
import { VehiculosComponent } from './Components/vehiculos/vehiculos.component';

const routes: Routes = [
    {
      path: 'Vehiculos' , component:VehiculosComponent
    },
    {
      path: 'Repuestos' , component:RepuestosComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
