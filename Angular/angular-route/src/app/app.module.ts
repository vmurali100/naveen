import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { HomeComponent } from './components/home/home.component';
import { MyRoutingModule } from './routing.module';
import { FeaturesComponent } from './components/features/features.component';
import { EnterprisesComponent } from './components/enterprises/enterprises.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { SupportComponent } from './components/support/support.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    HomeComponent,
    FeaturesComponent,
    EnterprisesComponent,
    PricingComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    MyRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
