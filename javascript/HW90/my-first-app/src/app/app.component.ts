import { Component } from '@angular/core';
import { Order } from './shared/Order';
import {Person} from './shared/Person'
import {Item} from './shared/Item'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Order Form';

  order:Order={person:{ 
    firstName: 'Mike',
    lastName: 'Pence',

  address: {
    street: '206 Raceway Drive',
    city: 'Indianapolis',
    state: 'IN',
    zip: '54777'}},

date:'01/13/21',
item:{name:'Parler',
description:'free-speech app',
price:0},

quantity:10000};}
