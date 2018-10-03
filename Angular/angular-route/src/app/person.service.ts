import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  exchange = new Subject<any>();
  personInfo ;
  constructor() { }
  recandsend(person){
    this.exchange.next(person)
  }

  setPerson(person){
    this.personInfo = person
  }
  getPerson(){
    return this.personInfo
  }
}
