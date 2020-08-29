import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  custData:any;

  constructor(private custserv:CustomerService) { }

  ngOnInit() {
  }

  displayCustomer(){

    this.custserv.getCustServ().subscribe(
      resp=>{

        this.custData = resp.data
        
      },
      error=>{

        console.log(error);
        
      },
      ()=>{

        console.log("APi called successfully");
        
      }
    )

  }

}
