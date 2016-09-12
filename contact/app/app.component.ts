import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RecipeListComponent } from './recipe-list.component';
import { NewsletterComponent } from './newsletter.component';
import { DemoDataService } from './demo-data.service';
import { RecipeDetailComponent } from './recipe-detail.component';

@Component({
  selector: 'my-app',
  template: `
        <my-header></my-header>
        <h1>{{title}}</h1>
        <router-outlet></router-outlet>
  `,
  directives: [ HeaderComponent, RecipeListComponent, NewsletterComponent, RecipeDetailComponent  ],
  providers: [ DemoDataService ]
})
export class AppComponent { 
    
}
