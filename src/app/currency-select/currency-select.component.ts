import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/model/currency';

@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.css']
})
export class CurrencySelectComponent implements OnInit {

  currencies:Currency[];

  sel_cur:Currency;

  cc:boolean;

  constructor() { 

    this.currencies=[
      {
        name:"INR",
        symbol:'₹'
      },
      {
        name:"Dollar",
        symbol:'$'
      },
      {
        name:"Euro",
        symbol:'€'
      },
    ]

    
  }

  ngOnInit() {

    this.sel_cur=this.currencies[1];

    this.cc=false;

  }

  tax(e){
    if(e.target.checked){
      this.cc=true;
    }
    else{
      this.cc=false;
    }
  }


}
