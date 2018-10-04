import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url="http://www.filltext.com/?rows=5&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
  constructor(private _http:HttpClient) { }

  getPersons(){
    return this._http.get(this.url)
  }
}
