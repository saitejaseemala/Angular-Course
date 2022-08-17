import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [
    `
      p {
        padding: 16px;
        color: white;
        background-color: tomato;
        width: 75%;
      }
    `,
  ],
})
export class WarningAlertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
