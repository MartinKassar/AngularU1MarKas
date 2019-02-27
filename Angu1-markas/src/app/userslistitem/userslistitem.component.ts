import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-userslistitem',
  templateUrl: './userslistitem.component.html',
  styleUrls: ['./userslistitem.component.css']
})

export class UserslistitemComponent implements OnInit {
  @Input() user:string


  constructor() { }

  ngOnInit() {
    console.log(this.user)
  }

}

