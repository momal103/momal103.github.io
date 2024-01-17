import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ProgrammeComponent } from './programme/programme.component';
import { SuiviComponent } from './suivi/suivi.component';
import { RisqueComponent } from './risque/risque.component';
import { FooterComponent } from './footer/footer.component';
import { RdvDemandeComponent } from './rdv-demande/rdv-demande.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProgrammeComponent,
    SuiviComponent,
    RisqueComponent,
    FooterComponent,
    RdvDemandeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'programme', component: ProgrammeComponent },
      { path: 'suivi', component: SuiviComponent },
      { path: 'risque', component: RisqueComponent }
    ],
      { scrollPositionRestoration: 'enabled' }),
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
