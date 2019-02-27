import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent implements OnInit {
  clickMessage:string = '' //Message on button click
  userName:string = '' //Username

  onClickAdd():void {
    this.clickMessage = 'You added a user'
  }
  
  onClickRemove():void {
    this.clickMessage = 'You removed a user'
  }


  constructor() { }

  ngOnInit() {
  }

}
