import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../person.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  personInfo;
  constructor(private personService:PersonService) { }

  ngOnInit() {
    this.personService.exchange.subscribe((person)=>{
        this.personInfo = person
    })
  }

}
