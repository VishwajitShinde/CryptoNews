
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  { MatExpansionModule } from '@angular/material';
import { DemoMaterialModule } from '../material.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainnewsComponent } from './mainnews/mainnews.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    MainnewsComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    WelcomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DemoMaterialModule,
    HttpClientModule,
    AppRoutingModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
