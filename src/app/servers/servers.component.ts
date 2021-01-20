import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowServer:boolean = false
  ServerCreated:string = ''
  ServerBool:boolean = false
  ServerName = ''
  constructor() {
    setTimeout(() => {
      this.allowServer = true
    }, 2000);
   }

  ngOnInit(): void {
  }
  createServer(){
    this.ServerBool = true;
    this.ServerCreated = this.ServerName+' Server is Created'||'Server is created'
  }
  UpdateName(event: Event){
    this.ServerName = (<HTMLInputElement>event.target).value
  }

}
