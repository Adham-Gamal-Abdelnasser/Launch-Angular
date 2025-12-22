import { Routes } from '@angular/router';
import { Hero } from './components/hero/hero';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: Hero, title: "LaunchA - Home"},
    {path: "about", title: "LaunchA - About"  , loadComponent: ()=> import('./components/about/about').then(C=>C.About)},
    {path: "contact",  title: "LaunchA - Contact" , loadComponent: ()=> import('./components/contact/contact').then(C=>C.Contact)},
    {path: "gallery",  title: "LaunchA - Gallery" , loadComponent: ()=> import('./components/gallery/gallery').then(C=>C.Gallery)},
];