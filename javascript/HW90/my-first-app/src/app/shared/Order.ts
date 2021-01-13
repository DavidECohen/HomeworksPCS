
import { Item } from './Item';
import {Person} from './Person';

export  interface Order {
 date:string;
person: Person;
item: Item;
quantity: number;
 
}
