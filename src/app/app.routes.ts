import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ErrorComponent } from './components/shared/error/error.component';

export const ROUTES:Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: '404', component: ErrorComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},  
    {path: '**', pathMatch: 'full', redirectTo: '404'}
];