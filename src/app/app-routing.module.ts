import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EnfantComponent} from "./enfant/enfant.component";
import {ParentComponent} from "./parent/parent.component";

const routes: Routes = [
  {path:"enfant",component:EnfantComponent},
  {path:"parent",component:ParentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
