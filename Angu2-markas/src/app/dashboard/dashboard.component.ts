import { Component, OnInit, Output } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  // My array of users containing only strings
  userList: string[] = []
  
  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
    
  }
  // Receives and event from "Add button" and adds the event to the array.
  // If statement to check if input value "event" is empty or not
  addUser(event):void {
    if (event != null) {
    this.userList.push(event)
    }
  }

  // Receives an event from "Remove button" and removes a user from the array
  removeUser():void {
    this.userList.pop()
  }

}


