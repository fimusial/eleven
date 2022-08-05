import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TranslatePipe } from './services/translate.pipe';
import { CatalogComponent } from './catalog/catalog.component';
import { ProfileComponent } from './profile/profile.component';
import { FilteringFormComponent } from './catalog/filtering-form/filtering-form.component';
import { EnumToSelectPipe } from './services/enum-to-select.pipe';
import { ElevenFilterPipe } from './services/eleven-filter.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainPageComponent,
    TranslatePipe,
    EnumToSelectPipe,
    CatalogComponent,
    ProfileComponent,
    FilteringFormComponent,
    ElevenFilterPipe,
    ContactFormComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    GalleryModule,
    NgxSliderModule
  ],
  providers: [ElevenFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
