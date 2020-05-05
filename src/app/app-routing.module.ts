import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrimecheckerComponent} from "./primechecker/primechecker.component";


const routes: Routes = [
  {path: '', component: PrimecheckerComponent},
  {path: 'prime-checker', component: PrimecheckerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
