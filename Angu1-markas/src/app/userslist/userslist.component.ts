import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
@Input() users: string[] //Takes in Users
isSpecial: boolean = true // A boolean set to true, that will later affect color of the list
  constructor() { }

  ngOnInit() {
  }

// Function that changes color based on a boolean called "isSpecial"
changeColor():any {
  this.isSpecial = !this.isSpecial
}
}
