import { Component } from '@angular/core';
import { STATE } from './success/success.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnState : STATE = STATE.OFF;
  visibleText: string = '';
  eventHandledText: string = "No text was triggered from button click yet!";

  constructor() {}

   onInputChange(event: Event){
    this.visibleText = (<HTMLInputElement>event.target).value
   }

   onButtonClick(){
    this.visibleText = '';
   }
}
