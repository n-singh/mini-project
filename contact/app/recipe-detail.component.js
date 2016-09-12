"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var demo_data_service_1 = require('./demo-data.service');
var RecipeDetailComponent = (function () {
    function RecipeDetailComponent(demoDataService, route) {
        this.demoDataService = demoDataService;
        this.route = route;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var recipeId = this.route.snapshot.params['recipeId'];
        this.recipe = this.demoDataService.getDemoDataById(recipeId);
    };
    RecipeDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    RecipeDetailComponent = __decorate([
        core_1.Component({
            selector: 'recipe-detail',
            templateUrl: './app/recipe-detail.component.html'
        }), 
        __metadata('design:paramtypes', [demo_data_service_1.DemoDataService, router_1.ActivatedRoute])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());
exports.RecipeDetailComponent = RecipeDetailComponent;
//# sourceMappingURL=recipe-detail.component.js.map