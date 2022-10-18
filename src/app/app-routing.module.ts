import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Seccion2Component } from './seccion2/seccion2.component';
import { FormsComponent } from './seccion3/forms/forms.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'seccion2', component:Seccion2Component},
  {path:'formulario',component:FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
