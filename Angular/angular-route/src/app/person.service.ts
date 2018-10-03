import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  exchange = new Subject<any>();
  constructor() { }
  recandsend(person){
    this.exchange.next(person)
  }
}
