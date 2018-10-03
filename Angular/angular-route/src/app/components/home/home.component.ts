import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../../person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = info;
  constructor(private router:Router,private ps : PersonService) { }

  ngOnInit() {
  }
  editPerson(person){
    console.log(person)
    this.ps.setPerson(person)
    this.router.navigate(['enterprises'])
  }
}
const info = [
  {
      "fname": "Althea",
      "lname": "Mckee",
      "tel": "(537)889-0675",
      "address": "3648 Sed St",
      "city": "Golden",
      "state": "UT",
      "zip": 10164
  },
  {
      "fname": "Eden",
      "lname": "Franklin",
      "tel": "(553)153-1404",
      "address": "5249 Magna Ln",
      "city": "Mooresville",
      "state": "WI",
      "zip": 55667
  },
  {
      "fname": "Tonja",
      "lname": "Gram",
      "tel": "(516)996-3868",
      "address": "7485 Vitae Ct",
      "city": "Allentown",
      "state": "ID",
      "zip": 36324
  },
  {
      "fname": "Tilena",
      "lname": "Hippert",
      "tel": "(126)785-2149",
      "address": "1076 Morbi Rd",
      "city": "Rural",
      "state": "WY",
      "zip": 79791
  },
  {
      "fname": "Yong",
      "lname": "Polovich",
      "tel": "(139)090-1064",
      "address": "7680 Vitae Dr",
      "city": "Middletown",
      "state": "FL",
      "zip": 46809
  }
]