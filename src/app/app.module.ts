import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManaComponent } from './mana/mana.component';
import { HeaderComponent } from './header/header.component';
import { ManaDetailComponent } from './mana-detail/mana-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ManaComponent,
    HeaderComponent,
    ManaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
