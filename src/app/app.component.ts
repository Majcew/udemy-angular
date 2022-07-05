import { Component } from '@angular/core';
import { STATE } from './success/success.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnState : STATE = STATE.OFF
  visibleText: string = 'nothing'

  constructor() {
    setTimeout(()=>{
      this.btnState = STATE.ON
    }, 2000)
   }

   onInputChange(event: Event){
    this.visibleText = (<HTMLInputElement>event.target).value
   }
}
