import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  studentsDetails = data;
  constructor() { }

  ngOnInit() {
  }

}

const data = [
  {
      "fname": "Meribeth",
      "lname": "Bruce",
      "tel": "(674)056-4724",
      "address": "8394 Porta Ave",
      "city": "Laredo",
      "state": "IN",
      "zip": 76132
  },
  {
      "fname": "Lidia",
      "lname": "Jackson",
      "tel": "(523)871-8937",
      "address": "8931 Elementum Dr",
      "city": "Buffalo",
      "state": "RI",
      "zip": 82736
  },
  {
      "fname": "Deborah",
      "lname": "Ormond",
      "tel": "(248)970-7104",
      "address": "4376 Rutrum Ct",
      "city": "Brownsville",
      "state": "HI",
      "zip": 20545
  },
  {
      "fname": "Eva",
      "lname": "Muzyka",
      "tel": "(166)091-2658",
      "address": "8154 Et Ct",
      "city": "Columbia",
      "state": "OH",
      "zip": 10803
  },
  {
      "fname": "Beverly",
      "lname": "Schuhmann",
      "tel": "(993)211-7275",
      "address": "9154 Curabitur Dr",
      "city": "Stoneham",
      "state": "ND",
      "zip": 62990
  },
  {
      "fname": "Qazzafi",
      "lname": "Barnes",
      "tel": "(406)934-5128",
      "address": "3048 Nunc Ave",
      "city": "Atlanta",
      "state": "UT",
      "zip": 66820
  },
  {
      "fname": "Grace",
      "lname": "Bettencourt",
      "tel": "(374)204-6492",
      "address": "1870 Placerat Ave",
      "city": "Winona Lake",
      "state": "GA",
      "zip": 83523
  },
  {
      "fname": "Carman",
      "lname": "Bondy",
      "tel": "(895)002-0780",
      "address": "1370 Amet St",
      "city": "Saint Clair Shores",
      "state": "OR",
      "zip": 13554
  },
  {
      "fname": "RoMeka",
      "lname": "Mcgarity",
      "tel": "(335)360-7823",
      "address": "4645 Tincidunt Ln",
      "city": "Cedartown",
      "state": "MN",
      "zip": 44987
  },
  {
      "fname": "Sandro",
      "lname": "Joachim",
      "tel": "(671)371-6730",
      "address": "8482 Sollicitudin Ln",
      "city": "Duck River",
      "state": "TN",
      "zip": 76415
  }
]