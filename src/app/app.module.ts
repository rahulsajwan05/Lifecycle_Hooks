import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnChangesComponent } from './Shared/child-on-changes/on-changes.component';
import { ParentOnChangeComponent } from './parent-on-change/parent-on-change.component';
import { PercentagepipePipe } from './percentagepipe.pipe';
import { PipeComponent } from './pipe/pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    OnChangesComponent,
    ParentOnChangeComponent,
    PercentagepipePipe,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
