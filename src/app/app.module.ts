import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimecheckerComponent } from './primechecker/primechecker.component';
import { HeaderComponent } from './header/header.component';
import {PrimecheckerService} from "./primechecker.service";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PrimecheckerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    PrimecheckerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
