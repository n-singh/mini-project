import { Component } from '@angular/core';

class Newsletter{
    fullName: string;
    email: string;
    message: string;
    newsType: string;
}

@Component({
    selector: 'newsletter',
    templateUrl: './app/newsletter.component.html'
})

export class NewsletterComponent{
    newsTypes = ["Baking", "Starters", "Dinner"];
    
    model: Newsletter = new Newsletter();

    submitted = false;

    register(){
        this.submitted = true;
    }

}