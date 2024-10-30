import { Routes } from '@angular/router';
import { HomeComponent } from './screen/home/home.component';
import { LoginComponent } from './screen/login/login.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent}
];
