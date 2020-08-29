export class Pizza{
    private name:string;
    private toppings:string[];

    constructor(name:string,toppings:string[]){
        this.name = name;
        this.toppings = toppings;
    }

    display(){
        console.log('You have ordered '+this.name+' Pizza!')
    }
}