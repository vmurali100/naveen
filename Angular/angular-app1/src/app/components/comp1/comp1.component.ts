import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  message = "Welcome to Angular - From Parent";
  person = {
    "fname": "Melissa",
    "lname": "Lenz",
    "tel": "(605)623-3593",
    "address": "6921 Sit Dr",
    "city": "Virginia Beach",
    "state": "MT",
    "zip": 23747
}
  constructor() { }

  ngOnInit() {
  }

}
