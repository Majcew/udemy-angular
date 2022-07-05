import { Component, OnInit } from '@angular/core';

export enum STATE{
  OFF,
  ON
}

interface Status{
  status:STATE
  message:string
}

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  state_info:Status = {
    status: STATE.ON,
    message: "Everything works!"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
