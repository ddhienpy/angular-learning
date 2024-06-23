import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: 'add-contact', component: ContactComponent },
    { path: '**', component: NotFoundComponent },
];
