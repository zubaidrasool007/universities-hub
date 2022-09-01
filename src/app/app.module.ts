import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversitiesListComponent } from './universities-list/universities-list.component';
import { DataService } from './universities.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UniversitiesListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
