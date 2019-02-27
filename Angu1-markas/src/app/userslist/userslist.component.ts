import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
@Input() users: string[]
  constructor() { }

  ngOnInit() {
  }

}
