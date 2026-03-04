import { Routes } from '@angular/router';
import { About } from './about/about';

export const routes: Routes = [
  { 
	path: 'admin', 
	loadChildren:() => import('./admin/admin-module').then(m => m.AdminModule)
	},
  { path: 'about', component: About },
];
