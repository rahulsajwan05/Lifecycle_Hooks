import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentOnChangeComponent } from './parent-on-change/parent-on-change.component';
import { PipeComponent } from './pipe/pipe/pipe.component';

const routes: Routes = [
  {path:'',component:PipeComponent}
  // {path:'',component:ParentOnChangeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
