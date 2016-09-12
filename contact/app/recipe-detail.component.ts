import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from './recipe';
import { DemoDataService } from './demo-data.service';

@Component ({
    selector: 'recipe-detail',
    templateUrl: './app/recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;

    constructor(private demoDataService: DemoDataService, private route: ActivatedRoute) { }
    
ngOnInit() {
    let recipeId = this.route.snapshot.params['recipeId'];
    this.recipe = this.demoDataService.getDemoDataById(recipeId);
}

goBack(): void {
    window.history.back();
    }
}