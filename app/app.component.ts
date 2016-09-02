import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
 template: `
    <h2>{{first.content}}</h2>
    <h2 [innerText]="first.content"></h2>
    <h1 [style.color]="color">{{first.content}}</h1>
  `
})
export class AppComponent { 
    first = { content: 'Angular 2 Start' };
    color = 'green';
}
