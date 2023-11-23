import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListPersonasComponent } from './components/list-personas/list-personas.component';
import { AddEditPersonasComponent } from './components/add-edit-personas/add-edit-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPersonasComponent,
    AddEditPersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
