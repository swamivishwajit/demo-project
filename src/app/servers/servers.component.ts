import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false;
  serverCreationStatus:string = 'Server was not created!';
  serverName: string = 'TestServer';
  createdBy:string = 'Vishwajit Swami';
  serverCreated:boolean = false;
  servers = ['TestServer1','TestSeever2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! and name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreatedByReset() {
    this.createdBy = '';
  }
}
