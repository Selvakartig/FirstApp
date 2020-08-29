import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  user:User={
    fname:'',
    lname:'',
    address:''
  };

  constructor() { 
  }

  ngOnInit() {
  }

}
