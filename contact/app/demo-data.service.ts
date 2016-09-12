import { RECIPEDATA } from './demo-data';
import { Injectable } from '@angular/core';

@Injectable()
export class DemoDataService {
    getDemoData() {
        return RECIPEDATA;
    }
    getDemoDataById(id: number) {

        let result = RECIPEDATA.filter(function( obj ) {
            return obj.id == id;
        });
        if (result.length > 0) {
            return result[0];
        }
        else {
            return null;
        }
     }
}