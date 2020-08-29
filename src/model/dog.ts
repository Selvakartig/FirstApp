import { animal } from './animal';

export class Dog implements animal{

    name: string;

    constructor(name:string){
       this.name = name;
    }

    sound(): string {
        return "Bow Bow"
    }
    legs(): number {
        return 4
    }
    
}