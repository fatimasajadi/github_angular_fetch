import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created!'
  serverName = "";
  user = null;
  repoName = null;

  constructor() { }

  ngOnInit() { }

  whatIsServerName() {
    const userName = this.serverName;

    fetch(`https://api.github.com/users/${userName}`)
      .then(response => response.json())
      .then(obj => {
        this.user = obj;
      })

    fetch(`https://api.github.com/users/${userName}/repos`)
      .then(response => response.json())
      .then(obj => {
        this.repoName = obj;
      })


  }

}
