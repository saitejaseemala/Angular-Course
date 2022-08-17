import { Component } from '@angular/core';

const customStyle = ` p{
  padding-top: 10px;
}`;

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [customStyle],
})
export class ServerComponent {
  serverId: number = 10; // String Interpolation
  serverStatus: string = 'offline'; // String Interpolation
  allowNewServer: boolean = false; // Property Binding
  serverCreationStatus: string = 'No Server was created!!';
  inputField: string = '';
  serverName: string = 'Two-way Binding';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  // String Interpolation

  getServerStatus() {
    return this.serverStatus;
  }

  // Property Binding

  onCreateServer() {
    this.serverCreationStatus =
      'Server was created. Name of the server is ' + this.serverName;
  }

  // Event Binding

  onInputChange(event: Event) {
    this.inputField = (<HTMLInputElement>event.target).value;
  }

  // Two-way Binding

  onTextChange(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
