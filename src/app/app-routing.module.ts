import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversitiesListComponent } from './universities-list/universities-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'universities',
    pathMatch: 'full'
  },
  {
    path: 'universities',
    component: UniversitiesListComponent,
    title: 'Universities List',

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
