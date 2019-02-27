import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // My array of users
  userList = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado', 'John'];

  constructor() { }

  ngOnInit() {
    
  }

}
