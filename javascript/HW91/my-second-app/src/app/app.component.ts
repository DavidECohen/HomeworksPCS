import { Component } from '@angular/core';
import {CatList} from './shared/catList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-second-app';

list1:CatList={list:[
 {catType:'Cars',
contents:[{name:'Lexus rx330',price:39995},{name:'mercedes GLA',price:43550},{name:'BMW x3',price:38750}]},

{catType:'Homes',
contents:[{name:'Villa ',price:1139995},{name:'summer home',price:6643550},{name:'condo',price:500000}]}

]


}
}
