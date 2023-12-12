import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnChangesComponent } from './Shared/child-on-changes/on-changes.component';
import { ParentOnChangeComponent } from './parent-on-change/parent-on-change.component';
import { PercentagepipePipe } from './percentagepipe.pipe';
import { PipeComponent } from './pipe/pipe/pipe.component';
import { ObserComponent } from './obser/obser.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    OnChangesComponent,
    ParentOnChangeComponent,
    PercentagepipePipe,
    PipeComponent,
    ObserComponent,
    NewTaskComponent,
    ShowTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
