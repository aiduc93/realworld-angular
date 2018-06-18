import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { UserPost } from '../../models/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authType: string;
  title: string;
  isSubmitting: boolean = false;
  authForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.authForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.authType = data[data.length - 1].path;
      this.title = (this.authType === 'signin') ? 'Sign in' : 'Sign up';
      if (this.authType === 'signup') {
        this.authForm.addControl('username', new FormControl);
      }
    })
  }
  onSubmitForm() {
    this.isSubmitting = true;
    // this.errors = { errors: {} };

    const credentials = new UserPost(this.authForm.value);
    console.log('this.authForm',credentials)
    this.userService
      .attemptAuth(this.authType, credentials)
      .subscribe(
        data => this.router.navigateByUrl('/'),
        err => {
          // this.errors = err;
          this.isSubmitting = false;
        }
      );
  }
}
