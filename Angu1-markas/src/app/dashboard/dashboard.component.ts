import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  // My array of users containing only strings
  userList: string[] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado', 'John']
  receiveEvent($event) {
    this.userList.push($event)
  }
  
  public message = ""

  constructor() { }

  ngOnInit() {
    
  }

}


