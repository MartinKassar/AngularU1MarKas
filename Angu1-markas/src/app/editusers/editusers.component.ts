import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent implements OnInit {
  @Input() user:string []
  @Output() public  = new EventEmitter()

  
  
  public addUsername: string
  clickMessage:string = '' //Message on button click

  onClickAdd():any {
    this.clickMessage = 'You added a user'
    console.log(this.addUsername)
  }
  
  onClickRemove():any {
    this.clickMessage = 'You removed a user'
  }


  constructor() { }

  ngOnInit() {
  }
  

}
