import { Component, OnInit } from '@angular/core';
//we can display information about single item
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
