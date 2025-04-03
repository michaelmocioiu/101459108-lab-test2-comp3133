import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/characterlist/characterlist.component';
import { CharacterFilterComponent } from './components/characterfilter/characterfilter.component';
import { CharacterDetailsComponent } from './components/characterdetails/characterdetails.component';

export const routes: Routes = [
  { path: '', component: CharacterListComponent },
  { path: 'house', component: CharacterFilterComponent},
  { path: 'character/:id', component: CharacterDetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];