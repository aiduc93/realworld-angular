import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserResponse } from '../../../models/user';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: UserResponse;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUser();
    console.log('vaof');
    
  }
  
  getUser() {
    this.userService.currentUser.subscribe(data => this.user = data)
  }
  isCollapsed = true;
}
