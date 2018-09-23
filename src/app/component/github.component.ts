import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'github',
  templateUrl: `github.component.html`,
})
export class GithubComponent { 
    
    constructor(){
        console.log('Github Component Init...');
    }

}
