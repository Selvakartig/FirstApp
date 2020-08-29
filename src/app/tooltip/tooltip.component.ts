import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {

  selected_opt:boolean;

  constructor() { }

  ngOnInit() {
  
    this.selected_opt=false;

  }

  enter(){
    this.selected_opt=true;
  }

  exit(){
    this.selected_opt=false;
  }

}
