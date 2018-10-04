import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  myForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.myForm=new FormGroup({
      email:new FormControl('',Validators.required),
      password:new FormControl(),
      address:new FormControl(),
      address2:new FormControl(),
      city:new FormControl(),
      state:new FormControl,
      zip:new FormControl(),
      status:new FormControl()
    })
  }

  registerUser(){
    console.log(this.myForm)
  }

}
