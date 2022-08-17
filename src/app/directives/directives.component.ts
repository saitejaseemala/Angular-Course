import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  serverName = 'Testserver';
  serverCreated = false;
  serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  servers = ['Test server', 'Server 2'];
  constructor() {}

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  //ngStyle
  getColor() {
    return this.serverStatus === 'online' ? 'Green' : 'tomato';
  }
}
