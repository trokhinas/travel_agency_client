import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../User';
import {GlobalDataService} from '../../global-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user: User;

  constructor(private userService: UserService,
              private globalData: GlobalDataService) { }

  ngOnInit() {
    const userId = this.globalData.getUserId();
    this.userService
      .getUser(userId)
      .subscribe(user => this.user = user);
  }

}
