import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/model/pizza';
import { Dog } from 'src/model/dog';
import { Item } from 'src/model/item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  items:Item[];

  dis_active:boolean;

  colorChange:boolean;

  displayLink:boolean;

  constructor() { 

    /*------------------CLASS--------------*/

    // const selva = new Pizza('Cheese corn',["corn","cheese"])
    // const kartig = new Pizza('Chicken',["chicken","fish"])
    
    // console.log(selva.display());
    // console.log(kartig.display());


    /*-----------------INTERFACE------------*/

    // const labra = new Dog("Spike");

    // console.log(`${labra.name} sounds like ${labra.sound()} and has ${labra.legs()} legs!`);


    /*------------------DIRECTIVES----------*/

    this.items=[
      {
        name:'Laptop',
        price:50000,
      },
      {
        name:'Phone',
        price:20000,
      },
      {
        name:'Tablet',
        price:10000,
      }
    ];
    
  }

  ngOnInit() {

    this.dis_active=false;
    this.colorChange=false;
    this.displayLink=true;
  }

}
