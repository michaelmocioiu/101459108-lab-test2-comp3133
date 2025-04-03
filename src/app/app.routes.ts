import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/characterlist/characterlist.component';
import { CharacterFilterComponent } from './components/characterfilter/characterfilter.component';
import { CharacterDetailsComponent } from './components/characterdetails/characterdetails.component';

export const routes: Routes = [
  { path: '', component: CharacterFilterComponent},
  { path: 'all', component: CharacterListComponent },
  { path: 'character/:id', component: CharacterDetailsComponent, data: { prerender: false } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];