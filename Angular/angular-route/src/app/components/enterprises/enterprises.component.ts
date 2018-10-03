import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../person.service';

@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css']
})
export class EnterprisesComponent implements OnInit {
  person;
  constructor(private ps :PersonService) { }

  ngOnInit() {
    this.person  = this.ps.getPerson();
    console.log(this.person)
  }

}
