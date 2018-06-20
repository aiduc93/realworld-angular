import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserPost, UserResponse } from '../../models/user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  user: UserResponse = {} as UserResponse;
  settingForm: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.settingForm = this.formBuilder.group({
      image: "",
      bio: "",
      password: "",
      username: "",
      email: ""
    })
  }

  ngOnInit() {
    this.handleGetUser()
    this.settingForm.patchValue(this.user);

  }

  handleGetUser() {
    console.log(this.userService.getCurrentUser())
    Object.assign(this.user, this.userService.getCurrentUser())
  }

  handleSubmit() {
    const user = this.settingForm.value;
    user.password = null;
    console.log('user', user);

    this.userService.updateUser(user).subscribe(
      updatedUser => this.router.navigateByUrl('/'),

    );
  }

  logout() {
    this.userService.clearAuth();
    this.router.navigateByUrl('/');
  }
}
