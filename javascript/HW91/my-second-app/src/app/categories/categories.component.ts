import { Component, Input } from '@angular/core';
import {CatList} from '../shared/catList'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @Input()
  category!: CatList;

  }

