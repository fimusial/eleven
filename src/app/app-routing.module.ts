import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: '**', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
