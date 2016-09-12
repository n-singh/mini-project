import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { DemoDataService } from './demo-data.service';

@Component({
  selector: 'recipe-list',
  templateUrl:'./app/recipe-list.component.html',
})
export class RecipeListComponent implements OnInit { 
    recipes: Recipe[];
    
    constructor(private demoDataService: DemoDataService) {}
    
    ngOnInit(){
        this.recipes = this.demoDataService.getDemoData();
    }

}