import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../../models/profile';
import { ProfileService } from '../../services/profile.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { concatMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;
  profile: Profile;
  isUser: boolean;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private userService: UserService
  ) { }

  ngOnInit() {
    console.log('1', this.route.data);
    this.route.data.subscribe((data: { profile: Profile }) => {
      this.profile = data.profile;
      console.log('this.profile123123', this.profile);

    });
    this.route.data.pipe(concatMap((data: { profile: Profile }) => {
      console.log('data', data);

      this.profile = data.profile;
      console.log('this.profile', this.profile);

      return this.userService.currentUser.pipe(tap(
        (userData: User) => {
          this.user = userData;
          console.log('this.user', this.user);
          console.log('this.profile11', this.profile);
          this.isUser = (this.user.username === this.profile.username);
        }
      ))
    })).subscribe();
  }

  getProfile() {

  }
}
