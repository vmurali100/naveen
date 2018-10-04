import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonComponent } from './person/person.component';
import { PersonService } from './person.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
