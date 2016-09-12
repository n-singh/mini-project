import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe-list.component';
import { NewsletterComponent } from './newsletter.component';
import { RecipeDetailComponent } from './recipe-detail.component';

const appRoutes: Routes = [
    {
      path: 'newsletter',
      component: NewsletterComponent
    },
 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);