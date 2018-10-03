import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../person.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  data = info;
  constructor(private personService:PersonService) { }

  ngOnInit() {
  }
  editPerson(person){
    this.personService.recandsend(person)
  }
}
const info=[
  {
      "fname": "Otilia",
      "lname": "Judy",
      "tel": "(291)906-4258",
      "address": "6038 Aenean St",
      "city": "Flagstaff",
      "state": "NH",
      "zip": 95828
  },
  {
      "fname": "Louis",
      "lname": "Gray",
      "tel": "(143)699-5449",
      "address": "9062 Lorem St",
      "city": "Camas",
      "state": "DE",
      "zip": 61788
  },
  {
      "fname": "Kendra",
      "lname": "Blackwell",
      "tel": "(246)406-9019",
      "address": "6668 Lectus Dr",
      "city": "Virginia Beach",
      "state": "VA",
      "zip": 48583
  },
  {
      "fname": "Ishtiaq",
      "lname": "Jordan",
      "tel": "(244)285-8509",
      "address": "2297 Nec St",
      "city": "Riverview",
      "state": "NE",
      "zip": 70536
  },
  {
      "fname": "Grace",
      "lname": "Mccracken",
      "tel": "(276)378-3363",
      "address": "7866 Dolor Ave",
      "city": "Hartford",
      "state": "CO",
      "zip": 15530
  }
]