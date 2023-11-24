// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Local Imports
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material';

// Components
import { AppComponent } from './app.component';
import { UniversitiesListComponent } from './universities-list/universities-list.component';

// Services
import { DataService } from './services/universities.service';

// Pipes
import { SortPipe } from './pipes/sort.pipe';

// Stand Alone Component
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversitiesListComponent,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PaginationComponent,
    MaterialModule,
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
